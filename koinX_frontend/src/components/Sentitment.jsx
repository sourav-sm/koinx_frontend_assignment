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
            <div className="bg-slate-200 rounded-lg flex md:grid md:grid-cols-10">
              <img className="sm:col-span-1 w-10 h-20 md:w-auto" src={sentiicon1} alt="" />
              <div className="p-4 md:col-span-9">
                <p className="font-semibold mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos rem unde! Ipsa, inventore beatae suscipit aperiam exercitationem quasi in dignissimos placeat illum adipisci minima non vitae quod repudiandae tenetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos rem unde! Ipsa, inventore beatae suscipit aperiam exercitationem quasi in dignissimos placeat illum adipisci minima non vitae quod repudiandae tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos rem unde! Ipsa, inventore beatae suscipit aperiam exercitationem quasi in dignissimos placeat illum adipisci minima non vitae quod repudiandae tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </div>
            <div className="bg-slate-200 rounded-lg flex md:grid md:grid-cols-10">
              <img className="sm:col-span-1 w-10 h-20 md:w-auto" src={sentiicon2} alt="" />
              <div className="p-4 md:col-span-9">
                <p className="font-semibold mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos rem unde! Ipsa, inventore beatae suscipit aperiam exercitationem quasi in dignissimos placeat illum adipisci minima non vitae quod repudiandae tenetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos rem unde! Ipsa, inventore beatae suscipit aperiam exercitationem quasi in dignissimos placeat illum adipisci minima non vitae quod repudiandae tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos rem unde! Ipsa, inventore beatae suscipit aperiam exercitationem quasi in dignissimos placeat illum adipisci minima non vitae quod repudiandae tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="font-semibold mt-5 text-lg md:text-xl mb-3 text-slate-400">Analyst Estimates</h2>
        <div className="flex gap-10 justify-center md:justify-start sm:flex">
          <div className="text-green-500 bg-slate-300 text-2xl md:text-3xl font-bold rounded-full p-6 md:p-10 sm:text-3xl">76%</div>
          <img src={sentimentPercentage} alt="" className="w-full sm:w-auto" style={{ maxWidth: '250px' }} />
        </div>
      </div>
    </div>
  );
};

export default Sentiment;