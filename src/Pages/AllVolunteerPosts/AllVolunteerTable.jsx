import React from "react";
import { Link } from "react-router";


const AllVolunteerTable = ({ allVolunteerPosts }) => {
  return (
    <div className="overflow-x-auto rounded-xl shadow-md px-1">
      <table className="min-w-full table-auto border border-gray-300">
        <thead className="bg-gray-100 text-left text-gray-700 text-sm uppercase">
          <tr data-aos="zoom-in" data-aos-easing="linear">
            <th className="px-4 py-3">Thumbnail</th>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Deadline</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {allVolunteerPosts.map((volunteer) => (
            <tr
              data-aos="zoom-in"
              data-aos-easing="linear"
              key={volunteer._id}
              className="border-t hover:bg-gray-800 transition"
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
              <td className="px-4 py-3 text-secondary">{volunteer.deadline}</td>
              <td className="px-4 py-3">
                <Link to={`/volunteerDetails/${volunteer._id}`}>
                  <button className="btn btn-sm bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition">
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllVolunteerTable;
