import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router";
import {
  FaMapMarkerAlt,
  FaUserTie,
  FaEnvelope,
  FaCalendarAlt,
  FaUsers,
  FaListAlt,
} from "react-icons/fa";
import BeAVolunteerModel from "../../Components/BeAVolunteerModel/BeAVolunteerModel";
import useAuth from "../../Components/Hooks/useAuth";
// import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic";
import VolunteerNeedsCard from "../../Components/VolunteerNeeds/VolunteerNeedsCard";

/* Reusable Info Item Component */
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg shadow-sm dark:border-1 border-gray-200 dark:border-gray-700">
    <div className="text-primary text-lg">{icon}</div>
    <div>
      <p className="text-sm text-gray-500 dark:text-white">{label}</p>
      <p className="text-base font-semibold text-gray-800 dark:text-white">
        {value}
      </p>
    </div>
  </div>
);

const VolunteerDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  // const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);
  const [volunteerNeeds, setVolunteerNeeds] = useState([]);
  const [volunteer, setVolunteer] = useState(null);

  useEffect(() => {
    axiosPublic
      .get(`/volunteers/${id}`)
      .then((res) => setVolunteer(res.data))
      .catch((error) => console.error(error));

    axiosPublic
      .get("/volunteers/volunteerNeedNow")
      .then((res) => {
        setVolunteerNeeds(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [id, axiosPublic]);

  if (loading || !volunteer) return <Loading />;

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

  const isOrganizer = user?.email === OrganizerEmail;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <Helmet>
        <title>{title} | SebaConnect</title>
      </Helmet>

      {/* Title + Category */}
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
          {title}
        </h1>
        <div className="flex justify-center flex-wrap gap-3 mt-3">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
          <span className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm flex items-center gap-2">
            <FaCalendarAlt /> {deadline}
          </span>
        </div>
      </div>

      {/* Image */}
      <div className="relative mb-6">
        <img
          src={thumbnail}
          alt={title}
          className="w-full max-h-[500px] object-cover rounded-xl shadow-lg"
        />
        {volunteersNeeded === 0 && (
          <span className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-lg shadow text-sm font-medium">
            Filled
          </span>
        )}
      </div>

      {/* Info Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <InfoItem
            icon={<FaUsers />}
            label="Volunteers Needed"
            value={volunteersNeeded}
          />
          <InfoItem
            icon={<FaMapMarkerAlt />}
            label="Location"
            value={location}
          />
          <InfoItem
            icon={<FaUserTie />}
            label="Organizer"
            value={OrganizerName}
          />
          <InfoItem
            icon={<FaEnvelope />}
            label="Email"
            value={OrganizerEmail}
          />
        </div>

        {/* Volunteer Button */}
        {volunteersNeeded === 0 ? (
          <p className="text-red-500 font-semibold text-center bg-red-50 py-3 rounded-lg">
            All volunteer positions are filled for this post.
          </p>
        ) : isOrganizer ? (
          <p className="text-red-500 font-semibold text-center bg-red-50 py-3 rounded-lg">
            You cannot volunteer for your own post.
          </p>
        ) : (
          <div className="flex justify-center">
            <button
              onClick={() =>
                document.getElementById("VolunteerModal").showModal()
              }
              className="px-4 py-2 bg-primary border-1 dark:border-secondary hover:bg-secondary dark:bg-transparent text-white rounded-tr-2xl rounded-bl-2xl cursor-pointer transition"
            >
              Be a Volunteer
            </button>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6 dark:bg-gray-800 dark:border-1 border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          About this Opportunity
        </h2>
        <p className="text-gray-600 dark:text-white leading-relaxed">
          {description}
        </p>
      </div>

      {/* choice another volunteer */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Choose Another latest Volunteer Opportunity
        </h2>
        <p className="text-gray-600 dark:text-white mb-4">
          If you are interested in other volunteer opportunities, please check
          out our
          <a href="/allVolunteerPosts" className="text-primary font-semibold">
            {" "}
            Volunteer Opportunities{" "}
          </a>
          page.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-2">
          {volunteerNeeds.map((volunteer) => (
            <VolunteerNeedsCard
              key={volunteer._id}
              volunteer={volunteer}
            ></VolunteerNeedsCard>
          ))}
        </div>
      </div>
      {/* Volunteer Modal */}
      <BeAVolunteerModel user={user} volunteer={volunteer} />
    </div>
  );
};
export default VolunteerDetails;
