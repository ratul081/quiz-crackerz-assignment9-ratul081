import { RouterProvider } from 'react-router-dom';
import router from './utilities/routes';


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
