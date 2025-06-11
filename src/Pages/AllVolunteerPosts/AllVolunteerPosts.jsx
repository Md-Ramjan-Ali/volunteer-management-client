import axios from "axios";
import React, { useEffect, useState } from "react";
import AllVolunteerCard from "./AllVolunteerCard";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { MdTableRows } from "react-icons/md";
import AllVolunteerTable from "./AllVolunteerTable";

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
      <h1 className="text-2xl font-semibold text-center mt-15 mb-5">
        All Volunteer Post
      </h1>
      <div className="flex gap-10 bg-base-100  p-2 rounded-md my-10">
        <div className="md:flex-1">
          <input
            type="text"
            placeholder="Search by title..."
            className="input border-1 focus:outline-0 w-full rounded-2xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-5 w-full max-w-[260px]">
          <button
            onClick={() => setLayout("table")}
            className={`${
              layout === "table" ? "text-green-500" : "text-black"
            }`}
            title="Table View"
          >
            <MdTableRows size={28} className="" />
          </button>
          <button
            onClick={() => setLayout("grid")}
            className={`${layout === "grid" ? "text-green-500" : "text-black"}`}
            title="Grid View"
          >
            <RiLayoutGrid2Fill size={28} className="" />
          </button>
        </div>
      </div>

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
