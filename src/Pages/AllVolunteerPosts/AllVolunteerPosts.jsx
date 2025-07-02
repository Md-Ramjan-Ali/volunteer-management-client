import axios from "axios";
import React, { useEffect, useState } from "react";
import AllVolunteerCard from "./AllVolunteerCard";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { MdTableRows } from "react-icons/md";
import AllVolunteerTable from "./AllVolunteerTable";
import { HiUserGroup } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import Loading from "../../Components/Loading/Loading";
import { Helmet } from "react-helmet-async";
import EmtyAllVolunteerPost from "./EmtyAllVolunteerPost";

const AllVolunteerPosts = () => {
  const [loading, setLoading] = useState(true);
  const [allVolunteerPosts, setAllVolunteerPosts] = useState([]);
  const [layout, setLayout] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams();

    if (searchTerm) queryParams.append("search", searchTerm);
    if (sortOrder) queryParams.append("sort", sortOrder);
    if (filterCategory) queryParams.append("category", filterCategory);

    axios
      .get(
        `https://volunteer-management-server-side-five.vercel.app/volunteers?${queryParams.toString()}`
      )
      .then((result) => {
        setAllVolunteerPosts(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchTerm, sortOrder, filterCategory]);

  if (loading) {
    return <Loading></Loading>;
  }
  if (allVolunteerPosts.length === 0) {
    return <EmtyAllVolunteerPost></EmtyAllVolunteerPost>;
  }

  return (
    <div className="w-11/12 mx-auto py-5">
      <Helmet>
        <title>All Post | SebaConnect</title>
      </Helmet>
      <div className="flex gap-5 items-center justify-between p-2 rounded-md">
        {/* Filter & Sort deadline and search */}
        <div className="flex-1 flex flex-col md:flex-row justify-between items-center gap-4 px-5 py-10 ">
          <div className="">
            <select
              className="select select-bordered focus:outline-0 dark:bg-gray-800 dark:text-white"
              onChange={(e) => setFilterCategory(e.target.value)}
              value={filterCategory}
            >
              <option value="">All Categories</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="social service">Social Service</option>
              <option value="animal welfare">Animal Welfare</option>
            </select>
          </div>

          {/* search option */}
          <div className="flex-1 w-full relative">
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" input input-bordered focus:outline-0 rounded-full w-full pl-10 dark:bg-gray-800 dark:text-white dark:border-2 dark:border-white py-6"
            />
            <span className="absolute left-4  top-1/2 transform -translate-y-1/2 text-xl z-20">
              <CiSearch />
            </span>
            <select
              className=" absolute right-2 dark:bg-gray-800 dark:text-white select border-0 focus:outline-0 bg-transparent focus:bg-transparent rounded-full w-fit z-50 focus:shadow-0 my-1"
              onChange={(e) => setSortOrder(e.target.value)}
              value={sortOrder}
            >
              <option className="text-black" value="">
                Sort by Date
              </option>
              <option className="text-black" value="desc">
                Newest to Oldest
              </option>
              <option className="text-black" value="asc">
                Oldest to Newest
              </option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-5 ">
          {/* btn table and grid */}
          <button
            onClick={() => setLayout("table")}
            className={`${
              layout === "table" ? "text-primary" : "text-black dark:text-white"
            }`}
            title="Table View"
          >
            <MdTableRows size={28} className="cursor-pointer" />
          </button>
          <button
            onClick={() => setLayout("grid")}
            className={`${
              layout === "grid" ? "text-primary" : "text-black dark:text-white"
            }`}
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
