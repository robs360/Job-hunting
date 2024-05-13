import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import '../Home/style.css'
import './modal.css' 
import close from '../../assets/images/close.png'
import { AuthContext } from "../../AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Details = () => {
    const singleData = useLoaderData();
    const [modal,setModal]=useState(false);
    const [app,setApp]=useState(singleData.applicant)
    console.log(singleData);
    const {user}=useContext(AuthContext)
    
    const handleSubmit=(e)=>{
         e.preventDefault();
         const name=e.target.name.value;
         const email=e.target.email.value;
         const resume=e.target.resume.value;
         const byerEmail=singleData.email;
         const today = new Date();
         const date=  new Date(singleData.date);             
         const cat=singleData.catigory

         console.log(today,' ',date)
         console.log('Byer email ',byerEmail)
         console.log(email);
         if(email===byerEmail){
            console.log('adfkjdfkj')
            toast.error('Same email user can not bit this')
            return;
         }
         if(today>date){
            console.log('done')
            alert('sorry date is over')
            toast.error('Sorry! Date is over')
            return; 
         }
         const applyInfo={
            name,email,resume,byerEmail,cat
         }
         fetch('http://localhost:5000/apply',{
            method:'POST',
            headers:{
             'content-type':'application/json'
            },
            body:JSON.stringify(applyInfo),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setApp(app=>app+1);
            Swal.fire({
                title:'Success!',
                text:'Spot Added Successfully',
                icon:'success',
                confirmButtonText:'Cool'
            })
        })
        const updateData={
            app
        }
        fetch(`http://localhost:5000/jobs/${singleData._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateData)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div className="mx-auto w-[96%]">
           
            <h1 className="font-semibold ml-4">Back to Product </h1>
            <div className="p-1 md:p-3 rounded-md shadow-md flex space-x-2 md:flex-row flex-col items-center">
                <div  className="">
                    <img src={singleData.photo} className="md:w-[570px] h-[320px] rounded-md" alt="" srcset="" />
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
                        <button onClick={()=>{
                            setModal(true)
                        }} className="p-1 px-4 bg-black rounded-xl
                            text-[16px] text-white font-medium italic"
                        >Apply Now</button>
                      {
                        modal&&(
                            <div className="modal">
                            <div className="overlay"></div>
                            <div className="modal-content">
                                   <h1 className="text-center text-2xl
                                    font-semibold my-3">Let's Try</h1>
                                    <form onSubmit={handleSubmit}>
                                        <input className="w-[300px] h-[40px] rounded-md
                                         border-2 border-gray-400 p-1
                                        " name="name" type="text" value={user?.displayName} placeholder="Your Name" />
                                        <input className="w-[300px] h-[40px] rounded-md 
                                        border-2 border-gray-400 mt-3 p-1
                                        " type="email" name="email" value={user?.email} placeholder="Your Email" />
                                        <input className="w-[300px] h-[45px] rounded-md 
                                        border-2 border-gray-400 mt-3 p-1
                                        " type="text" name="resume" placeholder="Your Resume Link" />
                                        <button className="w-[300px] h-[40px] rounded-md bg-black
                                        text-[18px] font-semibold text-white mt-3">Submit</button>
                                    </form>
                                    <h1>email:{singleData.email}</h1>
                                    <button className="absolute -top-2 -right-2
                                     bg-white flex items-center justify-center
                                    rounded-[50%] w-[30px] h-[30px]" onClick={()=>{
                                        setModal(false)
                                    }}>
                                        <img src={close} className="
                                        w-[26px] h-[26px]" alt="" srcset="" />
                                    </button>
                            </div>
                        </div>
                        )
                      }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details