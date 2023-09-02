import React from 'react';

export default function SignUp() {
  return (
    <div className='sm:grid-cols-2 h-screen w-full'>
      <div className='bg-gray-800 flex justify-center '>
        <form className='max-w-[400px] h-screen w-full mx-auto rounded-lg p-2 px-2'>
          <h2 className='text-2xl dark:text-white font-bold text-center mt-1'>Hello! <br /> Ready to explore?</h2>
            <div className='flex flex-col text-gray-400 py-1 mt-1'>
              <label className='pl-3'>Full name</label>
              <input className='p-1 rounded-lg bg-gray-700 mt-1 pl-3 focus:border-blue-500 focus:bg-gray-800 focus:outline-none border-stone-200' type="text" placeholder='Augustin Krishi' />
            </div>
            <div className='flex flex-col text-gray-400 py-1 mt-1'>
              <label className='pl-3'>Email address</label>
              <input className='p-1 pl-3 rounded-lg bg-gray-700 mt-1 focus:border-blue-500 focus:bg-gray-800 focus:outline-none border-stone-200' type="text" placeholder='augustinkrishi@gmail.com' />
            </div>
            <div className='flex flex-col text-gray-400 py-1 mt-1'>
              <label className='pl-3'>User name</label>
              <input className='p-1 pl-3 rounded-lg bg-gray-700 mt-1 focus:border-blue-500 focus:bg-gray-800 focus:outline-none border-stone-200' type="text" placeholder='johndoe2' />
            </div>
            <div className='flex flex-col text-gray-400 py-1 mt-1'>
              <label className='pl-3'>Phone</label>
              <input className='p-1 pl-7 rounded-lg bg-gray-700 mt-1 focus:border-blue-500 focus:bg-gray-800 focus:outline-none border-stone-200' type="tel" placeholder='+250 7899030993' />
            </div>
            <div className='flex flex-col text-gray-400 py-1'>
              <label className='pl-3'>Password</label>
              <input className='p-1 rounded-lg bg-gray-700 mt-1 pl-3 focus:border-blue-500 focus:bg-gray-800 focus:outline-none border-stone-200' type="password" placeholder='........'/>
            </div>
            <button className='w-full my-1 py-1 bg-violet-900 shadow-lg shadow-slate-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg mt-1'>Create account</button>
             <p className='text-1xl dark:text-white  text-center mt-1' >You have account? <a href="/authentication" className='text-blue-900'>Sign In</a></p>
        </form>
      </div>
    </div>
  )
}
