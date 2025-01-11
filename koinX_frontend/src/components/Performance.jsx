import React from "react";

const Performance = () => {
    return (
        <div className="ml-5 px-4 sm:grid grid-cols-10 md:px-5"> 
            <div className="bg-white p-5 sm:p-8 md:p-10 col-span-7 rounded-2xl mb-5">
            <h2 className="text-2xl font-semibold mb-6">Performance</h2>

            <div className="mb-8">
              <div className="flex justify-between items-center">
                <p className="text-lg text-gray-500">Today's Low</p>
                <p className="text-lg text-gray-500">Today's High</p>
              </div>
              <div className="relative mt-2">
                <div className="h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
                <div
                  className="absolute -top-2 left-[40%] transform -translate-x-1/2 bg-black text-white text-xs font-semibold px-2 py-0.5 rounded-md"
                  style={{ left: "50%" }} 
                >
                  $48,637.83
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-lg font-medium">46,930.22</p>
                <p className="text-lg font-medium">49,343.83</p>
              </div>
            </div>
          
            <div>
              <div className="flex justify-between items-center">
                <p className="text-lg text-gray-500">52W Low</p>
                <p className="text-lg text-gray-500">52W High</p>
              </div>
              <div className="relative mt-2">
                <div className="h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-lg font-medium">16,930.22</p>
                <p className="text-lg font-medium">49,743.83</p>
              </div>
            </div>
        </div>
    </div>
    );
};

export default Performance;
