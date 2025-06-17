import React, { use, useState } from "react";
import Swal from "sweetalert2";
import EmptyVolunteerRequests from "./EmptyVolunteerRequests";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";

const MyRequestList = ({ volunteerRequestByPromised }) => {
  const requestData = use(volunteerRequestByPromised);
  const [requests, setRequests] = useState(requestData || []);
  const axiosSecure = useAxiosSecure();

  // Cancel request
  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to cancel this volunteer request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Cancel it!",
      cancelButtonText: "No, Keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/volunteers/requests/${id}`)
          .then((res) => {
            if (res.data?.deleted?.deletedCount > 0) {
              setRequests((prev) => prev.filter((data) => data._id !== id));
              Swal.fire({
                title: "Cancelled!",
                text: "Your volunteer request has been cancelled.",
                icon: "success",
              });
            } else {
              Swal.fire("Failed", "Unable to cancel the request.", "error");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  if (requests.length === 0) {
    return <EmptyVolunteerRequests></EmptyVolunteerRequests>;
  }
  return (
    <div>
      <Helmet>
        <title>Request Post | SebaConnect</title>
      </Helmet>
      <div className="overflow-x-auto rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">
          My Volunteer Request Posts
        </h2>
        <table className="table w-full text-sm">
          <thead className="bg-gray-100 dark:bg-gray-600 dark:text-white text-black">
            <tr>
              <th className="p-3 text-left">Thumbnail</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Deadline</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr
                key={req._id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-white"
              >
                <td className="p-3">
                  <img
                    src={req.thumbnail}
                    alt={req.title}
                    className="w-20 h-12 object-center rounded-md"
                  />
                </td>
                <td className="p-3">{req.title}</td>
                <td className="p-3 capitalize">{req.category}</td>
                <td className="p-3">{req.deadline}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      req.status === "requested"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {req.status}
                  </span>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => handleCancel(req._id)}
                    className="btn btn-sm btn-error text-white"
                  >
                    Cancel
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

export default MyRequestList;
