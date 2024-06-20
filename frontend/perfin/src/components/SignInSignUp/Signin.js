// import React, { useState } from 'react'
// import { FaFacebook } from "react-icons/fa";
// import { FaGoogle } from "react-icons/fa6";


// const Signin = () => {
//     const [signIn,setSignIn]=useState(true)
//   return (
//     <div className='flex mx-auto my-16 justify-center'>
//     {signIn&&<div className=' flex-row text-center w-96 bg-blue-400 px-5 py-10 text-2xl rounded-lg'>
//         <form>
//         <h1 className='text-3xl'>Login</h1>
//         <div> 
//             <div className='flex flex-col'>
//             <input type='email' required placeholder='Email' className='outline-none my-2 p-2 rounded-lg'></input>
//            <input type='password' required placeholder='Password'  className='outline-none p-2 rounded-lg'></input>
//             </div>
//             <p className='text-lg my-1 p-2 text-blue-500'>Forgot Password?</p>
//             <button className='w-full border-2 border-black rounded-lg my-1 p-2  bg-blue-500'>Login</button>
//             <p className='my-1 p-2 text-lg'>Don't have an account? <i oncli>Signup</i></p>
//             <p>OR</p>
//            <button className='w-full rounded-lg my-1 p-2 border-black border-2 flex items-center justify-around'><FaFacebook/>Login with Facebook</button>
//             <button className='w-full rounded-lg my-1 p-2 border-black border-2 flex items-center justify-around'><FaGoogle/>Login with Google</button>
//         </div>
//         </form>
//     </div>}

// <div className='flex-row text-center w-96 bg-blue-400 px-5 py-10 text-2xl rounded-lg'>
//     <form>
// <h1 className='text-3xl'>SignUp</h1>
// <div> 
//     <div className='flex flex-col'>
//     <input type='text' required placeholder='Name' className='outline-none my-2 p-2 rounded-lg'></input>
//     <input type='email' required placeholder='Email' className='outline-none my-2 p-2 rounded-lg'></input>
//     <input type='password' required placeholder='Password'  className='outline-none p-2 rounded-lg my-2'></input>
//     </div>
//     <button className='w-full border-2 border-black rounded-lg my-1 p-2  bg-blue-500'>Login</button>
//     <p className='my-1 p-2 text-lg'>Already have an account? <i>SignIn</i></p>
//     <p>OR</p>
//    <button className='w-full rounded-lg my-1 p-2 border-black border-2 flex items-center justify-around'><FaFacebook/>Login with Facebook</button>
//     <button className='w-full rounded-lg my-1 p-2 border-black border-2 flex items-center justify-around'><FaGoogle/>Login with Google</button>
// </div>
// </form>
// </div>
// </div>
//   )
// }

// export default Signin


import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

const Signin = () => {
    const [signIn, setSignIn] = useState(true);

    const toggleForm = () => {
        setSignIn(!signIn);
    };

    return (
        <div className='flex mx-auto my-16 justify-center'>
            {signIn ? (
                <div className='flex-row text-center w-96 bg-blue-400 px-5 py-10 text-2xl rounded-lg'>
                    <form>
                        <h1 className='text-3xl'>Login</h1>
                        <div>
                            <div className='flex flex-col'>
                                <input type='email' required placeholder='Email' className='outline-none my-2 p-2 rounded-lg' />
                                <input type='password' required placeholder='Password' className='outline-none p-2 rounded-lg' />
                            </div>
                            <p className='text-lg my-1 p-2 text-blue-500'>Forgot Password?</p>
                            <button className='w-full border-2 border-black rounded-lg my-1 p-2 bg-blue-500'>Login</button>
                            <p className='my-1 p-2 text-lg '>Don't have an account? <i className="cursor-pointer underline text-blue-700" onClick={toggleForm}>Signup</i></p>
                            <p>OR</p>
                            <button className='w-full rounded-lg my-2 p-2 border-black border-2 flex items-center justify-around bg-blue-500'><FaFacebook />Login with Facebook</button>
                            <button className='w-full rounded-lg my-2 p-2 border-black border-2 flex items-center justify-around bg-white'><FaGoogle />Login with Google</button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className='flex-row text-center w-96 bg-blue-400 px-5 py-10 text-2xl rounded-lg'>
                    <form>
                        <h1 className='text-3xl'>SignUp</h1>
                        <div>
                            <div className='flex flex-col'>
                                <input type='text' required placeholder='Name' className='outline-none my-2 p-2 rounded-lg' />
                                <input type='email' required placeholder='Email' className='outline-none my-2 p-2 rounded-lg' />
                                <input type='password' required placeholder='Password' className='outline-none p-2 rounded-lg my-2' />
                            </div>
                            <button className='w-full border-2 border-black rounded-lg my-1 p-2 bg-blue-500'>SignUp</button>
                            <p className='my-1 p-2 text-lg'>Already have an account? <i className="cursor-pointer underline text-blue-700" onClick={toggleForm}>SignIn</i></p>
                            <p>OR</p>
                            <button className='w-full rounded-lg my-2 p-2 border-black border-2 flex items-center justify-around bg-blue-500'><FaFacebook />Login with Facebook</button>
                            <button className='w-full rounded-lg my-2 p-2 border-black border-2 flex items-center justify-around bg-white'><FaGoogle />Login with Google</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Signin;