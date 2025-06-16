import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";

const UpdateMyPost = () => {
  const { id } = useParams();
  const [volunteer, setVolunteer] = useState(null);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [deadline, setDeadline] = useState(new Date(null));

  useEffect(() => {
    axiosSecure
      .get(`/volunteers/${id}`)
      .then((res) => {
        setVolunteer(res.data);
        if (res.data?.deadline) {
          setDeadline(new Date(res.data.deadline));
        }
      })
      .catch((error) => {
        console.error( error);
      });
  }, [id, axiosSecure]);

  const handleUpdateVolunteer = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updateVolunteer = Object.fromEntries(formData.entries());

    axiosSecure
      .put(`/volunteers/${volunteer._id}`, updateVolunteer)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Update Volunteer Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        setTimeout(() => {
          navigate("/myPost");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (!volunteer) {
    return <Loading></Loading>;
  }
  return (
    <div className="max-w-screen-xl mx-auto my-5">
      <div className="card bg-base-100 w-full shadow-sm">
        <h1 className="text-center text-2xl font-bold pt-5">
          Update volunteer need post
        </h1>
        <div className="card-body">
          <form onSubmit={handleUpdateVolunteer}>
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
                  className="input w-full rounded-md border-1 border-gray-400 focus:outline-none focus:border-2 focus:border-secondary "
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
                  defaultValue={volunteer.title}
                  type="text"
                  className="input rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full "
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
                defaultValue={volunteer.description}
                className="textarea rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full "
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
                  defaultValue={volunteer.category}
                  className="select rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full "
                  required
                >
                  <option defaultValue="">Select Category</option>
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
                  defaultValue={volunteer.location}
                  placeholder="Location"
                  className="input rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full "
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
                  defaultValue={volunteer.volunteersNeeded}
                  placeholder="No. of Volunteers Needed"
                  className="input rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full "
                  required
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
                  defaultValue={volunteer.OrganizerName}
                  readOnly
                  className="input rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full cursor-not-allowed "
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
                  className="input rounded-md border-1 focus:border-2 border-gray-400 focus:outline-none focus:border-secondary w-full  cursor-not-allowed"
                />
              </fieldset>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="btn bg-primary hover:bg-secondary  text-white  w-full"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMyPost;
