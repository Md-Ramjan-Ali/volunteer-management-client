import React from "react";
import { useLoaderData } from "react-router";

const VolunteerDetails = () => {
  const volunteer = useLoaderData();
  const {
    title,
    thumbnail,
    description,
    deadline,
    category,
    location,
    OrganizerName,
    OrganizerEmail,
    _id,
  } = volunteer;
  return (
    <div className="max-w-screen-xl mx-auto my-5 p-3">
      <div className="card lg:card-side shadow-lg rounded-xl overflow-hidden">
        <div className="">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full max-h-[500px] object-center"
          />
        </div>
        <div className=" p-6 flex flex-col justify-between">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="space-y-5">
            <p>
              <strong>Description:</strong> {description}
            </p>
            <p>
              <strong>Category:</strong> {category}
            </p>
            <p>
              <strong>Deadline:</strong> {deadline}
            </p>
            <p>
              <strong>Location:</strong> {location}
            </p>
            <p>
              <strong>Organizer Name:</strong> {OrganizerName}
            </p>
            <p>
              <strong>Organizer Email:</strong> {OrganizerEmail}
            </p>
          </div>

          <div className=" ">
            <button className="btn w-full mt-6  bg-green-600 hover:bg-green-700 text-white font-semibold  transition">
              Be a Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetails;
