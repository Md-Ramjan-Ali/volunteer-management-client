import React, { useState } from "react";
import useAuth from "../../Components/Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddVolunteer = () => {
  const [deadline, setDeadline] = useState(new Date());
  const { user } = useAuth();

  const handleAddVolunteer=e=>{
    e.preventDefault()
  }

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
                  className="input input-bordered w-full"
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
                  type="text"
                  className="input input-bordered w-full"
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
                className="textarea textarea-bordered w-full"
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
                  className="select select-bordered w-full"
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
                  className="input input-bordered w-full"
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
                  name="volunteersNeeded"
                  placeholder="No. of Volunteers Needed"
                  className="input input-bordered w-full"
                  required
                />
              </fieldset>
              {/* deadline */}
              <fieldset className="fieldset ">
                <label className=" text-[.885rem] font-semibold">
                  Deadline
                </label>
                <DatePicker
                  selected={deadline}
                  onChange={(date) => setDeadline(date)}
                  className="input input-bordered w-full"
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                />
              </fieldset>
              {/* User Email */}
              <fieldset className="fieldset ">
                <label className=" text-[.885rem] font-semibold">
                  User Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  readOnly
                  className="input input-bordered w-full  cursor-not-allowed"
                />
              </fieldset>

              {/* User Name */}
              <fieldset className="fieldset ">
                <label className=" text-[.885rem] font-semibold">
                  User Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.displayName}
                  readOnly
                  className="input input-bordered w-full  cursor-not-allowed"
                />
              </fieldset>
            </div>
            <div className="card-actions pt-5">
              <button className="btn bg-green-500 hover:bg-green-700 text-white  w-full">
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVolunteer;
