import React from 'react'

function Fundaments() {
  return (
    <div>
        <div className='bg-white p-5 md:p-10 rounded-2xl mb-5 sm:col-span-7'>
        <h2 className="font-semibold text-xl md:text-3xl mb-5 mt-3 text-slate-500">Fundamentals</h2>
        <div className="md:grid md:grid-cols-2 gap-10">
            <ul className="">
                {[
                    { label: "Bitcoin Price", value: "$16,815.46" },
                    { label: "24h Low/24h High", value: "$16,382.07/16,874.12" },
                    { label: "7d Low/7d High", value: "$16,382.07/16,874.12" },
                    { label: "Trading Volume", value: "$23,249,202,782" },
                    { label: "Rank", value: "#1" },
                ].map((item, index) => (
                    <li key={index} className="flex justify-between mb-3">
                        <p className="text-slate-400 text-lg md:text-xl">{item.label}</p>
                        <p className="text-lg md:text-xl font-medium">{item.value}</p>
                    </li>
                ))}
            </ul>
            <ul className="">
                {[
                    { label: "Market Cap", value: "$323.507,290,047" },
                    { label: "Market Cap Dominance", value: "38.343%" },
                    { label: "Volume/Market Cap", value: "0.0718" },
                    { label: "All-Time High", value: "$23,249,202,782", change: "-75.6%", date: "Nov 10,2021 (about 1 year)" },
                    { label: "All-Time Low", value: "$67.81", change: "24729.1%", date: "Jul 06,2013 (over 9 years)" }, // Adjusted for consistency
                ].map((item, index) => (
                    <li key={index} className="mb-3">
                        <div className="flex justify-between">
                            <p className="text-slate-400 text-lg md:text-xl">{item.label}</p>
                            {item.change ? (
                                <div className="text-lg md:text-xl font-medium">
                                    <div className="flex items-center gap-2">
                                        <p>{item.value}</p>
                                        <p className={`text-sm ${item.change.includes('-') ? 'text-red-500' : 'text-green-500'}`}>{item.change}</p>
                                    </div>
                                    <p className="text-sm font-medium">{item.date}</p>
                                </div>
                            ) : (
                                <p className="text-lg md:text-xl font-medium">{item.value}</p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Fundaments