import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Searchbar() {
  return (
    <div>
      <form className='h-10 w-5/6  md:w-2/5 mx-auto flex'>
        <input type="text" placeholder='search' name="search" className='bg-gray-100 px-3 rounded-l h-full  w-[85%]' />
          <button type="submit" className='w-[15%] h-full rounded-r bg-gray-100'> <AiOutlineSearch size={"2em"} className='mx-auto'/> </button>
     </form>
    </div>
  )
}
