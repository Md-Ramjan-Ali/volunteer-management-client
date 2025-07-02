import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const BecomeVolunteer = () => {
  return (
    <section className=" px-2 lg:px-0 bg-gray-50 dark:bg-gray-900 py-10 mt-15">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <p className="text-secondary font-semibold text-sm mb-2 uppercase tracking-wider">
            Join the Mission
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
            Become a Volunteer <br />
            and Make a Real Difference
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            Lend your time, skills, and heart to causes that matter. As a
            volunteer, you'll be part of a compassionate network bringing hope
            and change to communities in need.
          </p>
          <Link to="allVolunteerPosts">
            <button className="bg-primary hover:bg-secondary transition text-white px-6 py-3 rounded-md font-medium shadow-lg cursor-pointer">
              Get Involved →
            </button>
          </Link>
          <p className="text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wide mt-4">
            Sign up for impactful volunteer opportunities today.
          </p>
        </motion.div>

        {/* Right Side Video Embed */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <div className="relative w-full h-64 md:h-80">
            <video
              controls
              className="w-full h-full object-cover rounded-xl"
              poster="/volunteer-video-thumbnail.jpg"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BecomeVolunteer;
