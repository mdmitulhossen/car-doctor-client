import SectionHeader from "../../components/Header/SectionHeader";

// import img

import choose1  from '../../assets/icons/group.svg'
import choose2  from '../../assets/icons/watch.svg'
import choose3  from '../../assets/icons/person.svg'
import choose4  from '../../assets/icons/Wrench.svg'
import choose5  from '../../assets/icons/check.svg'
import choose6  from '../../assets/icons/deliveryt.svg'



const HomeChooseUsSection = () => {
    return (
        <div>
             {/* header */}
             <SectionHeader
                header="Core Features"
                title="Why Choose Us"
                smallDisc="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />
            {/* container */}
            <div className="mt-10 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                 <div className="p-7 cursor-pointer border border-[#E8E8E8] hover:bg-[#FF3811]/50 text-[#444] duration-200 hover:text-white space-y-3 flex flex-col justify-center items-center rounded-md">
                     <img className="h-12" src={choose1} alt="" />
                     <p className="font-semibold text-lg  text-center">Expert Team</p>
                 </div>
                 <div className="p-7 cursor-pointer border border-[#E8E8E8] hover:bg-[#FF3811]/50 text-[#444] duration-200 hover:text-white space-y-3 flex flex-col justify-center items-center rounded-md">
                     <img className="h-12" src={choose2} alt="" />
                     <p className="font-semibold text-lg  text-center">Timely Delivery</p>
                 </div>
                 <div className="p-7 cursor-pointer border border-[#E8E8E8] hover:bg-[#FF3811]/50 text-[#444] duration-200 hover:text-white space-y-3 flex flex-col justify-center items-center rounded-md">
                     <img className="h-12" src={choose3} alt="" />
                     <p className="font-semibold text-lg  text-center">24/7 Support</p>
                 </div>
                 <div className="p-7 cursor-pointer border border-[#E8E8E8] hover:bg-[#FF3811]/50 text-[#444] duration-200 hover:text-white space-y-3 flex flex-col justify-center items-center rounded-md">
                     <img className="h-12" src={choose4} alt="" />
                     <p className="font-semibold text-lg  text-center">Best Equipment</p>
                 </div>
                 <div className="p-7 cursor-pointer border border-[#E8E8E8] hover:bg-[#FF3811]/50 text-[#444] duration-200 hover:text-white space-y-3 flex flex-col justify-center items-center rounded-md">
                     <img className="h-12" src={choose5} alt="" />
                     <p className="font-semibold text-lg  text-center">100% Guranty</p>
                 </div>
                 <div className="p-7 cursor-pointer border border-[#E8E8E8] hover:bg-[#FF3811]/50 text-[#444] duration-200 hover:text-white space-y-3 flex flex-col justify-center items-center rounded-md">
                     <img className="h-12" src={choose6} alt="" />
                     <p className="font-semibold text-lg  text-center">Timely Delivery</p>
                 </div>
            </div>
        </div>
    );
};

export default HomeChooseUsSection;