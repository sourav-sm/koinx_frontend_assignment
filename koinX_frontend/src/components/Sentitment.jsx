import React from "react";
import sentimentPercentage from "../Images/sentimentPercentage.png";
import sentiicon1 from "../Images/sentIcon1.png";
import sentiicon2 from "../Images/sentIcon2.png";

const Sentiment = () => {
  return (
    <div className="sm:grid grid-cols-10 ml-5 px-4 md:px-5">
      <div className="bg-white p-5 sm:p-10 col-span-7  md:p-10 rounded-2xl mb-5">
        <h2 className="font-semibold text-2xl md:text-3xl mb-3">Sentiment</h2>
        <div>
          <h2 className="font-medium text-xl md:text-2xl mb-3 text-slate-400">Key Events</h2>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="bg-indigo-100 rounded-lg flex md:grid md:grid-cols-10">
              <img className="sm:col-span-1 w-10 h-14 md:w-auto m-3 rounded-full" src={sentiicon1} alt="" />
              <div className="p-4 md:col-span-9">
                <p className="font-semibold mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos rem unde!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos rem unde! Ipsa, inventore beatae suscipit aperiam exercitationem quasi in dignissimos placeat illum adipisci minima non vitae quod repudiandae tenetur</p>
              </div>
            </div>
            <div className="bg-emerald-100 rounded-lg flex md:grid md:grid-cols-10">
              <img className="sm:col-span-1 w-10 h-12 md:w-auto m-3 rounded-full" src={sentiicon2} alt="" />
              <div className="p-4 md:col-span-9">
                <p className="font-semibold mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos rem unde!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos rem unde! Ipsa, inventore beatae suscipit aperiam exercitationem quasi in dignissimos placeat illum adipisci minima non vitae quod repudiandae tenetur.</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="font-semibold mt-5 text-base sm:text-lg md:text-xl mb-3 text-black">Analyst Estimates</h2>
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <div className="text-green-500 bg-emerald-100 flex justify-center items-center text-2xl sm:text-3xl md:text-4xl font-bold rounded-full h-32 w-32 sm:h-40 sm:w-40">
            76%
          </div>
          <img src={sentimentPercentage} alt="" className="w-full sm:w-auto max-w-sm sm:max-w-md" style={{ maxWidth: '450px' }} />
        </div>
      </div>
    </div>
  );
};

export default Sentiment;