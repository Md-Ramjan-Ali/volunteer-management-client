import React, { useEffect, useState } from "react";
import BeAVolunteerModel from "../../Components/BeAVolunteerModel/BeAVolunteerModel";
import useAuth from "../../Components/Hooks/useAuth";
import { useParams } from "react-router";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";

const VolunteerDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [volunteer, setVolunteer] = useState(null);
  // console.log(volunteer);

  useEffect(() => {
    axiosSecure
      .get(`/volunteers/${id}`)
      .then((res) => {
        setVolunteer(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, axiosSecure]);

  if (!volunteer) {
    return <Loading></Loading>;
  }

  const {
    title,
    thumbnail,
    description,
    deadline,
    category,
    location,
    OrganizerName,
    OrganizerEmail,
    volunteersNeeded,
  } = volunteer;

  return (
    <div className="max-w-screen-xl mx-auto my-5 px-2">
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
              <strong>Volunteer Needed:</strong> {volunteersNeeded}
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
            {volunteersNeeded === 0 ? (
              <p className="text-red-500 font-semibold mt-4 text-center">
                All volunteer positions are filled for this post.
              </p>
            ) : (
              user.email !== volunteer.OrganizerEmail && (
                <button
                  onClick={() =>
                    document.getElementById("VolunteerModal").showModal()
                  }
                  className="btn w-full mt-6  bg-primary hover:bg-secondary  text-white font-semibold  transition"
                >
                  Be a Volunteer
                </button>
              )
            )}
            {user.email === volunteer.OrganizerEmail && (
              <p className="text-red-500 mt-6 font-semibold text-center">
                You cannot volunteer for your own post.
              </p>
            )}
          </div>
        </div>
      </div>
      <BeAVolunteerModel user={user} volunteer={volunteer}></BeAVolunteerModel>
    </div>
  );
};

export default VolunteerDetails;
