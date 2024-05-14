import React, { useEffect, useState } from "react";
import star from '../../assets/images/star2.png';
import banner2 from '../../assets/images/banner2.jpg';
import section from '../../assets/images/sec1.jpg'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"
import Chart from "./charts";
import Contact from "./Conatct";
import Catigories from "../crud/categories";
const Home = () => {
    const [theme, setTheme] = useState('light');
    const bannerStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${banner2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        width: '98%',
        minHeight: '90vh'
    };
  
    useEffect(() => {
       
    }, [theme])
    console.log(theme)
    return (
        <div className="w-[95%] mx-auto">

            <div className="mx-auto rounded-md flex
             flex-col items-center justify-center
             "
                style={bannerStyle}>
                <div className='App w-[340px] mx-auto'>
                    <h1 className="text-white text-3xl md:text-5xl text-center font-semibold mt-10">
                        Life is simple <br /> {' '}
                        <span style={{ color: 'black', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Salah', 'Eat', 'code', 'Repeat!', 'Sleep']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={70}
                                delaySpeed={1000}
                            // onLoopDone={handleDone}
                            // onType={handleType}
                            />
                        </span>
                    </h1>
                </div>
                <div className="flex space-x-3 mt-6">
                    <img src={star} alt="" className="w-[40px] h-[42px]" srcset="" />
                    <img src={star} alt="" className="w-[40px] h-[42px]" srcset="" />
                    <img src={star} alt="" className="w-[40px] h-[42px]" srcset="" />
                    <img src={star} alt="" className="w-[40px] h-[42px]" srcset="" />
                    <img src={star} alt="" className="w-[40px] h-[42px]" srcset="" />
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 480 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1
                    }}
                    className="bg-[#ffffff80] p-3 py-7 rounded-md mt-5">
                    <h1 className="text-white font-semibold text-4xl md:text-5xl text-center">
                        Let's Jump Into a Hunting</h1>
                    <p className="mt-5 text-center text-[18px] font-semibold">Be selective with your search. Focus your <br />
                        job search on positions you feel excited about and
                        companies you really want to work <br />
                        for
                        Maintain a strong digital presence...</p>
                    <div className="w-[125px] mt-5 mx-auto">
                        <h1 className="text-[18px] mb-3 font-semibold">Change Mode</h1>
                        <label className="flex cursor-pointer gap-2 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <input type="checkbox" onChange={(e) => {
                                if (e.target.checked) {
                                    setTheme('synthwave')
                                }
                                else {
                                    setTheme('light');
                                }
                            }} className="toggle theme-controller" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>
                </motion.div>
            </div>
            <Catigories></Catigories>
            <div className="my-14 mx-auto py-4 p-2 text-black shadow-lg rounded-md" 
            >
                <h1 className="text-3xl font-semibold
               text-center">Job Info and data</h1>
                <p className="text-[17px] font-medium text-center mt-3">
                    Job Description Components. <br />
                    A job description contains the following
                    components: job title, job purpose,
                   
                    required qualifications, preferred qualifications</p>
            </div>
            <div className="w-full">
                <div className="w-full">
                    <Chart></Chart>
                </div>
            </div>
            <Contact></Contact>
            <div className="w-[95%] mx-auto rounded-md my-16 shadow-md">
                   <h1 className="text-3xl font-medium text-center">Blog Page</h1>
                   <p className="my-4 text-center font-medium">Fiverr releases its new report,
                    Strategic Insights: Leveraging Freelance Talent in
                     Tech,detailing the <br />
                      priorities and challenges of the tech industry today.</p>
            </div>
            <div className="w-[95%] mx-auto">
                  <p>What is an access token and refresh token? How do they work and where should
                  we store them on the client side?</p>
                  <textarea
                   name="" cols={40} placeholder="Ans:" value="The access token  is used to authenticate API requests to access protected resources, while the refresh token is  used to obtain new access tokens once the current ones expire"
                   className="p-2 border-2 border-black" rows={5} id=""></textarea>
                     <p> What is express js? What is Nest JS </p>
                  <textarea
                   name="" cols={40} placeholder="Ans:" value="Both NestJS and Express. js are frameworks, specifically for building backend web applications. A framework is an opinionated set of tools that serves as a basis or a starting point for creating something."
                   className="p-2 border-2 border-black" rows={5} id=""></textarea>
            </div>
        </div>
    );
};

export default Home;
