import React from 'react';

function Fundamentals() {
  return (
    <div className='bg-white p-5 m-3 md:p-10 rounded-2xl mb-5 sm:col-span-7 md:max-w-[68%] ml-5'>
      <h2 className="font-semibold text-xl md:text-2xl mb-5 mt-3 text-black">Fundamentals</h2>
      <div className="md:grid md:grid-cols-2 gap-10">
        <ul>
          {[
            { label: "Bitcoin Price", value: "$16,815.46" },
            { label: "24h Low / 24h High", value: "$16,382.07 / $16,874" },
            { label: "7d Low / 7d High", value: "$16,382.07 / $16,874"},
            { label: "Trading Volume", value: "$23,249,202,782" },
            { label: "Market Cap Rank", value: "#1" },
          ].map((item, index) => (
            <li key={index} className="mb-8">
                <div className='flex justify-between -mr-10'>
                   <p className="text-slate-400 text-base md:text-xl">{item.label}</p>
                   <p className="text-base md:text-xl font-medium">{item.value}</p>
                   <hr className='h-4 border-black' />
                </div>
                {index !== 5 && (
                    <hr className="my-2 border-t border-gray-300" />
                )}
            </li>
          ))}
        </ul>

        <ul>
          {[
            { label: "Market Cap", value: "$323,507,290,047" },
            { label: "Market Cap Dominance", value: "38.343%" },
            { label: "Volume / Market Cap", value: "0.0718" },
            {
              label: "All-Time High",
              value: "$69,044.77",
              change: "-75.6%",
              date: "Nov 10, 2021 (about 1 year)",
            },
            {
              label: "All-Time Low",
              value: "$67.81",
              change: "24729.1%",
              date: "Jul 06, 2013 (over 9 years)",
            },
          ].map((item, index) => (
            <li key={index} className="mb-3">
              <div className="flex justify-between ">
                <p className="text-slate-400 text-base md:text-xl">{item.label}</p>
                {item.change ? (
                  <div className="text-right">
                    <p className="text-base md:text-xl font-medium">{item.value}</p>
                    <p
                      className={`text-sm ${
                        item.change.includes('-') ? 'text-red-500' : 'text-green-500'
                      }`}
                    >
                      {item.change}
                    </p>
                    <p className="text-sm text-black">{item.date}</p>
                  </div>
                ) : (
                  <p className="text-lg md:text-xl font-medium">{item.value}</p>
                )}
              </div>
              {index !== 5 && (
                <hr className="my-2 border-t border-gray-300" />
            )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Fundamentals;
