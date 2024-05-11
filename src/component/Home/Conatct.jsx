import React from "react";
import banner2 from '../../assets/images/contact.jpg'
const Contact=()=>{
    const bannerStyle = {
        backgroundImage: `linear-gradient(to right, rgba(72, 202, 228, 0.6), rgba(0, 119, 182, 1)), url(${banner2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        width: '98%',
        minHeight: '100vh'
    };
    return(
        <div style={bannerStyle}
        className="w-[96%] mx-auto flex my-24 items-end rounded-md">
             <div className="min-h-[52vh] w-[96%] 
             mx-auto shadow-xl bg-white rounded-md py-2">
                   <h1 className="text-center text-3xl font-semibold">
                    How can we help you?</h1>
                    <div className="grid grid-cols-1 mt-10 gap-5 md:grid-cols-2">
                        <input type="text" className="w-[280px] h-[55px]
                        rounded-sm mx-auto p-1 border-2 border-gray-400" placeholder="Name"/>
                        <input type="text" className="w-[280px] h-[55px]
                        rounded-sm mx-auto p-1 border-2 border-gray-400" placeholder="Email"/>
                        <input type="text" className="w-[280px] h-[55px]
                        rounded-sm mx-auto p-1 border-2 border-gray-400" placeholder="Place"/>
                        <input type="text" className="w-[280px] h-[55px]
                        rounded-sm mx-auto p-1 border-2 border-gray-400" placeholder="ID"/>
                       
                    </div>
                    <div className="w-[340px] mx-auto mt-5">
                       <button className="mx-auto h-[50px] w-full text-xl bg-orange-400 rounded-md">
                            Submit</button>
                    </div>
             </div>
        </div>
    )
}
export default Contact