import Breadcrumbs from "../components/Header/Breadcrumbs";
import test from '../assets/images/services/1.jpg'
import WhatServiceCard from "./serviceDetails/whatServiceCard";
import DiscountCard from "./serviceDetails/DiscountCard";

const ServiceDetailsPage = () => {
    return (
        <div className="carDoctorContainer pb-10">
            <Breadcrumbs path='Service Details' />

            <div className="mt-20 grid grid-cols-12 gap-5">

                <div className="col-span-full lg:col-span-8 space-y-5">
                    <img src={test} className="w-full h-[350px] rounded-md object-cover" alt="" />
                    <h1 className="font-semibold text-3xl pt-3">Unique Car Engine Service</h1>
                    <p className="text-[#737373] capitalize">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <div className="grid md:grid-cols-2 gap-5">
                        <WhatServiceCard
                            title='Instant Car Services'
                            details='It uses a dictionary of over 200 Latin words, combined with a model sentence structures.'
                        />
                        <WhatServiceCard
                            title='24/7 Quality Service'
                            details='It uses a dictionary of over 200 Latin words, combined with a model sentence structures.'
                        />
                        <WhatServiceCard
                            title='Easy Customer Service'
                            details='It uses a dictionary of over 200 Latin words, combined with a model sentence structures.'
                        />
                        <WhatServiceCard
                            title='Quality Cost Service'
                            details='It uses a dictionary of over 200 Latin words, combined with a model sentence structures.'
                        />

                    </div>
                    <p className="text-[#737373] capitalize">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </p>

                    {/* 3 simple steps constainerXX */}
                    <div className="space-y-5">

                        <h1 className="font-semibold text-3xl pt-3">3 Simple Steps to Process</h1>
                        <p className="text-[#737373] capitalize">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        </p>
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
                            <div className="border border-[#E8E8E8] rounded-md p-9 space-y-2 flex flex-col justify-center items-center">
                                <span className="py-3 px-[14px] rounded-full bg-[#FF3811] font-semibold text-white ring-8 ring-[#FF3811]/20">01</span>
                                <p className="text-xl font-bold pt-3">Step One</p>
                                <p className="text-[#737373] text-center">
                                    It uses a dictionary of over 200 .
                                </p>

                            </div>
                            {/* two */}
                            <div className="border border-[#E8E8E8] rounded-md p-9 space-y-2 flex flex-col justify-center items-center">
                                <span className="py-3 px-[14px] rounded-full bg-[#FF3811] font-semibold text-white ring-8 ring-[#FF3811]/20">02</span>
                                <p className="text-xl font-bold pt-3">Step Two</p>
                                <p className="text-[#737373] text-center">
                                    It uses a dictionary of over 200 .
                                </p>

                            </div>
                            {/* 3 */}
                            <div className="border border-[#E8E8E8] rounded-md p-9 space-y-2 flex flex-col justify-center items-center">
                                <span className="py-3 px-[14px] rounded-full bg-[#FF3811] font-semibold text-white ring-8 ring-[#FF3811]/20">03</span>
                                <p className="text-xl font-bold pt-3">Step Three</p>
                                <p className="text-[#737373] text-center">
                                    It uses a dictionary of over 200 .
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className="col-span-full lg:col-span-4 rounded-md space-y-6">
                    {/* services */}
                    <div className="bg-[#F3F3F3] p-10 space-y-3">
                        <p className="text-[#151515] text-2xl font-semibold">Services</p>
                        <button className="px-4 py-2 hover:bg-[#FF3811] bg-white w-full rounded-md flex justify-between items-center font-semibold hover:text-white group">
                            <span>Full Car Repair</span>
                            <span className="text-2xl text-[#FF3811] group-hover:text-white">
                                <i className='bx bx-right-arrow-alt bx-tada' ></i>
                            </span>
                        </button>
                        <button className="px-4 py-2 hover:bg-[#FF3811] bg-white w-full rounded-md flex justify-between items-center font-semibold hover:text-white group">
                            <span>Engine Repair</span>
                            <span className="text-2xl text-[#FF3811] group-hover:text-white">
                                <i className='bx bx-right-arrow-alt bx-tada' ></i>
                            </span>
                        </button>
                        <button className="px-4 py-2 hover:bg-[#FF3811] bg-white w-full rounded-md flex justify-between items-center font-semibold hover:text-white group">
                            <span>Automatic Services</span>
                            <span className="text-2xl text-[#FF3811] group-hover:text-white">
                                <i className='bx bx-right-arrow-alt bx-tada' ></i>
                            </span>
                        </button>

                    </div>

                    <DiscountCard/>

                    <p className="text-3xl text-[#151515] font-bold">
                        Price $2200
                    </p>

                    <button className="px-4 py-3 w-full rounded-md bg-[#FF3811] text-white font-semibold text-sm ">Proceed Checkout</button>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetailsPage;