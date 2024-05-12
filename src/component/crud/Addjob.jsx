
import React, { useContext, useState } from "react";
import banner from '../../assets/images/add.jpg'
import { AuthContext } from "../../AuthProvider";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const Addjob = () => {
    const {user}=useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const [initial, setInitial]=useState(0);
    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
    }
    const handleClicked = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const post = e.target.post.value;
        const title=e.target.title.value;
        const catigory=e.target.cati.value
        const descrip = e.target.descrip.value;
        const salary=e.target.salary.value;
        const applicant=initial;
        const date=startDate;
        const jobInfo = {
            name, email, photo,post,title,
            catigory,descrip,salary,date,applicant
        }
        console.log(jobInfo);
        fetch('http://localhost:5000/jobs',{
            method:'POST',
            headers:{
             'content-type':'application/json'
            },
            body:JSON.stringify(jobInfo),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            Swal.fire({
                title:'Success!',
                text:'Spot Added Successfully',
                icon:'success',
                confirmButtonText:'Cool'
            })
        })
    }
    console.log(startDate)
    return (
        <div className="w-[96%] mx-auto mt-9 mb-20" style={bannerStyle}>
            <div className="w-full h-[80px] bg-white flex 
            justify-between p-[10px] items-center">
                <div>
                    <li className="text-[17px] font-bold">Aplly Job</li>
                </div>
                <div className="flex space-x-1">
                    <li className="text-[17px] font-bold">Field</li>
                    <li className="text-[17px] font-bold">Cetegories</li>
                </div>
            </div>
            <form action="" onSubmit={handleClicked}>

                <div className="w-full flex justify-between items-center 
                  flex-col md:flex-row gap-4">
                    <div className="w-[340px] rounded-b-md
                 h-[550px] shadow-lg bg-[#ffffffcc] p-2">
                        <h1 className="text-center text-3xl
                       font-semibold my-3">Your Info</h1>
                        <p className="text-[17px] font-semibold">
                            Find the right recipient. The first step in sending
                            a job inquiry email is knowing who to send it to
                        </p>
                        <input defaultValue={user?.displayName} type="text" name="name" placeholder="Name" className=" mt-3 p-1 h-[50px] 
                        input input-bordered mb-3 w-full rounded-md" />
                        <input defaultValue={user?.email} type="email" name="email" placeholder="Email" className="p-1 h-[50px]
                         input input-bordered mb-3 w-full rounded-md" />
                        <input type="text" name="photo" placeholder="Photo Url" className="p-1 h-[50px]
                         input input-bordered mb-3 w-full rounded-md" />
                        <input type="text" name="post" placeholder="Post date" className="p-1 h-[50px]
                         input input-bordered mb-3 w-full rounded-md" />
                    </div>
                    <div className="w-[340px] h-[550px] p-2
                        shadow-lg bg-[#ffffffcc] rounded-b-md">
                            <h1 className="text-center text-3xl font-semibold
                            my-3">Job Info</h1>
                        <p className="text-[17px] font-semibold">

                            Only agree to referrals you support. If  you feel
                            hesitant to refer someone for a job, it is probably
                            best to let them know that the position is not a good fit.
            
                        </p>
                        
                        <input  type="number" name="salary" placeholder="Salary" className="h-[50px] p-1 input 
                        input-bordered mt-3 mb-3 w-full rounded-md" />
                        <input type="text" name="title" placeholder="Job Title" className="p-1 h-[50px] input input-bordered 
                        mb-3 w-full rounded-md" />
                        <input type="text" name="descrip" placeholder="job Describtion" className="p-1 h-[50px]
                         input input-bordered mb-3 w-full rounded-md" />
                        <input type="text" name="cati" placeholder="Category" className="p-1 h-[50px]
                         input input-bordered mb-3 w-full rounded-md" />
                          <DatePicker placeholderText="Deadline"  dateFormat="dd/MM/yyyy" className="w-[325px] h-[50px] rounded-md"
                           selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
                <div className="w-[320px] mx-auto mt-4">
                  <button type="submit" className="w-full  h-[50px] bg-orange-400
                   text-xl font-bold rounded-md">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Addjob