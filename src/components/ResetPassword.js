import React from 'react';
export default function ResetPassword() {
  return (
          <div className='bg-gray-800 flex flex-col justify-center'>
            <div className='max-w-[400px] w-full mx-auto rounded-lg bg-gra-900 p-8 px-8'>
                <h2 className='text-4xl font-bold text-center mt-1 text-gray-500'>Welcome! <br /> Welcome back.</h2>
               
                   <div className='flex flex-col text-gray-400 py-1 mt-1'>
                    <label>Email address</label>
                    <input className='rounded-lg bg-gray-700 mt-1 p-2 border-orange-100' type="text" placeholder='augustinkrishi@gmail.com' />
                  
                
          </div>
          </div>
                  
                  <div className='bg-violet-800 flex flex-col justify-center mt-8 max-w-full'>
                       <div className='flex flex-col text-gray-400 py-1'>
                    <p className='text-white ml-10 mr-10 mt-2'>Reset password</p>
                    <label className='ml-10 mr-10 mt-2'>Password</label>
                          <input className='ml-10 mr-10 mt-2 p-2 rounded-lg border-inherit bg-slate-600 text-center' type="password" placeholder='Enter your password' />
                          
                          <p className='text-white ml-10 mr-10 mt-2'>Confirm Password</p>
                          <input className='ml-10 mr-10 mt-2 p-2 rounded-lg focus:border-blue-500 border-stone-200 bg-slate-600 text-center' type="password" placeholder='Retype your password' />
                </div>
                
                  <button className='ml-20 mr-20 my-5 py-2 bg-white shadow-lg shadow-slate-500/50 hover:shadow-teal-500/40 text-blue-600 font-semibold rounded-lg mt-6'>Continue</button>
               </div>
        </div>
  
  )
}
