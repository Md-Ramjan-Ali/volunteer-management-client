import React from "react";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router";

const VolunteerNeedsCard = ({ volunteer }) => {
  const { thumbnail,description, title, category, deadline, _id } = volunteer;

  return (
    <div>
      <div
        data-aos="zoom-in"
        data-aos-easing="linear"
        className="flex flex-col justify-between h-full rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
      >
        <div>
          <figure>
            <img
              className="w-full h-64 object-cover"
              src={thumbnail}
              alt={title}
            />
          </figure>
        </div>
        <div className="card-body text-gray-700 dark:text-white">
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
          <h2 className="card-title font-semibold">{title}</h2>
          <p className="line-clamp-2 text-gray-600 text-sm dark:text-white">
            {description}
          </p>
          <p className="bg-base-200 text-secondary dark:bg-gray-500 dark:text-white text-xs font-medium px-3 py-1 w-fit rounded-full">
            {category}
          </p>

          <div className="card-actions">
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
