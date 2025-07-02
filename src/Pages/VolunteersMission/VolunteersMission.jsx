import React from "react";
import img1 from "../../assets/volunteer.jpg";
import img2 from "../../assets/missionImg.jpg";
import img3 from "../../assets/missionImg3.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const VolunteersMission = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 md:px-6 pb-20">
      {/* Title Section */}
      <div className="text-center mb-16">
        <p
          style={{ letterSpacing: "5px" }}
          className="text-[1rem] tracking-widest text-secondary uppercase mb-2"
        >
          Our Mission
        </p>

        <h2 className="text-3xl md:text-5xl font-semibold text-gray-600 dark:text-white leading-snug mb-4">
          Caring Hearts, Stronger
          <br />
          Communities
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-base">
          At Volunteer Connect, we unite people with passion and purpose to make
          a real difference.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          className="bg-primary text-gray-600 p-6 rounded-xl shadow-lg w-full min-h-[300px] flex flex-col justify-between cursor-pointer"
        >
          <div>
            <p className="text-sm mb-1">01.</p>
            <h3 className="text-2xl font-semibold mb-3">
              Creating Smiles, Changing Worlds
            </h3>
          </div>
          <p className="text-sm">
            We connect individuals with causes that matter — allowing
            communities to grow through collective action and support.
          </p>
        </motion.div>

        {/* Image 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          className="overflow-hidden rounded-xl w-full h-[250px] md:h-[300px] lg:h-[350px] cursor-pointer"
        >
          <img
            src={img1}
            alt="Volunteering Image"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: false }}
          className="bg-primary text-gray-600 p-6 rounded-xl shadow-lg w-full min-h-[300px] flex flex-col justify-between cursor-pointer"
        >
          <div>
            <p className="text-sm mb-1">02.</p>
            <h3 className="text-2xl font-semibold mb-3">
              Acts of Kindness, Seeds of Change
            </h3>
          </div>
          <p className="text-sm">
            Our platform makes it easy for people to serve where they're needed
            most—one act of kindness at a time.
          </p>
        </motion.div>

        {/* Image 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          className="overflow-hidden rounded-xl h-[250px] md:h-[300px] lg:h-[350px] w-full cursor-pointer"
        >
          <img
            src={img2}
            alt="Helping Others"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          className="bg-primary text-gray-600 p-6 rounded-xl shadow-lg w-full min-h-[300px] flex flex-col justify-between cursor-pointer"
        >
          <div className="">
            <p className="text-sm mb-1">03.</p>
            <h3 className="text-2xl font-semibold mb-3">
              Spreading Joy, Changing Lives
            </h3>
          </div>
          <p className="text-sm">
            By bridging volunteers and nonprofits, we're fostering lasting
            impact through skills, support, and shared values.
          </p>
        </motion.div>

        {/* Image 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          className="overflow-hidden rounded-xl w-full h-[250px] md:h-[300px] lg:h-[350px] cursor-pointer"
        >
          <img
            src={img3}
            alt="Volunteers In Action"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteersMission;
