import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";
import "./styles.css";

import slider1 from "../../assets/Slider (1).jpg";
import slider2 from "../../assets/Slider (2).jpg";
import slider3 from "../../assets/Slider (3).jpg";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current?.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const slides = [
    {
      id: 1,
      image: slider1,
      title: "Empower Change Through Volunteering",
      description:
        "Join hands to create a better tomorrow. Your time and effort can bring hope and help to those in need.",
      btnText: "Get Started",
    },
    {
      id: 2,
      image: slider2,
      title: "Be the Reason Someone Smiles Today",
      description:
        "Every action counts. Whether it's supporting education, the environment, or communities in crisis your volunteer work makes a difference.",
      btnText: "Start Volunteering",
    },
    {
      id: 3,
      image: slider3,
      title: "Make Your Impact Matter",
      description:
        "Turn your passion into purpose. Connect with meaningful opportunities, meet like-minded people, and leave a lasting impact in your community.",
      btnText: "Explore Opportunities",
    },
  ];

  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            <img src={slide.image} alt="" className="brightness-30" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              {activeIndex === index && (
                <>
                  <motion.h2
                    key={`title-${slide.id}`}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="text-xl md:text-3xl font-bold mb-4"
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    key={`desc-${slide.id}`}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="text-xs md:text-lg mb-6 max-w-xl"
                  >
                    {slide.description}
                  </motion.p>
                  <Link to="/allVolunteerPosts">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1.4 }}
                      className="btn bg-primary text-white hover:bg-secondary px-6 py-2 rounded-md"
                    >
                      {slide.btnText}
                    </motion.button>
                  </Link>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
