import React, { useContext, useState } from "react";
import logo from '../../assets/images/logo.jpg'
import { NavLink } from "react-router-dom";
import './style.css'
import { AuthContext } from "../../AuthProvider";
import logout from '../../assets/images/logout.png'
const Nav = () => {
    const [visible, setVisible] = useState(false);
    const {user}=useContext(AuthContext);
    const handleclicked = () => {
        logOut()
            .then(res => console.log(res.user))
            .catch(error => console.error(error))
    }
    return (
        <div className="w-[97%] mx-auto flex justify-between 
        items-center my-8 p-2 py-3 bg-black rounded-3xl">
            <div className="flex space-x-1 items-center">
                <img src={logo} className="rounded-[50%] w-[40px] h-[40px]"
                    alt="" srcset="" />
                <h1 className="text-2xl font-bold text-white">Win.Net</h1>
            </div>
            <div className="space-x-4 md:space-x-6">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "" :
                            isActive ?
                                "bg-gray-400 px-[5px] py-[1px] rounded-sm" : ""
                    }
                >
                    <a className="font-bold text-[18px] text-white">Home</a>
                </NavLink>
                <NavLink
                    to="/alljob"
                    className={({ isActive, isPending }) =>
                        isPending ? "" :
                            isActive ?
                                "bg-gray-400 px-[5px] py-[1px] rounded-sm" : ""
                    }
                >
                    <a className="font-bold text-[18px] text-white">All Job</a>
                </NavLink>
            </div>
            <div>
                {
                    user?(<button onClick={()=>{
                        if(visible){
                            setVisible(false)
                        }
                        else{
                            setVisible(true)
                        }
                    }}> 

                         <img src={user.photoURL} className="w-[40px]
                         h-[40px] rounded-[50%]" alt="" />
                         
                    </button> ):( <button onClick={handleclicked}
                    className="text-white btn text-xl font-semibold">
                        Logout
                   </button>)
                }
               
               {
                 visible?(<div className="flex flex-col">
                 <ul className="flex flex-col gap-4 items-start drp">
                     <button className="text-black text-xl font-semibold">Profile</button>
                     <button className="text-black text-xl font-semibold">User</button>
                     <button className="text-black text-xl font-semibold 
                     flex items-center">Logout
                        <img src={logout} className="w-[20px] ml-4 h-[20px]" alt="" srcset="" />
                     </button>
                 </ul>
             </div>):(<div></div>)
               }
                
            </div>
        </div>
    )
}
export default Nav