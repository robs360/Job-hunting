import React from "react";
import { useLoaderData } from "react-router-dom";
import '../Home/style.css'
import './modal.css' 
const Details = () => {
    const singleData = useLoaderData();
    console.log(singleData);
    return (
        <div className="mx-auto w-[96%]">
            <h1 className="font-semibold ml-4">Back to Product </h1>
            <div className="p-1 md:p-3 rounded-md shadow-md flex space-x-2 md:flex-row flex-col items-center">
                <div className="">
                    <img src={singleData.photo} className="w-[330px] h-[320px] rounded-md" alt="" srcset="" />
                </div>
                <div>
                    <h1 className="text-3xl font-medium italic">{singleData.title}</h1>
                    <div className="flex justify-between">
                        <p className="font-semibold">Lead time</p>
                        <p className="font-semibold">Learn order Proccess</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-slate-500 text-[14px] italic">{singleData.descrip}
                            A job description is a written explanation that
                            outlines the essential responsibilities and
                            requirements for a vacant position.
                            Job descriptions should be thorough,
                            clear</p>
                    </div>
                    <div className="flex justify-between mt-4">
                        <h1 className="p-1 bg-black rounded-xl
                            text-[16px] text-white font-medium italic"
                        >Salary:{singleData.salary} tk</h1>
                        <h1 className="p-1 bg-black rounded-xl
                            text-[16px] text-white font-medium italic"
                        >Date:{new Date(singleData.date).toLocaleString()}</h1>
                    </div>
                    <div className="flex justify-between mt-4">
                        <h1 className="p-1 border-[1px] border-black rounded-xl
                            text-[16px] text-black font-medium italic"
                        >post:{singleData.post}</h1>
                        <h1 className="p-1 border-[1px] border-black rounded-xl
                            text-[16px] text-black font-medium italic"
                        >{singleData.name}</h1>
                    </div>
                    <div className="flex justify-between mt-6">
                        <h1 className="p-1 bg-black rounded-xl
                            text-[16px] text-white font-medium italic"
                        >{singleData.email}</h1>
                        <h1 className="p-1 px-4 bg-black rounded-xl
                            text-[16px] text-white font-medium italic"
                        >Apply Now</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details