import React from 'react';
export default function ForgotPassword() {
  return (
          <div className='bg-gray-800 flex flex-col justify-center'>
            <div className='max-w-[400px] w-full mx-auto rounded-lg bg-gra-900 p-8 px-8'>
                <h2 className='text-3xl text-gray-500 font-bold text-center mt-1'>Hello! <br /> Welcome back.</h2>
               
                   <div className='flex flex-col text-gray-400 py-1 mt-1'>
                    <label>Email address</label>
                    <input className='rounded-lg bg-gray-700 mt-1 p-2 border-orange-100' type="text" placeholder='johndoe@example.com' />
                  
                  </div>
              </div>
              <div className='bg-violet-800 flex flex-col justify-center mt-2 max-w-full'>
                <div className='flex flex-col text-gray-400 py-1'>
                    <h1 className='text-white ml-10 mr-10 mt-1'>Forgot password</h1>
                      <p className='text-white ml-20 mt-3'>
                          Enter your registered email id for<br />
                          verification. We will share the verification <br /> code on your email.                      
                      </p>
                          <input className='ml-10 mr-10 mt-5 p-2 rounded-lg border-inherit bg-slate-600 text-center' type="email" placeholder='Enter your email here' />
                          <input className='ml-10 mr-10 mt-5 p-2 rounded-lg focus:border-blue-500 border-stone-200 bg-slate-600 text-center' type="password" placeholder='Enter your verification code here' />
                  </div>
                  <a href='/authentication/reset' className='ml-20 mr-20 my-5 py-2 bg-white shadow-lg shadow-slate-500/50 hover:shadow-teal-500/40 text-blue-600 font-semibold rounded-lg mt-6 text-center'>Continue</a>
               </div>
        </div>
  )
}
