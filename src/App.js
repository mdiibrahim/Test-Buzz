
import { createRouter } from '@remix-run/router';
import './App.css';
import Main from './Components/Main/Main';

function App() {
  const router = createRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home
        }
      ]
    }

  ])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
