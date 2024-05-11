import Lottie from "lottie-react";
import React from "react";
import rock from './assets/images/rock.json'
import { Link } from "react-router-dom";
const Error = () => {

    return (
        <>
            <div className="w-full min-h-[60vh] flex justify-center items-center">
                <div className="relative h-[600px]">
                    <Lottie animationData={rock}
                        loop={true}
                        style={{ width: "90%", height: "600px" }}
                    >
                    </Lottie>
                   <div className="absolute top-36">
                     <h1 className="text-xl font-medium">Something Went Wrong!404 Opps</h1>
                    <Link to={'/'}> <h1 className="px-2 py-1 w-[100px] mt-3 rounded-md bg-gray-300">Go Home</h1> </Link>
                   </div>
                </div>
            </div>
        </>
    )
}
export default Error