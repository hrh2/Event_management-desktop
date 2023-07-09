import React from 'react';
import { MapPin, ChevronDown, Bell, Search } from 'react-feather';
import profilePicture from '../../assets/bangalorephoto.jpg'; // Replace with your own profile picture

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-slate-100 text-gray-600">
        <div className="flex items-center">
          <MapPin size={30} />
          <div className="ml-2">
            <div className="flex items-center">
              <div className="mr-2">Bangalore</div>
              <ChevronDown size={20} />
            </div>
            <div className="text-gray-800 text-xl">Sheshadri Road</div>
          </div>
        </div>
        <div className="flex items-center">
          <Bell size={25} className="text-pink-600 mr-2" />
          <img
            className="w-8 h-8 rounded-full mr-1"
            src={profilePicture}
            alt="Profile"
          />
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow flex flex-col mt-2">
        <div className="mb-4 flex items-center justify-center w-full">
          <input
            className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
            type="text"
            placeholder="Search"
          />
          <button className="bg-blue-500 px-6 py-2 rounded-r-lg text-white">
            <Search size={26} />
          </button>
        </div>

        <div className="mb-4 text-left ml-5">
          <div className="font-bold text-gray-700" >Categories</div>
          {/* Add your category components here */}
        </div>

        {/* Add additional content here */}
      </main>

      {/* Footer */}
      <footer className="py-4 bg-slate-100 text-gray-600 text-center">
        <p>&copy; EventConnect 2023</p>
      </footer>
    </div>
  );
};

export default Homepage;
