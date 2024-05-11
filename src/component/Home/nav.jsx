import React, { useContext, useState } from "react";
import logo from '../../assets/images/logo.jpg'
import { Link, NavLink } from "react-router-dom";
import './style.css'
import { AuthContext } from "../../AuthProvider";
import logout from '../../assets/images/logout.png'
import { toast } from "react-toastify";
import menu from '../../assets/images/icon.png'
import cros from '../../assets/images/cros.png'

const Nav = () => {
    const [visible, setVisible] = useState(false);
    const [visit,setVisit]=useState(false)
    const { user, logOut } = useContext(AuthContext);

    console.log(logOut)

    const handleclicked = () => {
        logOut()
            .then(res => {
                console.log(res.user)
                setVisible(false)
                toast('You have Successfully Logout')
            })
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
            <div className="space-x-4 md:space-x-6 hidden md:flex">
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
                <NavLink
                    to="/reg"
                    className={({ isActive, isPending }) =>
                        isPending ? "" :
                            isActive ?
                                "bg-gray-400 px-[5px] py-[1px] rounded-sm" : ""
                    }
                >
                    <a className="font-bold text-[18px] text-white">Register</a>
                </NavLink>
            </div>
            <div className="flex md:hidden">
                <button onClick={()=>{
                    if(visit){
                        setVisit(false)
                    }
                    else{
                        setVisit(true)
                    }
                }}>
                    {
                        visit?
                        (<img src={cros}
                             className="w-[20px] h-[20px] text-white" alt="" srcset="" />):
                             (<img src={menu}
                                className="w-[39px] h-[39px] text-white" alt="" srcset="" />)
                    }
                </button>
                {
                    visit?(<div className="flex flex-col menu">
                    <ul className="flex flex-col gap-4">
                      <Link to={'/'}>
                         <li>Home</li>
                      </Link>
                      <Link><li>All Job</li></Link>
                      <Link to={'/reg'}><li>Register</li></Link>
                    </ul>
               </div>):(<></>)
                }
                 
             
            </div>
            <div>
                {
                    user ? (<button onClick={() => {
                        if (visible) {
                            setVisible(false)
                        }
                        else {
                            setVisible(true)
                        }
                    }}>

                        <img src={user.photoURL} className="w-[40px]
                         h-[40px] rounded-[50%]" alt="" />

                    </button>) : (<Link to={'/log'}>
                        <button
                            className="text-white btn text-xl font-semibold">
                            Login
                        </button>
                    </Link>)
                }

                {
                    visible ? (<div className="flex flex-col z-50">
                        <ul className="flex flex-col gap-4 items-start drp">
                            <button onClick={() => {
                                setVisible(false)
                            }} className="text-black text-xl font-semibold">Profile</button>
                            <button onClick={() => {
                                setVisible(false)
                            }} className="text-black z-50 text-xl font-semibold">User</button>
                            <button onClick={() => {
                                handleclicked(); setVisible(false)
                            }} className="text-black z-50 text-xl font-semibold 
                     flex items-center">Logout
                                <img src={logout} className="w-[20px] ml-4 h-[20px]" alt="" srcset="" />
                            </button>
                        </ul>
                    </div>) : (<div></div>)
                }

            </div>
        </div>
    )
}
export default Nav