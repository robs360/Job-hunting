import React from "react";
import { Link } from "react-router-dom";
import copy from '../../assets/images/copy.png'
import facebook from '../../assets/images/facebook.png'
import youtube from '../../assets/images/youtube.png'
import github from '../../assets/images/github-sign.png'
import logo from '../../assets/images/logo.jpg'
const Footer = () => {
    return (
        <div className="w-[97%] shadow-xl mx-auto border-t-[4px]
         border-gray-400 p-3
          rounded-t-xl bg-white min-h-[30vh] mt-16 mb-8">
            <div className="flex justify-between flex-col space-y-6 items-center md:flex-row border-b-2 py-5 border-gray-400">
                <div>
                     <p className="text-[17px] text-center">Helpline:0181..234</p>
                     <p className="text-[17px]">Email:nayemshahadat581@gmail.com</p>
                </div>
                <div className="w-full list-none
              flex justify-center space-x-8">
                    <Link to={'/'}>
                        <li className="text-[18px] font-semibold">Home</li>
                    </Link>
                    <Link><li className="text-[18px] font-semibold">All Job</li></Link>
                    <Link to={'/reg'}><li className="text-[18px] font-semibold">Register</li></Link>
                </div>
                <div>
                     <p className="text-[17px]">Place:Chittagong</p>
                     <p className="text-[17px]">Agrabaad 11/9</p>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row
             items-center justify-between mt-7 space-y-9">
                <div className="flex space-x-3 items-center md:mt-5">
                    <img className="w-[40px] h-[40px] rounded-[50%]"
                        src={logo} alt="" srcset="" />
                    <h1 className="text-2xl font-bold">Win.Net</h1>
                </div>
                <div className="flex items-center space-x-9">
                    <img className="w-[30px] h-[30px]" src={facebook} alt="" srcset="" />
                    <img className="w-[30px] h-[30px]" src={github} alt="" srcset="" />
                    <img className="w-[30px] h-[30px]" src={youtube} alt="" srcset="" />
                    <Link to={'/contact'}>
                        <p className="text-[18px] font-medium">Contact Us</p>
                    </Link>
                </div>
                <div className="flex space-x-1 items-center">
                    <p className="text-[16px] font-medium mr-2">Cookies</p>
                    <p className="text-[18px] font-medium">All right reserved</p>
                    <img src={copy} className="w-[19px] h-[19px]"
                        alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}
export default Footer