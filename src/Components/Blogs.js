import React from 'react';

const Blogs = () => {
  return (
    <div>
      <div className='m-4 lg:m-20'>
        <div className='text-center font-semibold  m-3 p-3'>
          <p className='text-2xl'>Here is some interview question.</p>
        </div>
        <div className='m-3 p-3'>
          <h1 className='font-bold text-3xl mb-2'>Question-1: What is the purpose of React Router?</h1>
          <p className='text-xl' ><span className='font-semibold ' >Answer: </span>  React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
        </div>
        <div className='m-3 p-3 mt-4'>
          <h1 className='font-bold text-3xl mb-2'>Question-2: How does context API works?</h1>
          <p className='text-xl' ><span className='font-semibold ' >Answer: </span>  Context api  pass data from parent to children nested deep down the component tree directly,It is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
        </div>
        <div className='m-3 p-3 mt-4'>
          <h1 className='font-bold text-3xl mb-2'>Question-3: What is useRef Hook?</h1>
          <p className='text-xl' ><span className='font-semibold ' >Answer: </span>  Ref means just reference, so it can be a reference to anything (DOM node, Javascript value, etc). The useRef hook returns a mutable object which doesn’t re-render the component when it’s changed. Think it like useState, but unlike useState, doesn’t trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;