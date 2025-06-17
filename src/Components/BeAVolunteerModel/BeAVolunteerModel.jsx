import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const BeAVolunteerModel = ({ volunteer, user }) => {
  const [suggestion, setSuggestion] = useState("");
  const navigate = useNavigate();
  
  const axiosSecure = useAxiosSecure();

  const handleRequest = (e) => {
    e.preventDefault();

    const requestData = {
      ...volunteer,

      // values from user data
      volunteerName: user.displayName,
      volunteerEmail: user.email,
      suggestion,
      status: "requested",
    };

    axiosSecure
      .post("/volunteers/requests", requestData)
      .then((res) => {
        const result = res.data;
        

        if (
          result.acknowledged &&
          result.requestInsertedId &&
          result.volunteersDecremented
        ) {
          Swal.fire({
            icon: "success",
            title: "Volunteer Request Submitted!",
            showConfirmButton: false,
            timer: 1500,
          });

          setTimeout(() => {
            document.getElementById("VolunteerModal").close();
            navigate("/myPost");
          }, 100);
        } else if (
          result.acknowledged &&
          result.requestInsertedId &&
          !result.volunteersDecremented
        ) {
          Swal.fire({
            icon: "warning",
            title: "Request Added",
            text: "But volunteer count wasn't updated. Please contact support.",
          });
          setTimeout(() => {
            navigate("/myPost");
          }, 500);
        } else {
          Swal.fire({
            icon: "error",
            title: "Something went wrong!",
            text: "Could not process the request. Please try again.",
          });
        }
      })
      .catch((error) => {
        toast.error("Already Requested!", {
          position: "top-right",
          autoClose: 5000,
        });

        setTimeout(() => {
          navigate("/allVolunteerPosts");
        }, 500);
        console.log(error);
      });
  };

  return (
    <div>
      <dialog id="VolunteerModal" className="modal ">
        <div className="modal-box w-11/12 max-w-5xl dark:bg-gray-900">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="">
            <h3 className="text-xl font-bold mb-4 text-center">
              Volunteer Request
            </h3>

            <form onSubmit={handleRequest}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5">
                {/*  Thumbnail */}
                <fieldset className="fieldset ">
                  <label className="text-[.885rem] font-semibold">
                    Thumbnail
                  </label>
                  <input
                    type="url"
                    name="thumbnail"
                    defaultValue={volunteer.thumbnail}
                    placeholder="Thumbnail URL"
                    className="input dark:bg-gray-900 w-full rounded-md border-1  border-gray-400 focus:outline-none focus:border-2 focus:border-secondary cursor-not-allowed"
                    readOnly
                  />
                </fieldset>
                {/* Post title */}
                <fieldset className="fieldset ">
                  <label className="text-[.885rem] font-semibold">
                    Post Title
                  </label>
                  <input
                    name="title"
                    defaultValue={volunteer.title}
                    type="text"
                    className="input dark:bg-gray-900 rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full cursor-not-allowed"
                    placeholder="Post Title"
                    readOnly
                  />
                </fieldset>
              </div>
              {/* description */}
              <fieldset className="fieldset ">
                <label className=" text-[.885rem] font-semibold">
                  Description
                </label>
                <textarea
                  name="description"
                  defaultValue={volunteer.description}
                  className="textarea dark:bg-gray-900 rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full cursor-not-allowed"
                  placeholder="Describe what needs to be done"
                  readOnly
                />
              </fieldset>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5">
                {/* Category */}
                <fieldset className="fieldset ">
                  <label className=" text-[.885rem] font-semibold">
                    Category
                  </label>
                  <select
                    name="category"
                    defaultValue={volunteer.category}
                    className="select dark:bg-gray-900 rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full cursor-not-allowed"
                    disabled
                  >
                    <option defaultValue="">{volunteer.category}</option>
                    <option defaultValue="healthcare">Healthcare</option>
                    <option defaultValue="education">Education</option>
                    <option defaultValue="social-service">
                      Social Service
                    </option>
                    <option defaultValue="animal-welfare">
                      Animal Welfare
                    </option>
                  </select>
                </fieldset>
                {/* Location */}
                <fieldset className="fieldset ">
                  <label className=" text-[.885rem] font-semibold">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    defaultValue={volunteer.location}
                    placeholder="Location"
                    className="input dark:bg-gray-900 rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full cursor-not-allowed"
                    readOnly
                  />
                </fieldset>
                {/* No. of volunteers needed */}
                <fieldset className="fieldset ">
                  <label className=" text-[.885rem] font-semibold">
                    No. of volunteers needed
                  </label>
                  <input
                    type="number"
                    name="volunteersNeeded"
                    defaultValue={volunteer.volunteersNeeded}
                    placeholder="No. of Volunteers Needed"
                    className="input dark:bg-gray-900 rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full cursor-not-allowed"
                    readOnly
                  />
                </fieldset>
                {/* deadline */}
                <fieldset className="fieldset ">
                  <label className=" text-[.885rem] font-semibold">
                    Deadline
                  </label>
                  <input
                    name="deadline"
                    defaultValue={volunteer.deadline}
                    className="input dark:bg-gray-900 rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full cursor-not-allowed"
                    readOnly
                  />
                </fieldset>

                {/* User Name */}
                <fieldset className="fieldset ">
                  <label className=" text-[.885rem] font-semibold">
                    Organizer Name
                  </label>
                  <input
                    type="text"
                    name="OrganizerName"
                    defaultValue={volunteer.OrganizerName}
                    readOnly
                    className="input dark:bg-gray-900 rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full  cursor-not-allowed"
                  />
                </fieldset>
                {/* User Email */}
                <fieldset className="fieldset ">
                  <label className=" text-[.885rem] font-semibold">
                    Organizer Email
                  </label>
                  <input
                    type="email"
                    name="OrganizerEmail"
                    defaultValue={volunteer.OrganizerEmail}
                    readOnly
                    className="input dark:bg-gray-900 rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full  cursor-not-allowed"
                  />
                </fieldset>
              </div>
              {/* Suggestion  */}
              <fieldset className="fieldset ">
                <label className=" text-[.885rem] font-semibold">
                  Suggestion
                </label>
                <textarea
                  placeholder="Your Suggestion"
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  className="textarea dark:bg-gray-900 border-gray-400 textarea-bordered w-full"
                />
              </fieldset>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5">
                {/* User Name */}
                <fieldset className="fieldset ">
                  <label className=" text-[.885rem] font-semibold">
                    Volunteer name
                  </label>
                  <input
                    type="text"
                    name="volunteerName"
                    value={user?.displayName || ""}
                    readOnly
                    className="input dark:bg-gray-900 rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full  cursor-not-allowed"
                  />
                </fieldset>
                {/* User Email */}
                <fieldset className="fieldset ">
                  <label className=" text-[.885rem] font-semibold">
                    volunteer email
                  </label>
                  <input
                    type="email"
                    name="volunteerEmail"
                    value={user?.email || ""}
                    readOnly
                    className="input dark:bg-gray-900 rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full  cursor-not-allowed"
                  />
                </fieldset>
              </div>
              <div className="mt-5">
                <button className="btn bg-primary hover:bg-secondary  text-white  w-full">
                  Requested
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default BeAVolunteerModel;
