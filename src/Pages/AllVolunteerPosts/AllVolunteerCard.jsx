import React from "react";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router";

const AllVolunteerCard = ({ allVolunteerPosts }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-2">
        {allVolunteerPosts.map((volunteer) => (
          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            key={volunteer._id}
            className="flex flex-col justify-between h-full rounded-xl shadow-md hover:shadow-xl transition overflow-hidden relative"
          >
            <div className="">
              <figure>
                <img
                  className="w-full h-64 object-cover"
                  src={volunteer.thumbnail}
                  alt={volunteer.title}
                />
              </figure>
            </div>
            <div className="flex flex-col justify-between p-3 pt-4 space-y-2 text-gray-700 dark:text-white">
              <div className="flex flex-col justify-between space-y-2">
                <p className="flex  gap-1 items-center">
                  <strong>
                    <MdDateRange size={24} />
                  </strong>
                  {new Date(volunteer.deadline).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <h2 className="text-2xl font-semibold min-h-[60px]">
                  {volunteer.title}
                </h2>
                <p className="line-clamp-2 min-h-[40px] text-gray-600 text-sm dark:text-white">
                  {volunteer.description}
                </p>
                <p className="absolute top-0 left-0 bg-primary rounded-br-full text-white dark:bg-gray-500 dark:text-white text-xs font-medium px-3 py-2 w-fit">
                  {volunteer.category}
                </p>
              </div>

              <div className="">
                <Link
                  className="w-full"
                  to={`/volunteerDetails/${volunteer._id}`}
                >
                  <button className="bg-primary hover:bg-secondary text-white btn mt-2 w-full font-semibold transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteerCard;
