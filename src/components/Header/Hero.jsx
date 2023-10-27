import hero1 from '../../assets/images/homeCarousel/1.jpg'
import hero2 from '../../assets/images/homeCarousel/2.jpg'
import hero3 from '../../assets/images/homeCarousel/3.jpg'
import hero4 from '../../assets/images/homeCarousel/4.jpg'

const Hero = () => {
    return (
        <div className="carDoctorContainer mt-8">
            <div className="carousel w-full h-[500px] md:h-[600px] rounded-md">

                <div id="slide1" className="carousel-item relative w-full h-full">
                    <img src={hero1} className="w-full h-full object-cover rounded-md" />
                    <div className='absolute inset-0 bg-gradient-to-r from-black/80 to-black/5 p-[50px] flex items-center'>
                        <div className='lg:w-1/2 md:w-2/3 w-full space-y-5'>
                            <p className='md:text-[50px] lg:text-[55px] text-[36px] font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</p>
                            <p className='text-white font-light text-sm md:text-base'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='mr-3 px-4 py-2 bg-[#FF3811] text-white font-semibold rounded-md text-sm hover:bg-[#c53e3e] duration-200'>Discover</button>
                                <button className='px-4 py-2  border-2 border-white text-white font-semibold rounded-md text-sm'>Discover</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex space-x-5 right-3 bottom-4  md:right-16 md:bottom-16 z-[50]">
                        <a href="#slide4" className="btn hover:bg-[#FF3811] border-0 bg-[#FF3811]/50 text-white btn-circle">❮</a>
                        <a href="#slide2" className="btn hover:bg-[#FF3811] border-0 bg-[#FF3811]/50 text-white btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full h-full">
                    <img src={hero2} className="w-full h-full object-cover rounded-md" />
                    <div className='absolute inset-0 bg-gradient-to-r from-black/80 to-black/5 p-[50px] flex items-center'>
                        <div className='lg:w-1/2 md:w-2/3 w-full space-y-5'>
                            <p className='md:text-[50px] lg:text-[55px] text-[36px] font-bold text-white'>Where Expertise <br /> Meets Engine: <br/> Your Car's Best Friend</p>
                            <p className='text-white font-light text-sm md:text-base'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='mr-3 px-4 py-2 bg-[#FF3811] text-white font-semibold rounded-md text-sm hover:bg-[#c53e3e] duration-200'>Discover</button>
                                <button className='px-4 py-2  border-2 border-white text-white font-semibold rounded-md text-sm'>Discover</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex space-x-5 right-3 bottom-4  md:right-16 md:bottom-16 z-[50]">
                        <a href="#slide1" className="btn hover:bg-[#FF3811] border-0 bg-[#FF3811]/50 text-white btn-circle">❮</a>
                        <a href="#slide3" className="btn hover:bg-[#FF3811] border-0 bg-[#FF3811]/50 text-white btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full h-full">
                    <img src={hero3} className="w-full h-full object-cover rounded-md" />
                    <div className='absolute inset-0 bg-gradient-to-r from-black/80 to-black/5 p-[50px] flex items-center'>
                        <div className='lg:w-1/2 md:w-2/3 w-full space-y-5'>
                            <p className='md:text-[50px] lg:text-[55px] text-[36px] font-bold text-white'>Revive <br/> Your Ride,<br/> Renew Your Journey.</p>
                            <p className='text-white font-light text-sm md:text-base'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='mr-3 px-4 py-2 bg-[#FF3811] text-white font-semibold rounded-md text-sm hover:bg-[#c53e3e] duration-200'>Discover</button>
                                <button className='px-4 py-2  border-2 border-white text-white font-semibold rounded-md text-sm'>Discover</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex space-x-5 right-3 bottom-4  md:right-16 md:bottom-16 z-[50]">
                        <a href="#slide2" className="btn hover:bg-[#FF3811] border-0 bg-[#FF3811]/50 text-white btn-circle">❮</a>
                        <a href="#slide4" className="btn hover:bg-[#FF3811] border-0 bg-[#FF3811]/50 text-white btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full h-full">
                    <img src={hero4} className="w-full h-full object-cover rounded-md" />
                    <div className='absolute inset-0 bg-gradient-to-r from-black/80 to-black/5 p-[50px] flex items-center'>
                        <div className='lg:w-1/2 md:w-2/3 w-full space-y-5'>
                            <p className='md:text-[50px] lg:text-[55px] text-[36px] font-bold text-white'>"We Don't Fix <br/> Cars; We Restore <br/> Peace of Mind</p>
                            <p className='text-white font-light text-sm md:text-base'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='mr-3 px-4 py-2 bg-[#FF3811] text-white font-semibold rounded-md text-sm hover:bg-[#c53e3e] duration-200'>Discover</button>
                                <button className='px-4 py-2  border-2 border-white text-white font-semibold rounded-md text-sm'>Discover</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex space-x-5 right-3 bottom-4  md:right-16 md:bottom-16 z-[50]">
                        <a href="#slide3" className="btn hover:bg-[#FF3811] border-0 bg-[#FF3811]/50 text-white btn-circle">❮</a>
                        <a href="#slide1" className="btn hover:bg-[#FF3811] border-0 bg-[#FF3811]/50 text-white btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Hero;