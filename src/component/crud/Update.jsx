import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import up from '../../assets/images/up.jpg'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
const Update = () => {
    const [startDate, setStartDate] = useState(new Date());
    const singleData = useLoaderData();
    console.log(singleData)
    const bannerStyle = {
        backgroundImage: `url(${up})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        width: '98%',
        minHeight: '80vh'
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
        const name=e.target.name.value;
        const email=e.target.email.value;
        const category=e.target.cat.value;
        const salary=e.target.salary.value;
        const post=e.target.post.value;
        const lastDate=startDate;
        const title=e.target.title.value
        const description=e.target.descrip.value
        const updateInfo={
            name,email,category,salary,post,lastDate,
            title,description
        }
        console.log(updateInfo);
        fetch(`http://localhost:5000/job/${singleData._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            Swal.fire({
                title:'Success!',
                text:'Spot Updated Successfully',
                icon:'success',
                confirmButtonText:'Cool'
            })
        })
    }
    return (
        <div className="w-[97%] mx-auto flex items-center justify-center" style={bannerStyle}>
            <div className="w-[330px] md:w-[560px] bg-[#ffffff] p-2 py-5 shadow-xl rounded-md">
                <form onSubmit={handleSubmit} action="" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="name" id="" className="w-[260px]
                         h-[45px] border-2 border-gray-500 rounded-md" placeholder="Your Name" />
                    <input type="email" name="email" id="" className="w-[260px]
                         h-[45px] border-2 border-gray-500 rounded-md" placeholder="Your email" />
                    <input type="text" name="cat" id="" className="w-[260px]
                          h-[45px] border-2 border-gray-500 rounded-md" placeholder="Job Category" />
                    <input type="number" name="salary" id="" className="w-[260px]
                         h-[45px] border-2 border-gray-500 rounded-md" placeholder="Slary" />
                          <input type="text" name="title" id="" className="w-[260px]
                         h-[45px] border-2 border-gray-500 rounded-md" placeholder="Title" />
                          <input type="text" name="descrip" id="" className="w-[260px]
                         h-[45px] border-2 border-gray-500 rounded-md" placeholder="Description" />
                   
                        <div  style={{
                            width: '260px',
                            height: '60px',
                           
                            // Add more styles as needed
                        }} >
                        <DatePicker className="border-2 border-gray-500 w-[260px] h-[45px] rounded-md" placeholderText="Deadline" dateFormat="dd/MM/yyyy"
                            selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    
                     <input type="date" name="post" id="" className="w-[260px]
                            h-[45px] border-2 border-gray-500 rounded-md" />
                     <button  type="submit" className="w-full bg-orange-500 md:col-span-2
                    h-[40px] rounded-md text-white text-[19px] font-semibold
                    ">Update</button>
                </form>
            </div>
        </div>
    )
}
export default Update