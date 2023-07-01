import React from 'react';

export default function Login() {
  return (
    <div className='bg-gray-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center mt-1'>Hello! <br /> Welcome back.</h2>
                <div className='flex flex-col text-gray-400 py-2 mt-5'>
                    <label>Email address</label>
                    <input className='mt-3 p-2 rounded-lg focus:border-blue-500 border-stone-200 bg-slate-600 text-center' type="text" placeholder='johndoe@example.com' />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='mt-3 p-2 rounded-lg focus:border-blue-500 border-stone-200 bg-slate-600 text-center' type="password" placeholder='........'/>
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <a href='/authentication/forgot'>Forgot Password?</a>
                </div>
                  <button className='w-full my-5 py-2 bg-violet-900 shadow-lg shadow-slate-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Log In</button>
                  <p className='text-1xl dark:text-white  text-center mt-1' >You don't have an account? <a href="/authentication/signup" className='text-blue-900'>Sign Up</a></p>
                
            </form>
        </div>
  )
}
