import React from "react";
import { Link } from "react-router";

const VolunteerNeedsCard = ({ volunteer }) => {
  const { thumbnail, title, category, deadline, _id } = volunteer;

  return (
    <div>
      <div
        data-aos="zoom-in"
        data-aos-easing="linear"
        className="card rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
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
          <h2 className="card-title font-semibold">{title}</h2>
          <p className="">
            <strong>category : </strong>
            {category}
          </p>
          <p className="">
            <strong>Deadline : </strong>
            {deadline}
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
