import React from "react";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router";

const VolunteerNeedsCard = ({ volunteer }) => {
  const { thumbnail, description, title, category, deadline, _id } = volunteer;

  return (
    <div>
      <div
        data-aos="zoom-in"
        data-aos-easing="linear"
        className="flex flex-col justify-between h-full rounded-xl shadow-md hover:shadow-xl transition overflow-hidden relative dark:border-1 border-gray-200 dark:border-gray-700"
      >
        <div className="">
          <figure>
            <img
              className="w-full h-64 object-cover"
              src={thumbnail}
              alt={title}
            />
          </figure>
        </div>
        <div className="flex flex-col justify-between items-center p-3 pt-4 space-y-2 text-gray-700 dark:text-white">
          <div className="flex flex-col justify-between space-y-2">
            <p className="flex  gap-1 items-center justify-center">
              <strong>
                <MdDateRange size={24} />
              </strong>
              {new Date(deadline).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <h2 className="text-xl font-semibold w-[70%] mx-auto text-center">
              {title}
            </h2>
            <p className="line-clamp-2 min-h-[40px] text-gray-600 text-sm dark:text-white w-[90%] mx-auto text-center">
              {description}
            </p>
            <p className="absolute top-0 left-0 bg-secondary rounded-br-full text-white dark:bg-gray-500 dark:text-white text-xs font-medium px-3 py-2 w-fit">
              {category}
            </p>
          </div>

          <div className="">
            <Link
              className="w-full"
              to={`/volunteerDetails/${_id}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <button className="bg-primary hover:bg-secondary text-white border-1 dark:border-secondary dark:bg-transparent mt-2 w-full font-base transition px-4 py-2 rounded-tr-full rounded-bl-full rounded-br-full cursor-pointer">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeedsCard;
