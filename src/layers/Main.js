import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export const QuizContext = createContext([])
const Main = () => {
  const quizTopics = useLoaderData();
  
  return (
    <div>
      <QuizContext.Provider value={quizTopics}>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
      </QuizContext.Provider>
    </div>
  );
};

export default Main;