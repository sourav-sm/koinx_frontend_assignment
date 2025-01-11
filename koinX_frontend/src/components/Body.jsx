import React, { useState } from "react";
import AboutBitcoin from "./AboutBitcoin";
import Team from "./Team";
import Performance from "./Performance";
import Sentiment from "./Sentitment";
import Tokenomics from "./Tokenmics";
import Fundaments from "./Fundaments";

const Body = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabContent = {
    Overview: <Performance/>,
    Fundamentals: <Fundaments/>,
    News_Insights: <AboutBitcoin/>,
    Sentiments: <Sentiment/>,
    Team: <Team/>,
    Technicals: "This is the Technicals content.",
    Tokenomics: <Tokenomics/>
  };

  return (
    <div className="flex flex-col sm:(grid grid-cols-10)">
      <div className="sm:(col-span-7 font-bold) flex flex-wrap -mt-16  gap-4 p-5 ml-5 mb-5 text-xl font-semibold text-slate-500">
        {Object.keys(tabContent).map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer pb-1 ${
              activeTab === tab
                ? "text-blue-500 border-b-4 border-blue-500"
                : "hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <hr className="" />
      
      {/* Tab Content */}
      <div className="text-lg text-gray-700 -mt-6">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default Body;
