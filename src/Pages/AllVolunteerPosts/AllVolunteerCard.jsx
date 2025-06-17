import React from 'react';
import { Link } from 'react-router';

const AllVolunteerCard = ({ allVolunteerPosts }) => {
  // const { thumbnail, title, category, deadline, _id } = volunteer;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
        {allVolunteerPosts.map((volunteer) => (
          <div
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
              <h2 className="card-title font-semibold">{volunteer.title}</h2>
              <p className="">
                <strong>category : </strong>
                {volunteer.category}
              </p>
              <p className="">
                <strong>Deadline : </strong>
                {volunteer.deadline}
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