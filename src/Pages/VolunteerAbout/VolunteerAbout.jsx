import React from "react";
import img from "../../assets/aboutUs.jpg";
import { MdCheckCircle } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-router";

const VolunteerAbout = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-30 px-2 lg:px-0">
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 items-center">
        {/* left Side Image with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
        >
          <img
            src={img}
            alt="Volunteers helping community"
            className="w-full h-[28rem] md:h-[80vh] object-cover rounded-xl shadow-lg"
          />
        </motion.div>
        {/* right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
          className="space-y-8"
        >
          <p
            style={{ letterSpacing: "5px" }}
            className="text-sm text-secondary font-semibold dark:text-white uppercase"
          >
            About Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            <span>Driven by </span>
            <span className="text-secondary dark:text-white">
              <Typewriter
                words={["Compassion", "Unity", "Dedication", "Kindness"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={30}
                delaySpeed={1000}
              />
            </span>
            <br />
            Powered by People
          </h2>

          <Link to="/about">
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition mb-5 cursor-pointer">
              Learn More
            </button>
          </Link>

          <p className="text-gray-700 dark:text-gray-300">
            At{" "}
            <strong className="text-secondary dark:text-white">
              Volunteer Connect
            </strong>
            , we believe every act of kindness has the power to create change.
            We connect volunteers with causes they care about and enable
            communities to grow stronger together.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Whether you're driven by education, healthcare, environment, or
            social welfare — our platform makes it easy to take action where it
            matters most.
          </p>

          {/* What We Do */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              What We Do
            </h3>
            <div className="grid grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
              {[
                "Community Support",
                "Hunger Relief",
                "Education & Mentorship",
                "Healthcare Assistance",
                "Environmental Cleanup",
                "Animal Welfare",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2"
                  data-aos="fade-left"
                >
                  <MdCheckCircle className="text-secondary dark:text-white" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerAbout;
