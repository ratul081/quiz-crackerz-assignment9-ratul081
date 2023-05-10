import React from 'react';
import { useContext } from 'react';
import QuizSection from './QuizSection'
import { QuizContext } from '../layers/Main'

const Home = () => {
  const quizTopics = useContext(QuizContext);
  const quiz = quizTopics.data;
  // console.log(quizTopics);
  return (
    <div className='my-12'>
      <div className='text-center mx-20 my-4'>
        <h1 className='text-3xl lg:text-5xl ' >Welcome to Quiz World</h1>
        <p className='text-base md:text-lg lg:text-xl lg:mx-52 py-4'>Quizzes help one gain a broad or specialized understanding of a subject. Quizzes are intended to encourage fun learning methods while also enhancing general knowledge. Students can "think outside the box" or from diverse perspectives by participating in quiz tournaments.</p>
        <p className='text-2xl font-semibold'>Choose Any Quiz you want to give</p>
      </div>
      <div className='grid gap-4 lg:grid-cols-4 place-items-center md:grid-cols-2'>
        {
          quiz.map(quizTopic =><QuizSection
          key={quizTopic.id}
          quizTopic={quizTopic}
          ></QuizSection>)
        }
      </div>
    </div>
  );
};

export default Home;