import { useEffect } from "react";
import { useState } from "react";

// image import
import aboutUs1 from '../assets/images/about_us/person.jpg'
import aboutUs2 from '../assets/images/about_us/parts.jpg'

import contact1 from '../assets/contact/calender.svg'
import contact3 from '../assets/contact/location.svg'
import contact2 from '../assets/contact/phone.svg'

// component import
import Hero from "../components/Header/Hero";
import HomeServiceSection from "./home/HomeServiceSection";
import HomeOurTeamSection from "./home/HomeOurTeamSection";
import HomeProductsSection from "./home/HomeProductsSection";
import HomeChooseUsSection from "./home/HomeChooseUsSection";
import HomeTestimonial from "./home/HomeTestimonial";



const Home = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="carDoctorContainer pb-10">
            <Hero />

            {/* About Us */}
            <div className="hero mt-20">
                <div className="hero-content flex-col  lg:flex-row-reverse h-full p-0">
                    <div className="text-center lg:w-1/2 w-full  lg:text-left lg:pr-10">
                        <h1 className="text-xl font-bold text-[#FF3811]">About us</h1>
                        <p className="py-6 font-bold text-4xl">We are qualified <br /> & of experience <br /> in this field</p>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <p className="py-6">
                            The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <button className='px-4 py-2 bg-[#FF3811] text-white font-semibold rounded-md text-sm hover:bg-[#c53e3e] duration-200 '>Get More Info</button>

                    </div>
                    <div className="lg:w-1/2 w-full h-full relative">
                        <img className="w-2/3 h-[75%] object-cover rounded-md" src={aboutUs1} alt="" />
                        <img className="w-2/4 h-2/3 object-cover absolute border-8 border-white rounded-md bottom-0 right-0 lg:right-12 " src={aboutUs2} alt="" />
                    </div>
                </div>
            </div>

            {/* our services */}
            <div className="mt-24">
                <HomeServiceSection />
            </div>

            {/* Contact */}
            <div className="mt-20">
                <div className=" w-full bg-[#151515] rounded-md px-16 py-20 lg:py-24 flex justify-between items-center lg:flex-nowrap flex-wrap gap-5">
                    <div className="flex items-center gap-5">
                        <img src={contact1} alt="" />
                        <div className="text-white">
                            <p className="font-medium">We are open monday-friday</p>
                            <p className="font-semibold text-[22px]">7:00 am - 9:00 pm</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <img src={contact2} alt="" />
                        <div className="text-white">
                            <p className="font-medium">Have a question?</p>
                            <p className="font-semibold text-[22px]">+2546 251 2658</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <img src={contact3} alt="" />
                        <div className="text-white">
                            <p className="font-medium">Need a repair? our address</p>
                            <p className="font-semibold text-[22px]">Liza Street, New York</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Our Product */}
            <div className="mt-20">
                <HomeProductsSection />
            </div>

            {/* Our Team */}
            <div className="mt-20">
                <HomeOurTeamSection />
            </div>

            {/* Why choose Us */}
            <div className="mt-20">
                <HomeChooseUsSection/>
            </div>

            {/* Why choose Us */}
            <div className="mt-20">
                <HomeTestimonial/>
            </div>
        </div>
    );
};

export default Home;