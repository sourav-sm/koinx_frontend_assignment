import React, { useState } from "react";

const Body = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabContent = {
    Overview: "This is the Overview content.",
    Fundamentals: "This is the Fundamentals content.",
    "News Insights": "This is the News Insights content.",
    Sentiments: "This is the Sentiments content.",
    Team: "This is the Team content.",
    Technicals: "This is the Technicals content.",
    Tokenomics: "This is the Tokenomics content.",
  };

  return (
    <div className="flex flex-col sm:(grid grid-cols-10)">
      {/* Tabs */}
      <div className="sm:(col-span-7 font-bold) flex flex-wrap gap-4 p-5 ml-5 mb-5 text-xl font-semibold text-slate-500">
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
      <hr className="border-t-4 border-slate-300 mt-5" />
      
      {/* Tab Content */}
      <div className="p-5 text-lg text-gray-700">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default Body;
