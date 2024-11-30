"use client"

// import React, { useState, useEffect } from 'react';
import { FaRegUserCircle } from "react-icons/fa";

const Quotes = ({ data, fetchNextQuote, loading }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <blockquote className="relative border-2 py-2 rounded-lg shadow-lg ps-4 sm:ps-6 w-[600px]">
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            <p className="text-gray-800 sm:text-xl">
              <em>{data.quote}</em>
            </p>
            <footer className="mt-4">
              <div className="flex items-center">
                <div className="shrink-0">
                  <FaRegUserCircle height={8} width={8} className="text-blue-300" />
                </div>
                <div className="ms-4">
                  <div className="text-base font-semibold text-gray-800 dark:text-neutral-400">
                    {data.author}
                  </div>
                </div>
              </div>
              <div className="flex justify-end px-4">
                <button
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200"
                  onClick={fetchNextQuote}
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                    Next
                  </span>
                </button>
              </div>
            </footer>
          </>
        )}
      </blockquote>
    </div>
  );
};
export default Quotes