import React from "react";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router";

const AllVolunteerCard = ({ allVolunteerPosts }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
        {allVolunteerPosts.map((volunteer) => (
          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            key={volunteer._id}
            className="card rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <div>
              <figure>
                <img
                  className="w-full h-64 object-cover"
                  src={volunteer.thumbnail}
                  alt={volunteer.title}
                />
              </figure>
            </div>
            <div className="card-body text-gray-700 dark:text-white">
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
              <h2 className="card-title font-semibold">{volunteer.title}</h2>
              <p className="line-clamp-2 text-gray-600 text-sm dark:text-white">
                {volunteer.description}
              </p>
              <p className="bg-base-200 text-secondary dark:bg-gray-500 dark:text-white text-xs font-medium px-3 py-1 w-fit rounded-full">
                {volunteer.category}
              </p>

              <div className="card-actions">
                <Link
                  className="w-full"
                  to={`/volunteerDetails/${volunteer._id}`}
                >
                  <button className="bg-primary text-white btn mt-2 w-full font-semibold transition">
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
