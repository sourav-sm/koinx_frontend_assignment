import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Sparklines,SparklinesLine } from "react-sparklines";

const CustomPrevArrow = ({ onClick }) => (
  <button className="custom-arrow prev-arrow absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-300 z-10" 
  onClick={onClick}>
    <MdOutlineKeyboardArrowLeft />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="custom-arrow next-arrow absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg hover:bg-gray-300 z-10" onClick={onClick}>
    <MdOutlineKeyboardArrowRight />
  </button>
);

const Footer = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchTrendingCoins = async (page = 1) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=true`
      );
      const data = await response.json();
      setTrendingCoins(data);
    } catch (error) {
      console.error("Error fetching trending coins:", error);
    }
  };

  useEffect(() => {
    fetchTrendingCoins(currentPage);
  }, [currentPage]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <CustomNextArrow
        onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
      />
    ),
    prevArrow: (
      <CustomPrevArrow
        onClick={() =>
          setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1))
        }
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white p-5">
      <h2 className="font-semibold text-2xl mb-10 pt-5">You May Also Like</h2>
      <Slider {...settings}>
        {trendingCoins.map((coin) => (
          <div key={coin.id} className="p-4 border-2 rounded shadow">
            <div className="flex items-center gap-2 mb-2">
              <img className="h-7 w-7" src={coin.image} alt={coin.name} />
              <p className="text-sm font-bold">{coin.symbol.toUpperCase()}</p>
              <p
                className={
                  coin.price_change_percentage_24h >= 0
                    ? "text-green-500 text-sm"
                    : "text-red-500 text-sm"
                }
              >
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </p>
            </div>
            <p className="font-medium text-xl">${coin.current_price}</p>
            <div className="w-full h-16" >
              <Sparklines data={coin.sparkline_in_7d?.price} limit={100} >  
                  <SparklinesLine
                    color={
                      coin.price_change_percentage_24h>=0?"green":"red"
                    }
                  />
              </Sparklines>
            </div>
          </div>
        ))}
      </Slider>
        <h2 className="font-semibold text-2xl mb-10 pt-5">Trending Coins</h2>
      <Slider {...settings}>
        {trendingCoins.map((coin) => (
          <div key={coin.id} className="p-4 border-2 rounded shadow">
            <div className="flex items-center gap-2 mb-2">
              <img className="h-7 w-7" src={coin.image} alt={coin.name} />
              <p className="text-sm font-bold">{coin.symbol.toUpperCase()}</p>
              <p
                className={
                  coin.price_change_percentage_24h >= 0
                    ? "text-green-500 text-sm"
                    : "text-red-500 text-sm"
                }
              >
                {coin.price_change_percentage_24h?.toFixed(2)}%
              </p>
            </div>
            <p className="font-medium text-xl">${coin.current_price}</p>
            <div className="w-full h-16" >
              <Sparklines data={coin.sparkline_in_7d?.price} limit={100} >  
                  <SparklinesLine
                    color={
                      coin.price_change_percentage_24h>=0?"green":"red"
                    }
                  />
              </Sparklines>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default Footer;


