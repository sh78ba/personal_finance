
import React, { useContext, useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import axios from "axios"
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';


const Signin = () => {
    const [signIn, setSignIn] = useState(true);
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const [name,setName]=useState("")
    const navigate=useNavigate();
    const [errorMsg,setErrorMsg]=useState("")
    const {setToken,setUsername,setUserEmail}=useContext(AuthContext)

    const toggleForm = () => {
        setSignIn(!signIn);
    };


    const handleSignIn=async(e)=>{
       e.preventDefault();
       try{
        const response=await axios.post("http://localhost:8888/personalfinance/api/v1/signin",{
            email,
            password,
        })
        setToken(response.data.accessToken);
        setUserEmail(response.data.email)
        setUsername(response.data.name)
        localStorage.setItem("token",response.data.accessToken);
        localStorage.setItem("username",response.data.name)
        localStorage.setItem("useremail",response.data.email)

        navigate("/dashboard")

       }catch(error){
        console.error("Authentication failed:", error);
      setToken(null);
      setUserEmail(null)
      setUsername(null)

      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("useremail");

      if (error.response && error.response.data) {
        setErrorMsg(error.response.data.message)
      }else {
        setErrorMsg("An unexpected error occurred. Please try again.");
      }
       }
    }


    //signup
    const handleSignUp=async(e)=>{
       e.preventDefault();
       try{
        const response=await axios.post("http://localhost:8888/personalfinance/api/v1/signup",{
            name,
            email,
            password,
        })
        setErrorMsg(response.data.message)
        setTimeout(() => {
            window.location.reload();
          }, 2000);

    }catch(error){
        console.error("Authentication failed:", error);
        if (error.response && error.response.data) {
            setErrorMsg(error.response.data.message)
          }else {
            setErrorMsg("An unexpected error occurred. Please try again.");
          }
        }
    }




    return (
        <div className='flex mx-auto h-screen justify-center bg-blue-400 items-center'>
            {signIn ? (
                <div className='flex-row text-center h-fit w-96 bg-blue-200 px-5 py-6 text-2xl rounded-lg'>
                    <form>
                    <div className='w-full rounded-lg  flex items-center justify-around bg-red-300'>{errorMsg}</div>
                        <h1 className='text-3xl'>Login</h1>
                        <div>
                            <div className='flex flex-col'>
                                <input type='email' required placeholder='Email' onChange={(e)=>setEmail(e.target.value)} className='outline-none my-2 p-2 rounded-lg' />
                                <input type='password' required placeholder='Password' onChange={(e)=>setPassword(e.target.value)} className='outline-none p-2 rounded-lg' />
                            </div>
                            <p className='text-lg my-1 p-2 text-blue-500'>Forgot Password?</p>
                            <button className='w-full border-2 border-black rounded-lg my-1 p-2 bg-blue-300' onClick={handleSignIn}>Login</button>
                            <p className='my-1 p-2 text-lg '>Don't have an account? <i className="cursor-pointer underline text-blue-500" onClick={toggleForm}>Signup</i></p>
                            <p>OR</p>
                            <button className='w-full rounded-lg my-2 p-2 border-black border-2 flex items-center justify-around bg-blue-300'><FaFacebook />Login with Facebook</button>
                            <button className='w-full rounded-lg my-2 p-2 border-black border-2 flex items-center justify-around bg-white'><FaGoogle />Login with Google</button>
                        </div>
                       
                    </form>
                </div>
            ) : (
                <div className='flex-row text-center w-96 h-fit bg-blue-200 px-5 py-6 text-2xl rounded-lg'>
                    <form>
                    <div className='w-full rounded-lg  flex items-center justify-around bg-red-300'>{errorMsg}</div>
                        <h1 className='text-3xl'>SignUp</h1>
                        <div>
                            <div className='flex flex-col'>
                                <input type='text' required placeholder='Name' onChange={(e)=>setName(e.target.value)} className='outline-none my-2 p-2 rounded-lg' />
                                <input type='email' required placeholder='Email' onChange={(e)=>setEmail(e.target.value)} className='outline-none my-2 p-2 rounded-lg' />
                                <input type='password' required placeholder='Password' onChange={(e)=>setPassword(e.target.value)} className='outline-none p-2 rounded-lg my-2' />
                            </div>
                            <button className='w-full border-2 border-black rounded-lg my-1 p-2 bg-blue-300' onClick={handleSignUp} >SignUp</button>
                            <p className='my-1 p-2 text-lg'>Already have an account? <i className="cursor-pointer underline text-blue-500" onClick={toggleForm}>SignIn</i></p>
                            <p>OR</p>
                            <button className='w-full rounded-lg my-2 p-2 border-black border-2 flex items-center justify-around bg-blue-300'><FaFacebook />Login with Facebook</button>
                            <button className='w-full rounded-lg my-2 p-2 border-black border-2 flex items-center justify-around bg-white'><FaGoogle />Login with Google</button>
                        </div>
                       

                    </form>
                </div>
            )}
            
        </div>
    );
};

export default Signin;
