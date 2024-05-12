import { date } from "date-fn";
import React, { useEffect, useState } from "react";
import banner from '../../assets/images/all.jpg'
import { Link } from "react-router-dom";

const Alljob = () => {

    const [info, setInfo] = useState([])
    const [query, setQuery] = useState('')
    
    useEffect(() => {
        fetch(`http://localhost:5000/search?q=${query}`)
            .then(res => res.json())
            .then(data => {
                setInfo(data)
            })
    }, [])
    console.log(query);
 
    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '92vh'
    }
    console
    return (
        <div>
            <div className="my-12 mx-auto w-[95%] shadow-xl rounded-md">
                <h1 className="text-center font-semibold text-3xl">
                    See All Job
                </h1>
                <p className="text-center text-[16px] font-medium">To minimise
                    these harmful effects, <br />
                    the government applies an age ceiling for
                    recruitment, which was revised from 27 to 30 years in 1991</p>
            </div>
            <div className="w-[290px] my-8 mx-auto">
                <input onChange={(e) => {
                    setQuery(e.target.value)
                }} defaultValue={query} type="text" className="w-[200px] h-[45px]
                  rounded-l-2xl border-2 border-black" />
                <button className="bg-black w-[80px] h-[45px]
                  rounded-r-2xl text-white font-medium">Search</button>
            </div>
            <div className="w-[96%] mx-auto grid grid-cols-1 md:grid-cols-2
                            lg:grid-cols-3 gap-5 py-2 rounded-sm" style={bannerStyle}>
                {
                    info.map(item => <div data-aos="zoom-in" className="w-[330px] shadow-xl p-1 bg-[#ffffffcc] mx-auto rounded-md">
                        <div className="flex justify-between  items-center py-2
                         border-b-2 border-gray-400 mb-2">
                            <h1 className="text-[16px] font-medium">{item.title}</h1>
                            <img src={item.photo} className="w-[40px]
                             h-[40px] rounded-[50%]" alt="" srcset="" />
                        </div>
                        <div className="flex justify-between items-center py-2
                         border-b-2 border-gray-400 mb-2">
                            <h1 className="text-[16px] font-medium">post date:{item.post}</h1>
                            <h1 className="text-[16px] font-medium">Last date:{item.date}</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className="text-[16px] font-medium">Salary:{item.salary}tk</h1>

                            <Link to={`/details/${item._id}`}>
                                <button className="text-[18px] w-[140px] text-white
                              rounded-md bg-black font-medium">See Details</button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
export default Alljob