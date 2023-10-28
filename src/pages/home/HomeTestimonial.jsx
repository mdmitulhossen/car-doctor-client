import TestimonialCard from "../../components/Cards/TestimonialCard";
import SectionHeader from "../../components/Header/SectionHeader";

// import Swiper core and required modules
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperNavButtons from "../../components/Button/SwiperNavButtons";

const HomeTestimonial = () => {
    return (
        <div>
            {/* header */}
            <SectionHeader
                header="Testimonial"
                title="What Customer Says"
                smallDisc="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />

            {/* container */}
            <div className="mt-10 ">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                    }}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                >
                    <SwiperSlide><TestimonialCard /></SwiperSlide>
                    <SwiperSlide><TestimonialCard /></SwiperSlide>
                    <SwiperSlide><TestimonialCard /></SwiperSlide>
                    <SwiperSlide><TestimonialCard /></SwiperSlide>
                    <SwiperSlide><TestimonialCard /></SwiperSlide>


                    <SwiperNavButtons />
                </Swiper>

            </div>
        </div>
    );
};

export default HomeTestimonial;