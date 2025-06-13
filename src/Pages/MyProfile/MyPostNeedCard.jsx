import React, { use, useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyPostNeedCard = ({ volunteerCreatedByPromised }) => {
  const myVolunteerPost=use(volunteerCreatedByPromised)
  const [myVolunteer,setMyVolunteer]=useState(myVolunteerPost)


  const handleDelete=(id)=>{
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
                text: "Your task has been deleted.",
                icon: "success",
              });
            }
          });

        const remainingTask = myVolunteer.filter((vol) => vol._id !== id);
        setMyVolunteer(remainingTask);
      }
    });

  }
  
  return (
    <div>
      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-gray-100 text-left text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-4 py-3">Thumbnail</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Deadline</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {myVolunteerPost.map((volunteer) => (
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
                    <button className="btn btn-sm btn-outline btn-info mr-2">
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