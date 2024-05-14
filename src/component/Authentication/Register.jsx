import React, { useContext, useState } from "react";
import eye from '../../assets/images/eye.png'
import hidden from '../../assets/images/hidden.png'
import key from '../../assets/images/key.png'
import register from '../../assets/images/just.json'
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import { motion } from "framer-motion"
const auth = getAuth(app)
const Register = () => {
    const [show, setShow] = useState();
    const { createUser, user } = useContext(AuthContext);
    console.log(user)
    const handleSubmit = (e) => {
        e.preventDefault();
        const Name = e.target.name.value;
        const Email = e.target.email.value;
        const photo = e.target.photo.value;
        const Password = e.target.password.value;
        createUser(Email, Password)
            .then(res => {
                toast('Wow! You are in here')
                console.log(res.user)
                updateProfile(auth.currentUser, {
                    displayName: Name, photoURL: photo
                }).then(() => {
                    console.log('yes')
                    console.log()
                }).catch((error) => {
                    console.log('No')
                });
                 const uSer={Email}
                fetch('http://localhost:5000/jwt',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    credentials:'include',
                    body:JSON.stringify(uSer)
                })
                
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                })
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div className="w-[95%] p-3 py-7 md:p-4 rounded-md  mx-auto">
            <motion.div
                initial={{ opacity: 0, x: 380 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1
                }}
                className="flex items-center w-[280px] mx-auto">
                <h1 className="text-3xl text-center mx-auto font-semibold">
                    Register Here</h1>
                <img src={key} className="w-[30px] h-[28px] mx-auto" alt="" srcset="" />
            </motion.div>
            <div className="mt-10 w-[360px] md:w-[700px]  bg-[#ffffff] shadow-lg mx-auto">
                <div className="flex flex-col-reverse md:flex-row justify-center md:space-x-3">
                    <div className="relative">
                        <form onSubmit={handleSubmit} className="flex flex-col py-5 items-center">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered border-2 border-gray-500
                         mb-3 w-[310px] p-1 mx-auto rounded-md h-[50px]" />
                            <input type="email" name="email" placeholder="Email" className="input rounded-md
                        w-[310px] p-1 input-bordered mb-3 mx-auto h-[50px] border-2 border-gray-500" />
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered
                         mb-3 w-[310px] p-1 mx-auto h-[50px] border-2 border-gray-500 rounded-md" />
                            <div className="mx-auto">
                                <input type={show ? 'text' : "password"} name="password" placeholder="Password"
                                    className="input rounded-md
                             w-[310px] p-1 input-bordered mb-3 mx-auto h-[50px] border-2 border-gray-500" />
                            </div>
                            <button type="submit" className="btn glass bg-black text-white
                        font-semibold text-xl py-[10px] rounded-md w-[310px]">Register</button>
                        </form>
                        <button id="sp" className="absolute right-[70px] md:right-4 top-[220px]" onClick={() => {
                            if (show) {
                                setShow(false)
                            }
                            else {
                                setShow(true)
                            }
                        }}>
                            {
                                show ? (<img src={eye} alt="" className="w-[20px] h-[20px]"
                                    srcset="" />) :
                                    (<img src={hidden} alt=""
                                        className="w-[20px] h-[20px]" srcset="" />)
                            }

                        </button>
                    </div>
                    <div className="py-5 w-[340px] mx-auto">
                        <Lottie animationData={register} loop={true}
                            className='w-[340px] h-[330px]' />
                    </div>
                </div>
                <Link to={'/log'} className="text-[18px] font-medium">
                    <p className="text-center mt-5">Already have an account?</p>
                </Link>
            </div>
        </div>
    )
}
export default Register