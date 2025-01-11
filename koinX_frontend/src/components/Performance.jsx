import React from "react";
import performance from "../Images/performance.png";

const Performance = () => {
    return (
        <div className="ml-5 px-4 md:px-5 grid sm:grid-cols-10">
            <div className="bg-white p-5 md:p-10 rounded-2xl mb-5 sm:col-span-7">
                <h2 className="font-semibold text-2xl md:text-3xl mb-3">Performance</h2>
                <img className="mb-5 h-28 sm:h-56" src={performance} alt="" />
               
            </div>
        </div>
    );
};

export default Performance;
