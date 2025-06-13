import React, { use, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import EmptyMyVolunteerPosts from "./EmptyMyVolunteerPosts";

const MyPostNeedCard = ({ volunteerCreatedByPromised }) => {
  const initialMyVolunteerPost = use(volunteerCreatedByPromised);
  const [myVolunteer, setMyVolunteer] = useState(initialMyVolunteerPost);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/volunteers/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Volunteer has been deleted.",
                icon: "success",
              });
            }
          });

        const remainingVolunteer = myVolunteer.filter((vol) => vol._id !== id);
        setMyVolunteer(remainingVolunteer);
      }
    });
  };

  if (myVolunteer.length === 0) {
    return <EmptyMyVolunteerPosts></EmptyMyVolunteerPosts>;
  }

  return (
    <div>
      <div className="overflow-x-auto rounded-xl">
        <h2 className="text-xl font-semibold mb-4 text-center">
          My Volunteer Need Posts
        </h2>
        <table className="table w-full text-sm ">
          <thead className="bg-gray-100 text-black text-left text-sm uppercase">
            <tr>
              <th className="px-4 py-3">Thumbnail</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Deadline</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {myVolunteer.map((volunteer) => (
              <tr
                key={volunteer._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">
                  <img
                    src={volunteer.thumbnail}
                    alt={volunteer.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="px-4 py-3 font-medium">{volunteer.title}</td>
                <td className="px-4 py-3">{volunteer.category}</td>
                <td className="px-4 py-3 text-red-500">{volunteer.deadline}</td>
                <td>
                  <Link to={`/updateMyPost/${volunteer._id}`}>
                    <button className="btn btn-sm btn-outline btn-info mr-3">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(volunteer._id)}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostNeedCard;
