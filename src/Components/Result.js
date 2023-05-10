import React, { useState, useEffect } from 'react';
import { deleteShoppingCart, getStoredCart } from '../utilities/fakedb';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const Result = () => {
  const [quizMark, setQuizMark] = useState([])
  const scores = getStoredCart();
  console.log("🚀 ~ file: Result.js:8 ~ Result ~ scoresData:", scores)
  useEffect(() => {
    axios.get('https://openapi.programming-hero.com/api/quiz')
      .then(data => {
        const quizDataLoaded = data.data.data
        const quizDatas = quizDataLoaded.map(quizData => {
          const quizDetails = {
            name: quizData.name,
            totalQuestions: quizData.total,
            corrected: scores[`${quizData.name}`],
          }
          return quizDetails
        })
        setQuizMark(quizDatas)
      })
  }, [scores])

  const clearResults = () => {
    deleteShoppingCart();
  }

  return (
    <div>
      <div className='text-center text-4xl my-8'>
        Here is your total score in a graph.
      </div>
      <div className='flex justify-center'>
        <BarChart
          width={500}
          height={300}
          data={quizMark}
          margin={{
            top: 5,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalQuestions" fill="#8884d8" />
          <Bar dataKey="corrected" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className='text-center my-4'>
        <p className='my-4'>You can reset your scores by clicking on this button</p>
        <button className='btn btn-primary px-4' onClick={clearResults}>Reset</button>
      </div>
    </div>
  );
};

export default Result;