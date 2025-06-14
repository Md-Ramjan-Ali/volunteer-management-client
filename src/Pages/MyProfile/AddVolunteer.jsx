import React, { useState } from "react";
import useAuth from "../../Components/Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";

const AddVolunteer = () => {
  const [deadline, setDeadline] = useState(new Date());
  const { user } = useAuth();

  const handleAddVolunteer = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const volunteerData = Object.fromEntries(formData.entries());

    axios
      .post("http://localhost:5000/volunteers", volunteerData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Add Volunteer Post successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    form.reset();
    console.log(volunteerData);
  };

  return (
    <div className="max-w-screen-xl mx-auto my-5">
      <div className="card bg-base-100 w-full shadow-sm">
        <h1 className="text-center text-2xl font-bold pt-5">
          Add volunteer need post
        </h1>
        <div className="card-body">
          <form onSubmit={handleAddVolunteer}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5">
              {/*  Thumbnail */}
              <fieldset className="fieldset ">
                <label className="text-[.885rem] font-semibold">
                  Thumbnail
                </label>
                <input
                  type="url"
                  name="thumbnail"
                  placeholder="Thumbnail URL"
                  className="input w-full rounded-md border-1 border-gray-400 focus:outline-none focus:border-2 focus:border-secondary"
                  required
                />
              </fieldset>
              {/* Post title */}
              <fieldset className="fieldset ">
                <label className="text-[.885rem] font-semibold">
                  Post Title
                </label>
                <input
                  name="title"
                  type="title"
                  className="input rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full"
                  placeholder="Post Title"
                  required
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
                className="textarea rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full"
                placeholder="Describe what needs to be done"
                required
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
                  className="select rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full"
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
                <label className=" text-[.885rem] font-semibold">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="input rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full"
                  required
                />
              </fieldset>
              {/* No. of volunteers needed */}
              <fieldset className="fieldset ">
                <label className=" text-[.885rem] font-semibold">
                  No. of volunteers needed
                </label>
                <input
                  type="number"
                  min={0}
                  name="volunteersNeeded"
                  placeholder="No. of Volunteers Needed"
                  className="input rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full"
                />
              </fieldset>
              {/* deadline */}
              <fieldset className="fieldset ">
                <label className=" text-[.885rem] font-semibold">
                  Deadline
                </label>
                <DatePicker
                  name="deadline"
                  selected={deadline}
                  onChange={(date) => setDeadline(date)}
                  className="input rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full"
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
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
                  value={user?.displayName || ""}
                  readOnly
                  className="input rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full  cursor-not-allowed"
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
                  value={user?.email || ""}
                  readOnly
                  className="input rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full  cursor-not-allowed"
                />
              </fieldset>
            </div>
            <div className="card-actions pt-5">
              <button className="btn bg-primary hover:bg-secondary  text-white  w-full">
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
