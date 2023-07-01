import React from "react";
import googleLogo from "../assets/google-logo.png";
import appleLogo from "../assets/apple-logo.jpg";
const ResponsivePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-fixed bg_image">
      <div className="sm:block">
       
        <h1 className="text-white text-center text-2xl md:text-2xl lg:text-3xl">
          Beautiful places to <br/>
          Book around you.
        </h1>

        <h1 className="text-white text-center text-1xl mt-4 md:text-1xl lg:text-2xl">
          Choose your dreams destination, arena and <br /> much more for your event
        </h1>

        <button className="w-full my-5 bg-violet-900 text-white px-8 py-2 mt-5 p-2 rounded-lg focus:border-blue-500 border-stone-200 text-center">
          Sign up free
        </button>

        <button className="w-full my-5  bg-indigo-900 text-white px-8 py-2 mt-4 p-2 rounded-lg focus:border-blue-500 border-stone-200 text-center">
          <img
            src={googleLogo}
            alt="Google logo"
            className="inline-block w-5 h-5 mr-2"
          />
          Continue with Google
        </button>

        <button className="w-full my-5  bg-indigo-900 text-white px-8 py-2 mt-4 p-2 rounded-lg focus:border-blue-500 border-stone-200 text-center">
          <img
            src={appleLogo}
            alt="Apple logo"
            className="inline-block w-5 h-5 mr-2"
          />
          Continue with Apple
        </button>

        <button className="w-full my-5  text-white px-8 py-2 mt-4">
          <a href="/authentication">Log in</a>
        </button>
      </div>
    </div>
  );
};

export default ResponsivePage;
