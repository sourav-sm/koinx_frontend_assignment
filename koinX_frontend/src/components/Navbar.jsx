import React, { useState } from "react";
import logo from "../Images/logo.png";
import {FaBars,FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    // const menu = (
    //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    //     </svg>
    // );

    // const cross = (
    //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //         <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    //     </svg>
    // );

    return (
        <div className="flex items-center justify-between p-5 bg-white shadow-md">
        {/* Logo Section */}
        <img className="h-12" src={logo} alt="Logo" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 font-mono text-lg font-semibold">
            <div className="hover:text-blue-600 cursor-pointer">Crypto Taxes</div>
            <div className="hover:text-blue-600 cursor-pointer">Free Tools</div>
            <div className="hover:text-blue-600 cursor-pointer">Resource Center</div>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Get Started
            </button>
        </div>

        {/* Mobile Menu Button */}
        <button
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
            onClick={handleNav}
        >
            {nav ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation */}
        {nav && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-10">
                <div className="flex flex-col items-center space-y-4 py-4 font-mono text-lg font-semibold">
                    <div className="hover:text-blue-600 cursor-pointer">Crypto Taxes</div>
                    <div className="hover:text-blue-600 cursor-pointer">Free Tools</div>
                    <div className="hover:text-blue-600 cursor-pointer">Resource Center</div>
                    <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Get Started
                    </button>
                </div>
            </div>
        )}
    </div>
    );
};

export default Navbar;


