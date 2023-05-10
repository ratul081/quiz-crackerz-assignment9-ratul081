import React from 'react';
import { NavLink } from 'react-router-dom';

const QuizSection = ({ quizTopic }) => {
  const { id, name, logo, total } = quizTopic;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl my-8">
        <figure className='bg-amber-300' ><img src={logo} alt={name} /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className='text-start'>Total question: {total}</p>
          <div className="card-actions justify-end">
            <NavLink to={`quiz/${id}`} className='btn btn-primary'>Start</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSection;