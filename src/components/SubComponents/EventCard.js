import React from 'react';
import Image from '../../assets/profile-picture.jpg';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineCalendar } from 'react-icons/hi';

export default function EventCard() {
  return (
    <div className="h-24 w-[33em] p-1 flex">
      <div className="w-2/6 aspect-w-1 aspect-h-1 bg-cover rounded-xl" style={{ backgroundImage: `url(${Image})` }}></div>
      <div className="w-4/6">
        <h1 className='p-1 px-2 font-bold AdventPro'>Electronic Steve-Music Festival</h1>
        <div className="w-full">
          <div className="float-left p-1">
            <p className="flex text-gray-500 Akaya">
              <CiLocationOn size={'1.3em'} /> Bangalore
            </p>
            <p className="flex text-gray-500 Akaya">
              <HiOutlineCalendar size={'1.3em'} />10 February
            </p>
          </div>
          <div className="float-right">
            <p className="text-gray-500 Akaya">starting from</p>
            <p className="">$ 1230</p>
          </div>
        </div>
      </div>
    </div>
  );
}
