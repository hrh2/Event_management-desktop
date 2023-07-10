import React from 'react';
import {
  ChevronLeft,
  MapPin,
  Share2,
  Bookmark,
  DollarSign,
  ChevronRight,
  Dribbble,
  Sliders,
  Key,
} from 'react-feather';
import basketPlaygroundImg from '../../assets/basketplayground.jpg'; // Replace with the correct path to your image
import playgroundsImg from '../../assets/playgrounds.jpg'; // Replace with the correct path to your image

const BookPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Background Image */}
      <div
        className="flex-shrink-0 h-80 sm:h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${basketPlaygroundImg})`,
        }}
      >
        {/* Chevron Left and Turf Grounds */}
        <div className="absolute top-4 left-2 flex items-center">
          <ChevronLeft size={24} className="text-white" />
          <p className="ml-6 text-white">Turf Grounds</p>
        </div>
      </div>

      {/* Content */}
      <main className="flex-grow bg-white py-4 px-4">
        {/* Coolulu Karmangala and Stars */}
        <div className="flex items-center">
          <div className="flex-grow">
                      <h2 className="text-2xl font-bold text-gray-800">Coolulu Karmangala</h2>
                      <h2 className="text-2xl font-bold text-gray-800"> Turf Park</h2>
            <div className="flex items-center mt-2">
              {/* Five Stars */}
              {[1, 2, 3, 4, 5].map((index) => (
                <svg
                  key={index}
                  className="w-4 h-4 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L14.6 8.8L22 9.3L16.2 14L17.5 21L12 17.5L6.5 21L7.8 14L2 9.3L9.4 8.8L12 2Z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Map Pin, Directions, Share, Bookmark */}
          <div className="flex items-center ml-4">
            <div>
              <div>
                <Share2 size={20} className="mr-1 text-gray-400" />
                <Bookmark size={20} className="mr-1 text-gray-400" />
              </div>
              <p className="font-semibold text-gray-600 ">Starting from</p>
              <div className="flex items-center">
                <DollarSign size={18} className="mr-1 text-gray-600" />
                <p className="mr-1 text-gray-600">1200</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Pin, Directions */}
        <div className="flex items-center mt-4">
          <MapPin size={20} className="ml-1 text-gray-400" />
          <p className='text-gray-400'>Directions</p>
        </div>

        {/* Address */}
        <div className="mt-4 flex items-center">
          <p className="font-semibold underline text-gray-800">Address:</p>
          <p className="ml-1 text-gray-400">
            234, 3rd Cross Red, Jokkasandra Extension, Koramangala, Bengaluru, Karnataka 560034
          </p>
        </div>

        {/* Hours */}
        <div className="mt-2 flex items-center">
          <p className="font-semibold underline text-gray-800">Hours:</p>
          <p className="ml-1 text-gray-400">7am - 2am</p>
        </div>

        {/* Phone */}
        <div className="mt-2 flex items-center">
          <p className="font-semibold underline text-gray-800">Phone:</p>
          <p className="ml-1 text-gray-400">07406388666</p>
        </div>

          {/* Photos */}
              <p className="mt-4 font-semibold text-gray-800">Photos</p>
              <p className="flex-shrink-0 flex justify-end font-semibold text-pink-950">List All</p>
              <div>
        <div className="mt-2 flex rounded-lg overflow-x-auto">
          <div className="flex rounded-lg">
            <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
            <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
            <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
            <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
            <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
            <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
            <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
            <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
            <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
                      </div>
                      </div>
              </div>
              
               {/* Chevron Right */}
      <div className="flex-shrink-0 flex justify-end">
        <ChevronRight size={24} className="mr-4" />
      </div>

        {/* Available Sports */}
        <div className="mt-4">
          <p className="font-semibold text-gray-800">Available Sports</p>
          <div className="flex items-center ml-2">
            <div className="flex items-center">
              <Dribbble size={20} className="mr-1" />
              <p className="mr-4 text-gray-400">Football</p>
            </div>
            <div className="flex items-center">
              <Sliders size={20} className="mr-1" />
              <p className="mr-4 text-gray-400">Badminton</p>
            </div>
            <div className="flex items-center">
              <Key size={20} className="mr-1" />
              <p className='text-gray-400'>Box Cricket</p>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-4">
          <p className="font-semibold text-gray-800">Amenities</p>
          <p className="ml-1 text-gray-400">Dug Outs, Washrooms, Parking, First-Aid</p>
        </div>

      </main>

      {/* Book Now Button */}
      <div className="flex-shrink-0 flex justify-end">
        <button className="bg-violet-950 text-white px-4 py-2 rounded-md w-80 mr-7 mb-4">Book Now</button>
      </div>
    </div>
  );
};

export default BookPage;
