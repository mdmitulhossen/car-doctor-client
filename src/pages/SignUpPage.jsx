import Navbar from "../components/Header/Navbar";

import right1 from '../assets/images/login/login.svg'
import google from '../assets/social/google.svg'
import { useNavigate } from "react-router-dom";


const SignUpPage = () => {
    const navigate = useNavigate();
    return (
        <div >
            <Navbar />


            <div className="carDoctorContainer pb-10 mt-10">
                <div className="flex gap-10">
                    <div className="w-1/2 hidden md:flex justify-center items-center p-5">
                        <img src={right1} className="object-fill" alt="" />
                    </div>
                    <div className="w-full md:w-1/2 border xl:p-16 lg:p-10 p-5 rounded-md">
                        <p className="text-3xl font-semibold w-full text-center">Sign Up</p>

                        <form className="mt-10">
                            <label htmlFor="name" className="font-semibold">Name</label>
                            <input className="border mt-2 rounded-md w-full border-gray-300 px-4 py-2 outline-[#FF3811]" type="text" name="name" id="name" placeholder="Enter name" />

                            <label htmlFor="email" className="font-semibold pt-5 block">Email</label>
                            <input className="border mt-2 rounded-md w-full border-gray-300 px-4 py-2 outline-[#FF3811]" type="email" name="email" id="email" placeholder="Enter email" />

                            <label htmlFor="password" className="font-semibold pt-5 block">Name</label>
                            <input className="border mt-2 rounded-md w-full border-gray-300 px-4 py-2 outline-[#FF3811]" type="password" name="password" id="password" placeholder="Enter password" />

                            <button className="px-4 py-2 text-sm font-semibold rounded-md w-full text-white bg-[#FF3811] hover:bg-[#d35036] duration-200 mt-5">Sign Up</button>
                        </form>
                        <p className="w-full text-center font-semibold mt-5">Or Sign Up with</p>
                        <div className="flex justify-center items-center gap-4 mt-5">
                            <button className="text-2xl px-2 py-[4px] rounded-full bg-[#F5F5F8] text-[#3B5998] hover:bg-[#FF3811]/10 duration-200">
                                <i className='bx bxl-facebook' ></i>
                            </button>
                            <button className="text-2xl px-2 py-[4px] rounded-full bg-[#F5F5F8] text-[#3B5998] hover:bg-[#FF3811]/10 duration-200">
                                <i className='bx bxl-linkedin' ></i>
                            </button>
                            <button className="text-2xl p-3 rounded-full bg-[#F5F5F8] text-[#3B5998] hover:bg-[#FF3811]/10 duration-200">
                                <img src={google} alt="" />
                            </button>
                        </div>

                        <p onClick={()=>navigate('/login')} className="w-full text-center font-medium mt-5">
                            Already have an account? <span className="text-[#FF3811] cursor-pointer">Login</span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;