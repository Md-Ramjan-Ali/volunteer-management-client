import React from "react";
import "flowbite";
import slider1 from "../../assets/Slider (1).jpg";
import slider2 from "../../assets/Slider (2).jpg";
import slider3 from "../../assets/Slider (3).jpg";

const Slider = () => {
  return (
    <div>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative   overflow-hidden rounded-lg h-[500px]">
          {/* Item 1 */}
          <div
            className="hidden duration-700 h-full ease-in-out object-cover relative"
            data-carousel-item
          >
            <img
              src={slider1}
              className="absolute h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 brightness-50"
              alt="Slide 1"
            />
            {/* Text content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <h2 className="text-2xl font-bold">Your Heading</h2>
              <p className="mt-2 text-sm">Your description goes here</p>
            </div>
          </div>

          {/* Item 2 */}
          <div
            className="hidden duration-700 h-full ease-in-out object-cover"
            data-carousel-item
          >
            <img
              src={slider2}
              className="absolute h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 brightness-50"
              alt="Slide 2"
            />
          </div>
          {/* Item 3 */}
          <div
            className="hidden duration-700 h-full ease-in-out object-cover"
            data-carousel-item
          >
            <img
              src={slider3}
              className="absolute h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 brightness-50"
              alt="Slide 2"
            />
          </div>
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
