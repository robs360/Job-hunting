import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider";
import { Link } from "react-router-dom";
import banner from '../../assets/images/banner.jpg';
import Delete from '../../assets/images/delete.png';
import UpDate from '../../assets/images/update.png';
import Swal from "sweetalert2";

const Myjob = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.email)

    const [info, setInfo] = useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                const filterData = data.filter(item => item.email === user.email)
                setInfo(filterData)
                setLoading(false)
            })
    }, [user?.email])
    console.log(info)
    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

    }
    const handleClicked = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/jobs/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())

                    .then(data => {
                        console.log(data)
                        const filterData = info.filter(item => {

                            console.log(item, ' ', id);
                            return item._id !== id
                        })
                        setInfo(filterData)
                        setLoading(false)
                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    return (
       <div>
        {
          loading?(<p className="mt-5 text-[18px] font-medium text-center">loading....</p>):
          info.length>0?(
            <div style={bannerStyle}
            className="grid grid-cols-1 min-h-[64vh] rounded-md py-6 gap-10 lg:grid-cols-2 my-20">
            {info.map(item => <div className="border-2 h-[240px] bg-[#ffffff]
         shadow-xl border-black w-[354px] md:w-[460px] mx-auto">
                <table border="1" className="w-full p-2">
                    <tr className="border-[1px] border-gray-400">
                        <td className="text-[16px] text-gray-500 p-1 font-medium">Name:{item.name}</td>
                        <td className="text-[16px] text-gray-500 p-1 font-medium">Email:{item.email}</td>
                    </tr>
                    <tr className="border-[1px] border-gray-400">
                        <td className="text-[16px] text-gray-500 p-1 font-medium">Posted:{item.post}</td>
                        <td className="text-[16px] text-gray-500 p-1 font-medium">
                            Last Date:{new Date(item.date).toLocaleString()}</td>
                    </tr>
                    <tr className="border-[1px] border-gray-400">
                        <td className="text-[16px] p-1 text-gray-500 font-medium">category:{item.catigory}</td>
                        <td className="text-[16px] p-1 text-gray-500 font-medium">Salary:{item.salary}tk</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="w-[100px] mx-auto mt-4">
                                <button onClick={() => handleClicked(item._id)}>
                                    <img src={Delete} className="w-[35px] h-[35px]
                             mx-auto" alt="" srcset="" />
                                </button>
                            </div>
                        </td>
                        <td>
                            <div className="w-[100px] mx-auto mt-4">
                               <Link to={`/update/:${item._id}`}> <button>
                                    <img src={UpDate} className="w-[45px] h-[45px]
                                  mx-auto"
                                        alt="" srcset="" />
                                </button></Link>
                            </div>
                        </td>
                    </tr>

                </table>

            </div>)}
        </div>
          ):(<p className="text-[17px] text-red-400 text-center">
            Sorry You have not add any Job with this logedin user</p>)
        }
       </div>
    )
}
export default Myjob