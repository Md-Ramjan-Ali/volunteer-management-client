import axios from 'axios';
import React, { use, useState } from 'react';
import Swal from 'sweetalert2';

const MyRequestList = ({ volunteerRequestByPromised }) => {
  const requestData = use(volunteerRequestByPromised);
  const [requests, setRequests] = useState(requestData || []);

  // Cancel request
  const handleCancel = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to cancel this volunteer request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Cancel it!",
      cancelButtonText: "No, Keep it",
    }).then((result) => {
    
      if (result.isConfirmed) {
       
        axios.patch(`http://localhost:5000/volunteers/increment/${id}`).then(res=>{
          if(res.data.modifiedCount){
            console.log(res.data);
          }
        }).catch(error=>{
          console.log(error);
        });

        axios
          .delete(`http://localhost:5000/volunteers/requests/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              setRequests((prev) => prev.filter((r) => r._id != id));
              Swal.fire(
                "Cancelled!",
                "Your volunteer request has been cancelled.",
                "success"
              );
            }
          })
          .catch((error) => {
            console.error("Error canceling request:", error);
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto rounded-lg">
        <table className="table w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
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
              <tr key={req._id} className="hover:bg-gray-50">
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