import React from 'react';
import { FaTasks } from 'react-icons/fa';
import { Link } from 'react-router';

const EmptyTask = () => {
  return (
    <div className="max-w-screen-xl mx-auto min-h-[60vh] flex items-center justify-center px-4">
      <div className="card w-full md:w-2/3 lg:w-1/2 bg-base-100 shadow-md text-center">
        <div className="card-body items-center">
          <FaTasks className="text-6xl text-orange-500 mb-4 " />
          <h2 className="text-2xl font-semibold">No Tasks Available</h2>
          <p className=" mt-2">
            You haven't added any tasks yet. Start by adding your first task and
            let freelancers help you get it done!
          </p>
          <div className="card-actions mt-4">
            <Link to="/addtask">
              <button className="btn bg-green-500 hover:bg-green-600 text-white">
                Add Task Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyTask;