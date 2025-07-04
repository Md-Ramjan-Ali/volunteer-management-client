import React, { useState } from "react";
import useAuth from "../../Components/Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";

const AddVolunteer = () => {
  const [deadline, setDeadline] = useState(new Date());
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleAddVolunteer = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const volunteerData = Object.fromEntries(formData.entries());
    volunteerData.volunteersNeeded = parseInt(volunteerData.volunteersNeeded);

    axiosSecure
      .post(`/volunteers`, volunteerData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Add Volunteer Post successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto py-5">
      <Helmet>
        <title>Add Volunteer | SebaConnect</title>
      </Helmet>
      <div
        className="card bg-base-200/50 dark:bg-gray-900 w-full shadow-sm"
        data-aos="zoom-in"
        data-aos-easing="linear"
      >
        <h1 className="text-center text-2xl font-bold pt-5 text-secondary dark:text-white">
          Add volunteer need post
        </h1>
        <div className="card-body">
          <form onSubmit={handleAddVolunteer}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5">
              {/*  Thumbnail */}
              <fieldset className="fieldset ">
                <label className="text-[.885rem] font-semibold dark:text-white">
                  Thumbnail
                </label>
                <input
                  type="url"
                  name="thumbnail"
                  placeholder="Thumbnail URL"
                  className="input bg-transparent dark:bg-gray-900 dark:text-white w-full rounded-md border-1 border-gray-400 focus:outline-none focus:border-2 focus:border-secondary"
                  required
                />
              </fieldset>
              {/* Post title */}
              <fieldset className="fieldset ">
                <label className="text-[.885rem] font-semibold dark:text-white">
                  Post Title
                </label>
                <input
                  name="title"
                  type="title"
                  className="input bg-transparent dark:bg-gray-900 dark:text-white rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full"
                  placeholder="Post Title"
                  required
                />
              </fieldset>
            </div>
            {/* description */}
            <fieldset className="fieldset ">
              <label className=" text-[.885rem] font-semibold dark:text-white">
                Description
              </label>
              <textarea
                name="description"
                className="textarea bg-transparent dark:bg-gray-900 dark:text-white rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full"
                placeholder="Describe what needs to be done"
                required
              />
            </fieldset>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5">
              {/* Category */}
              <fieldset className="fieldset ">
                <label className=" text-[.885rem] font-semibold dark:text-white">
                  Category
                </label>
                <select
                  name="category"
                  className="select bg-transparent dark:bg-gray-900 dark:text-white rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="social-service">Social Service</option>
                  <option value="animal-welfare">Animal Welfare</option>
                </select>
              </fieldset>
              {/* Location */}
              <fieldset className="fieldset ">
                <label className=" text-[.885rem] font-semibold dark:text-white">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="input bg-transparent dark:bg-gray-900 dark:text-white rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full"
                  required
                />
              </fieldset>
              {/* No. of volunteers needed */}
              <fieldset className="fieldset ">
                <label className=" text-[.885rem] font-semibold dark:text-white">
                  No. of volunteers needed
                </label>
                <input
                  type="number"
                  min={1}
                  name="volunteersNeeded"
                  placeholder="No. of Volunteers Needed"
                  className="input bg-transparent dark:bg-gray-900 dark:text-white rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full"
                />
              </fieldset>
              {/* deadline */}
              <fieldset className="fieldset ">
                <label className=" text-[.885rem] font-semibold dark:text-white">
                  Deadline
                </label>
                <DatePicker
                  name="deadline"
                  selected={deadline}
                  onChange={(date) => setDeadline(date)}
                  className="input bg-transparent dark:bg-gray-900 dark:text-white rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full"
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                />
              </fieldset>

              {/* User Name */}
              <fieldset className="fieldset ">
                <label className=" text-[.885rem] font-semibold dark:text-white">
                  Organizer Name
                </label>
                <input
                  type="text"
                  name="OrganizerName"
                  value={user?.displayName || ""}
                  readOnly
                  className="input bg-transparent dark:bg-gray-900 dark:text-white rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full  cursor-not-allowed"
                />
              </fieldset>
              {/* User Email */}
              <fieldset className="fieldset ">
                <label className=" text-[.885rem] font-semibold dark:text-white">
                  Organizer Email
                </label>
                <input
                  type="email"
                  name="OrganizerEmail"
                  value={user?.email || ""}
                  readOnly
                  className="input bg-transparent dark:bg-gray-900 dark:text-white rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full  cursor-not-allowed"
                />
              </fieldset>
            </div>
            <div className="card-actions pt-5">
              <button className="btn bg-primary hover:bg-secondary  text-white dark:bg-transparent  w-full">
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVolunteer;
