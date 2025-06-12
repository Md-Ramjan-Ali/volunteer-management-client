import React, { use } from 'react';
import { Link } from 'react-router';

const MyPostNeedCard = ({ volunteerCreatedByPromised }) => {
  const myVolunteerPost=use(volunteerCreatedByPromised)


  const handleDelete=(id)=>{
    console.log(id);

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
                  <Link to={`/updateVolunteerPost/${volunteer._id}`}>
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