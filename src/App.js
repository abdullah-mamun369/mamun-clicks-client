import { router } from './Routes/Public Routes/Routes'
import { RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;



