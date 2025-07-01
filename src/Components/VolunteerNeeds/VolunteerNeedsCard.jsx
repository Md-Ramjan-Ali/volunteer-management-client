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
        className="flex flex-col justify-between h-full rounded-xl shadow-md hover:shadow-xl transition overflow-hidden relative"
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
        <div className="flex flex-col justify-between p-3 pt-4 space-y-2 text-gray-700 dark:text-white">
          <div className="flex flex-col justify-between space-y-2">
            <p className="flex  gap-1 items-center">
              <strong>
                <MdDateRange size={24} />
              </strong>
              {new Date(deadline).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="line-clamp-2 min-h-[40px] text-gray-600 text-sm dark:text-white">
              {description}
            </p>
            <p className="absolute top-0 left-0 bg-primary rounded-br-full text-white dark:bg-gray-500 dark:text-white text-xs font-medium px-3 py-2 w-fit">
              {category}
            </p>
          </div>

          <div className="">
            <Link className="w-full" to={`/volunteerDetails/${_id}`}>
              <button className="bg-primary hover:bg-secondary text-white btn mt-2 w-full font-semibold transition">
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
