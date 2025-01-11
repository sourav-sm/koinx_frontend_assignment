import React from "react";
import profit from "../Images/profit.png";
import tax from "../Images/tax.png";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutBitcoin = () => {
    return (
        <div className="ml-5 px-4 sm:grid grid-cols-10 md:px-5">
      <div className="bg-white p-5 sm:p-8 md:p-10 col-span-7 rounded-2xl mb-5">
        <h2 className="font-bold text-2xl md:text-3xl mb-4">About Bitcoin</h2>
        <h2 className="font-bold text-lg md:text-xl mb-3">What is Bitcoin?</h2>
        <p className="font-normal text-md md:text-lg mb-4">
          Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 MBTC and a max supply of 21 M BTC.
        </p>
        <div>
          <hr className="h-4 border-slate-300" />
          <p className="font-bold text-lg md:text-xl mb-3">
            Lorem ipsum dolor sit amet
          </p>
          <p className="font-normal text-md md:text-lg mb-4">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus...
          </p>
        </div>
        <hr className="h-4 border-slate-300" />
        <div>
          <h2 className="font-bold text-xl md:text-2xl mb-4">
            Already Holding Bitcoin?
          </h2>
          <div className="flex flex-wrap gap-5 mb-3">
            {/* Profit Section */}
            <div className="bg-green-600 flex flex-col md:flex-row p-5 gap-5 md:gap-10 rounded-xl items-center">
              <img
                className="rounded-2xl"
                src={profit}
                alt="Profit"
                style={{
                  maxWidth: "200px",
                  maxHeight: "100px",
                  objectFit: "cover",
                }}
              />
              <div className="mt-5 md:mt-0">
                <h2 className="text-white text-lg md:text-2xl font-semibold mb-2">
                  Calculate Your Profits
                </h2>
                <button className="bg-white flex justify-center items-center gap-2 rounded-lg p-2 md:p-3 text-md md:text-xl font-medium">
                  Checkout Now
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
            {/* Tax Section */}
            <div className="bg-red-400 flex flex-col md:flex-row p-5 gap-5 md:gap-10 rounded-xl items-center">
              <img
                className="rounded-2xl"
                src={tax}
                alt="Tax"
                style={{
                  maxWidth: "200px",
                  maxHeight: "100px",
                  objectFit: "cover",
                }}
              />
              <div className="mt-5 md:mt-0">
                <h2 className="text-white text-lg md:text-2xl font-semibold mb-2">
                  Calculate your tax liability
                </h2>
                <button className="bg-white rounded-lg p-2 md:p-3 text-md md:text-xl font-medium flex justify-center items-center gap-2">
                  Checkout Now
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
          <hr className="h-4 border-slate-300" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            excepturi repudiandae, est expedita in alias quis aperiam iusto
            illum sed qui, magnam quo quas molestias maiores mollitia
            temporibus, cumque rem?
          </p>
        </div>
      </div>
    </div>
    );
}

export default AboutBitcoin;