import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Searchbar() {
  return (
    <div>
      <form className='h-14 w-3/4 bg-gray-300 rounded-xl'>
          <input type="text" placeholder='search' name="search" className=' bg-gray-300 w-4/5 h-full' />
          <button type="submit" className='float-right px-6 py-3 border-0'> <AiOutlineSearch size={"2em"}/> </button>
     </form>
    </div>
  )
}
