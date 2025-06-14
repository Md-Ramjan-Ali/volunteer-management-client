import React, { useRef } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider1 from "../../assets/Slider (1).jpg";
import slider2 from "../../assets/Slider (2).jpg";
import slider3 from "../../assets/Slider (3).jpg";
import { Link } from "react-router";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide className="relative">
            <img src={slider1} alt="" className="brightness-50" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl  font-bold mb-4"
              >
                Empower Change Through Volunteering
              </motion.h2>
              <p className=" md:text-lg mb-6 max-w-xl">
                Join hands to create a better tomorrow. Your time and effort can
                bring hope and help to those in need.
              </p>
              <Link to="/allVolunteerPosts">
                <button className="btn bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded-md">
                  Get Started
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slider2} alt="" className="brightness-50" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl  font-bold mb-4"
              >
                Be the Reason Someone Smiles Today
              </motion.h2>
              <p className=" md:text-lg mb-6 max-w-xl">
                Every action counts. Whether it's supporting education, the
                environment, or communities in crisis your volunteer work makes
                a difference.
              </p>
              <Link to="/allVolunteerPosts">
                <button className="btn bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded-md">
                  Start Volunteering
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={slider3} alt="" className="brightness-50" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl  font-bold mb-4"
              >
                Make Your Impact Matter
              </motion.h2>
              <p className=" md:text-lg mb-6 max-w-xl">
                Turn your passion into purpose. Connect with meaningful
                opportunities, meet like-minded people, and leave a lasting
                impact in your community.
              </p>
              <Link to="/allVolunteerPosts">
                <button className="btn bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded-md">
                  Explore Opportunities
                </button>
              </Link>
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </>
    </div>
  );
};

export default Slider;
