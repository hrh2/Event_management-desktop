import React from 'react';

export default function SignUp() {
  return (
    <div className='sm:grid-cols-2 h-screen w-full'>
          <div className='bg-gray-800 flex justify-center '>
            <form className='max-w-[400px] w-full mx-auto rounded-lg p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center mt-1'>Hello! <br /> Ready to explore?</h2>
                <div className='flex flex-col text-gray-400 py-2 mt-9'>
                    <label>Full name</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none border-stone-200' type="text" placeholder='Augustin Krishi' />
                  </div>
                   <div className='flex flex-col text-gray-400 py-1 mt-1'>
                    <label>Email address</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none border-stone-200' type="text" placeholder='augustinkrishi@gmail.com' />
                </div>
                <div className='flex flex-col text-gray-400 py-1'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none border-stone-200' type="password" placeholder='........'/>
                </div>
                
                  <button className='w-full my-5 py-2 bg-violet-900 shadow-lg shadow-slate-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg mt-6'>Create account</button>
                  <p className='text-1xl dark:text-white  text-center mt-1' >You have account? <a href="/authentication" className='text-blue-900'>Sign In</a></p>
                
            </form>
        </div>
    </div>
  )
}
