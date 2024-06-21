
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from "./components/Pages/Router"
import { AuthProvider } from './components/SignInSignUp/AuthContext';



function App() {

  return (
   <>
   <AuthProvider>
   <RouterProvider router={router}/>

   </AuthProvider>
   </>
  );
}

export default App;
