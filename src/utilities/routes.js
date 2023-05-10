import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home';
import Main from '../layers/Main';
import QuizDetails from '../Components/QuizDetails';
import Result from '../Components/Result';
import Blogs from '../Components/Blogs';

const router = createBrowserRouter([
  {
    path: '/',
    loader: async() => {
      return fetch('https://openapi.programming-hero.com/api/quiz');
    },
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/quiz/:quizId',
        loader:({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        } ,
        element: <QuizDetails></QuizDetails>,
      },
      {
        path: '/result', 
        element: <Result></Result> ,
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      }
    ], 
  },
  {
    path: '*', 
    element: <h1>This Elements Not Found!!! Provide Valid URL</h1>
  }
])

export default router;