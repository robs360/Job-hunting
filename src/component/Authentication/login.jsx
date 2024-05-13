import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import astronot from '../../assets/images/astronot.json'
import Lottie from "lottie-react";
import google from '../../assets/images/google.png'
import git from '../../assets/images/git.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
    const { signIn, googleSignin } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        signIn(Email, Password)
            .then(res => {
                console.log(res.user)
                toast.success('Wow you have Succesfully loged-in')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message)

            })
    }
    const googleClicked = () => {
        googleSignin()
            .then(res => {
                console.log(res.user)
                toast('Wow!You are in here')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => console.error(error))
    }
    return (
        <div className="w-[96%] mx-auto min-h-[80vh]"> {/* Container for the background */}
            <div className="relative w-[100%] min-h-[800px]">
                <Lottie
                    animationData={astronot}
                    loop={true}
                    style={{ width: "90%", height: "90%", position: 'absolute' }} // Set the animation to cover the entire container
                />
                <div className="mt-5 z-50 absolute w-[344px] 
             top-24 h-[405px] border-2 border-black">
                    <h1 className="text-3xl font-semibold text-center">Let's Go</h1>
                    <div className="w-[320px] z-50  mt-8 h-[330px]">
                        <form onSubmit={handleSubmit} className="z-50">
                            <input type="email" name="email" placeholder="Email" className="input rounded-md
                        w-[340px] p-1 input-bordered mb-3 mx-auto
                        h-[50px] border-2 border-gray-500" />
                            <input type="password" name="password" placeholder="Password" className="z-10 input rounded-md
                          w-[340px] p-1 input-bordered mb-3 mx-auto
                          h-[50px] border-2 border-gray-500" />
                            <button type="submit" className="btn glass bg-black
                           text-white w-[340px] py-2
                           rounded-md text-xl font-semibold">Login</button>
                        </form>
                        <div className="w-[340px] mt-8 border-t-[3px] border-gray-400">
                            <h1 className="text-center text-xl font-semibold mt-3">Login With</h1>
                            <div className="flex justify-between px-2">
                                <button onClick={googleClicked}>
                                    <img src={google}
                                        className="w-[32px] h-[32px] mx-auto"
                                        alt="" srcset="" />
                                    <h1 className="text-[18px] font-bold">Google</h1>
                                </button>
                                <button>
                                    <img src={git}
                                        className="w-[32px] h-[32px] mx-auto"
                                        alt="" srcset="" />
                                    <h1 className="text-[18px] font-bold">Github
                                        <br />
                                        <span className="font-normal">(not work)</span></h1>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Link to={'/reg'}>
                        <h1 className="text-[18px] mt-4 font-semibold text-center">
                            Not have a account?</h1>
                    </Link>
                </div>
            </div>

        </div>
    )
}
export default Login