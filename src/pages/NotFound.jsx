import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl uppercase font-bold tracking-wide md:text-6xl flex justify-center items-center">
          error 404 | page not found
        </h1>
        <Link
          to={"/"}
          className="mt-3 pt-3 pb-2 px-6 rounded shadow text-white bg-gray-800 hover:bg-transparent border-2 border-gray-800 duration-500 transition-all hover:text-gray-800 font-bold"
        >
          Back to Homepage
        </Link>
      </div>
  );
}

export default NotFound;
