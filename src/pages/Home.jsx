import Hero from "../components/Header/Hero";

// image import
import aboutUs1 from '../assets/images/about_us/person.jpg'
import aboutUs2 from '../assets/images/about_us/parts.jpg'
import SectionHeader from "../components/Header/SectionHeader";
import ServiceCard from "../components/Cards/ServiceCard";

const Home = () => {
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
                {/* header */}
                <SectionHeader
                    header="Service"
                    title="Our Service Area"
                    smallDisc="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                />

                {/* section container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
                     <ServiceCard name="heloooooo helloooo hello ejhkasu hgfjsf hjsdf"/>
                     <ServiceCard name='car engine'/>
                     <ServiceCard name='motor engine repaoiredad fsdfd'/>
                     <ServiceCard name='motor' price='200'/>
                </div>
            </div>
        </div>
    );
};

export default Home;