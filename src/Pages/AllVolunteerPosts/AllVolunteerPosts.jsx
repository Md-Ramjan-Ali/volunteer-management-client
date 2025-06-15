import axios from "axios";
import React, { useEffect, useState } from "react";
import AllVolunteerCard from "./AllVolunteerCard";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { MdTableRows } from "react-icons/md";
import AllVolunteerTable from "./AllVolunteerTable";
import { HiUserGroup } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";


const AllVolunteerPosts = () => {

  const [allVolunteerPosts, setAllVolunteerPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [layout, setLayout] = useState("grid");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/volunteers?search=${searchTerm}`)
      .then((res) => setAllVolunteerPosts(res.data))
      .catch((error) => console.log(error));
  }, [searchTerm]);

  return (
    <div className="max-w-screen-xl mx-auto my-5">
      <div className="flex gap-5 items-center  p-2 rounded-md my-10">
        <div className="flex gap-2 items-center">
          <HiUserGroup className="text-2xl md:text-4xl text-primary dark:text-white" />
          <h1 className="text-xl md:text-2xl font-semibold text-center text-secondary dark:text-white">
            All Volunteer
          </h1>
        </div>
        <div className="flex-1 md:px-32 relative">
          <input
            type="text"
            placeholder="Search by title..."
            className="input border-1 focus:outline-0 w-full rounded-2xl  pl-10 dark:bg-gray-900 dark:border-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-4 md:pl-32 top-1/2 transform -translate-y-1/2 text-xl z-20">
            <CiSearch />
          </span>
        </div>
        <div className="flex justify-end gap-5 ">
          {/* btn table and grid */}
          <button
            onClick={() => setLayout("table")}
            className={`${layout === "table" ? "text-primary" : "text-black dark:text-white"}`}
            title="Table View"
          >
            <MdTableRows size={28} className="cursor-pointer" />
          </button>
          <button
            onClick={() => setLayout("grid")}
            className={`${layout === "grid" ? "text-primary" : "text-black dark:text-white"}`}
            title="Grid View"
          >
            <RiLayoutGrid2Fill size={28} className="cursor-pointer" />
          </button>
        </div>
      </div>

      {/* All Volunteer Content */}
      <div className="">
        {layout === "grid" ? (
          <AllVolunteerCard
            allVolunteerPosts={allVolunteerPosts}
          ></AllVolunteerCard>
        ) : (
          <AllVolunteerTable
            allVolunteerPosts={allVolunteerPosts}
          ></AllVolunteerTable>
        )}
      </div>
    </div>
  );
};

export default AllVolunteerPosts;
