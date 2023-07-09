import React from 'react';
import backgroundImg from '../../assets/bangalorephoto.jpg'; // Replace with your own background image
import { Bookmark, MapPin, Calendar, DollarSign } from 'react-feather';

const HomepagePhoto = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Background Image */}
      <div
        className="flex-grow h-80 relative"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          borderRadius: '10px',
        }}
      >
        {/* Bookmark icon in top-right */}
        <div className="absolute top-4 right-4">
          <Bookmark size={40} />
        </div>

        {/* See Details overlay */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-80 p-5 mb-0 w-full">
            <h1 className="text-5xl font-semibold-100 text-white text-center">
              See Details
            </h1>
          </div>
        </div>
          </div>

        
          

      {/* Content */}
      <main className="bg-white-600 py-2 px-2 flex-grow">
        {/* Coolulu Kormangala */}
        <h2 className="text-2xl font-semibold">Coolulu Kormangala <br />Turf Park</h2>


        {/* MapPin, Bangalore, Calendar */}
        <div className="flex items-center mt-1">
          <MapPin size={20} />
          <p className="ml-1">Bangalore</p>
          <Calendar size={20} className="ml-3" />
                  <p className="ml-1">10 February</p>

                  <div className="flex justify-end flex-grow absolute right-1 pb-40">
                  <DollarSign size={30} />
          <p className="mr-2 text-light-100 text-1xl">1600</p>
                  </div>
                  </div>

          </main>
    </div>
  );
};

export default HomepagePhoto;
