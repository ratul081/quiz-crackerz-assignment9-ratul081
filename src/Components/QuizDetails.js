import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Components/Questions';

const QuizDetails = () => {
  const { data } = useLoaderData();
  // console.log("🚀 ~ file: QuizDetails.js:7 ~ QuizDetails ~ data:", data)
  const questions = data.questions;
  // console.log("🚀 ~ file: QuizDetails.js:9 ~ QuizDetails ~ questions:", questions)
  // console.log(data);
  return (
    <div>
      <div className='text-center'>
        <h1 className='text-5xl mt-8'>Here is some questions of {data.name}.</h1>
        <p className='text-3xl my-3'>Practice makes a man perfect. </p>
      </div>
      {
        questions.map((questions) => <Questions
          key={questions.id}
          questions={questions}
          topicName ={data.name}
        ></Questions>)
      }
    </div>
  );
};

export default QuizDetails;