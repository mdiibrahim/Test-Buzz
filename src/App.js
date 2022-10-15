
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Analysis from './Components/Analysis/Analysis';
import Blog from './Components/Blog/Blog';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import QuizDetails from './Components/QuizDetails/QuizDetails';


function App() {
  const router = createBrowserRouter([

  
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: '/quiz',
          loader: async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: '/quiz/:quizId',
          loader: async ({params}) => {
           
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizDetails></QuizDetails>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>,
        },
        {
          path: '/analysis',
          loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Analysis></Analysis>,
        },
        {
          path: '/about',
          element: <About></About>,
        },
        {
          path: '/*',
          element: <Error></Error>,
        },

      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
