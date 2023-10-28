import SectionHeader from "../../components/Header/SectionHeader";

// import Swiper core and required modules
import { Navigation, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import TeamCard from "../../components/Cards/TeamCard";
import SwiperNavButtons from "../../components/Button/SwiperNavButtons";

const HomeOurTeamSection = () => {
    return (
        <div>
            {/* header */}
            <SectionHeader
                header="Team"
                title="Meet Our Team"
                smallDisc="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />

            {/* container  */}
            <div className="mt-10 relative">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}


                >
                    <SwiperSlide><TeamCard /></SwiperSlide>
                    <SwiperSlide><TeamCard /></SwiperSlide>
                    <SwiperSlide><TeamCard /></SwiperSlide>
                    <SwiperSlide><TeamCard /></SwiperSlide>
                    <SwiperSlide><TeamCard /></SwiperSlide>
                    <SwiperSlide><TeamCard /></SwiperSlide>
                    <SwiperSlide><TeamCard /></SwiperSlide>
                    <SwiperSlide><TeamCard /></SwiperSlide>
                    <SwiperSlide><TeamCard /></SwiperSlide>

                    <SwiperNavButtons />
                </Swiper>

            </div>
        </div>
    );
};

export default HomeOurTeamSection;