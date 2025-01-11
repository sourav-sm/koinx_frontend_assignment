import React from "react";
import profit from "../Images/profit.png";
import tax from "../Images/tax.png";

const AboutBitcoin = () => {
    return (
        <div className="ml-5 px-4 sm:grid grid-cols-10 md:px-5">
            <div className="bg-white p-5 sm:p-10 col-span-7 md:p-10 rounded-2xl mb-5">
                <h2 className="font-bold text-2xl md:text-3xl mb-4">About Bitcoin</h2>
                <h2 className="font-bold text-lg md:text-xl mb-3">What is Bitcoin?</h2>
                <p className="font-normal text-md md:text-lg mb-4">Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 MBTC and a max supply of 21 M BTC.</p>
                <div>
                    <p className="font-bold text-lg md:text-xl mb-3">Lorem ipsum dolor sit amet</p>
                    <p className="font-normal text-md md:text-lg mb-4">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus...
                    </p>
                </div>
                <div>
                    <h2 className="font-bold text-xl md:text-2xl mb-4">Already Holding Bitcoin?</h2>
                    <div className="flex flex-wrap gap-5 mb-3">
                        <div className="bg-green-600 flex md:flex-row p-5 gap-10 rounded-xl">
                            <img className="rounded-2xl" src={profit} alt="" style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }} />
                            <div className="mt-5  md:mt-10">
                                <h2 className="text-white text-lg md:text-2xl font-semibold mb-2">Calculate Your Profits</h2>
                                <button className="bg-white rounded-lg p-2 md:p-3 text-md md:text-xl font-medium">Checkout Now</button>
                            </div>
                        </div>
                        <div className="bg-red-400 flex  md:flex-row p-5 gap-10 rounded-xl">
                            <img className="rounded-2xl" src={tax} alt="" style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }} />
                            <div className="mt-5 md:mt-10">
                                <h2 className="text-white text-lg md:text-2xl font-semibold mb-2"> Calculate your tax liability</h2>
                                <button className="bg-white rounded-lg p-2 md:p-3 text-md md:text-xl font-medium">Checkout Now</button>
                            </div>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio excepturi repudiandae, est expedita in alias quis aperiam iusto illum sed qui, magnam quo quas molestias maiores mollitia temporibus, cumque rem?</p>
                </div>
            </div>
        </div>
    );
}

export default AboutBitcoin;