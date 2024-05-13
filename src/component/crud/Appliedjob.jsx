import React, { useContext, useEffect, useState } from "react";
import star from '../../assets/images/star2.png'
import { AuthContext } from "../../AuthProvider";


const Appliedjob=()=>{
   
    const {user}=useContext(AuthContext);
    const [job,setJob]=useState([]);
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setLoading(false)
            const filterData=data.filter(item=>item.email===user.email)
            setJob(filterData)
        })
    },[user?.email])
    console.log(job)
    return(
        <div className="w-[97%] mx-auto flex justify-evenly">
            <div className="w-[320px] rounded-md shadow-md p-2">
                   <h1 className="font-semibold text-xl italic mt-3 text-center">All Applied Job
                     <br />You have Added</h1>
                     <p className="text-[14px] font-medium
                      text-center italic mt-3">We are looking for a capable 
                      Program Coordinator.
                         You will be responsible for a variety of
                          administrative tasks to ensure 
                      our programs' smooth operations.</p>
                    <div className="flex justify-evenly mt-3">
                        <img src={star} className="w-[30px] h-[30px]" alt="" srcset="" />
                        <img src={star} className="w-[30px] h-[30px]" alt="" srcset="" />
                        <img src={star} className="w-[30px] h-[30px]" alt="" srcset="" />
                        <img src={star} className="w-[30px] h-[30px]" alt="" srcset="" />
                    </div>
                    <div className="mt-3">
                         <h1 className="text-center text-xl italic
                         font-medium">Explore More</h1>
                         <div className="w-full flex justify-between">
                               <p className="text-[14px]
                               font-medium italic">Most recent job</p>
                               <p className="text-[14px]
                               font-medium italic">Oracle</p>
                         </div>
                         <div className="w-full flex justify-between my-3">
                               <p className="text-[14px]
                               font-medium italic">Experience</p>
                               <p className="text-[14px]
                               font-medium italic">C,C++,java</p>
                         </div>
                         <div className="w-full flex justify-between my-3">
                               <p className="text-[14px]
                               font-medium italic">Helpline</p>
                               <p className="text-[14px]
                               font-medium italic">0181..34123</p>
                         </div>
                         <button className="w-full bg-green-500 rounded-md
                         text-[18px] font-medium italic my-3 
                         h-[42px]">Make Your Profile</button>
                         <div className="w-full flex justify-between my-3">
                               <p className="text-[14px]
                               font-medium italic">Applied Job</p>
                               <p className="text-[14px]
                               font-medium italic">{job.length}</p>
                         </div>
                    </div>
            </div>
            <div>
                {
                  loading?(<p className="text-[18px] text-center mt-4
                  font-semibold">Loading...</p>):
                  job.length?(<div className="">
                        {
                            job.map(item=><div className="p-2 rounded-md shadow-md">
                                   <h1 className="text-xl font-medium italic">{item.title}</h1>
                                   <p className="text-[14px] font-medium my-3">{item.descrip} the country's <br />

                                   first and largest career management website. Until now,<br />
                                     more than
                                    25,000 companies in the country have used the Bdjobs</p>
                                    <div className="my-3 flex w-full justify-between">
                                         <h1 className="text-[14px] font-medium italic
                                         ">Job Type:</h1>
                                         <h1 className="text-[14px] font-medium italic
                                         ">{item.catigory}</h1>
                                    </div>
                                    <div className="my-3 flex w-full justify-between">
                                         <h1 className="text-[14px] font-medium italic
                                         ">Salary:</h1>
                                         <h1 className="text-[14px] font-medium italic
                                         ">{item.salary}Tk</h1>
                                    </div>
                                    <div className="my-3 flex w-full justify-between">
                                         <h1 className="text-[14px] font-medium italic
                                         ">Image:</h1>
                                         <img src={item.photo} className="w-[35px]
                                         h-[35px] rounded-[50%]"
                                          alt="" srcset="" />
                                    </div>
                                    <div className="my-3 flex w-full justify-between">
                                         <h1 className="text-[14px] font-medium italic
                                         ">Last Date:</h1>
                                       <h1 className="text-[14px] font-medium italic">
                                        {new Date(item.date).toLocaleString()}</h1>
                                    </div>
                            </div>)
                        }

                  </div>):(<div>
                    <p className="text-[18px] text-center mt-4
                  font-semibold text-red-500">Sorry you have not applied any 
                  job with the user email</p>
                  </div>)
                }
            </div>
        </div>
    )
}
export default Appliedjob