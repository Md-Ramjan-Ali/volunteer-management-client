import React from "react";
import {
  FaPaw,
  FaLeaf,
  FaBook,
  FaHeartbeat,
  FaUsers,
  FaHandsHelping,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaPaw className="text-4xl text-secondary  dark:text-white " />,
    title: "Animal Welfare",
    description: "Care for stray animals and support local shelters.",
  },
  {
    icon: <FaLeaf className="text-4xl text-secondary  dark:text-white" />,
    title: "Environmental Cleanup",
    description: "Join efforts to keep our environment clean and green.",
  },
  {
    icon: <FaBook className="text-4xl text-secondary  dark:text-white" />,
    title: "Education & Mentorship",
    description: "Empower youth through education and mentorship.",
  },
  {
    icon: <FaHeartbeat className="text-4xl text-secondary  dark:text-white" />,
    title: "Health & Wellness",
    description: "Promote healthy living and support community health.",
  },
  {
    icon: <FaUsers className="text-4xl text-secondary  dark:text-white" />,
    title: "Elderly Support",
    description: "Lend a hand to elderly in your neighborhood.",
  },
  {
    icon: <FaHandsHelping className="text-4xl text-secondary  dark:text-white" />,
    title: "Event Organization",
    description: "Help organize meaningful community events.",
  },
];

const PopularVolunteers = () => {
  return (
    <section className="my-20 px-4 max-w-7xl mx-auto text-gray-700 dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-secondary dark:text-white">
        Explore Popular Causes
      </h2>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Find opportunities that match your passion. Whether it's helping the
        environment or supporting education, there's a place for you.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="rounded-xl p-6 text-center shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="flex justify-center items-center">{cat.icon}</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">{cat.title}</h3>
            <p className=" text-sm">{cat.description}</p>
          
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularVolunteers;
