
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from "./components/Pages/Router"
import Signin from './components/SignInSignUp/Signin';



function App() {

  return (
   <>
   {/* <RouterProvider router={router}/> */}

<Signin/>
   </>
  );
}

export default App;
