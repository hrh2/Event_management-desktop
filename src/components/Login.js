import React from 'react';

export default function Login() {
  return (
    <div className='bg-gray-800 flex flex-col justify-center'>
            <form className='grid grid-flow-row gap-3 md:w-3/5 w-4/5 mx-auto rounded-lg p-8 px-8' action='/home'>
                <h2 className='text-4xl font-bold text-center mt-1 text-white'>Hello! <br /> Welcome back.</h2>
                <div className='flex flex-col text-gray-400 py-2 mt-5'>
                    <label>Email address</label>
                    <input className=' p-3 rounded-lg focus:border-blue-500 border-stone-200 bg-slate-600 text-center' type="text" placeholder='johndoe@example.com' />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className=' p-3 rounded-lg focus:border-blue-500 border-stone-200 bg-slate-600 text-center' type="password" placeholder='........'/>
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <a href='/#'>Forgot Password?</a>
                </div>

                  <button className='w-full my-5 py-3 bg-violet-900 shadow-lg hover:shadow-slate-950/30 text-white font-semibold rounded-lg' type='submit'>Log In</button>
                  <p className='text-1xl text-white  text-center mt-1' >You don't have an account? <a href="/authentication/signup" className='text-blue-900'>Sign Up</a></p>       
            </form>
        </div>
  )
}
