import React from "react";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto text-gray-800 dark:bg-gray-900 dark:text-white space-y-8 py-10">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
          Who We Are & What Drives Us
        </h2>
        <p className="text-lg leading-relaxed font-medium text-gray-700 dark:text-gray-300">
          <strong>Volunteer Connect</strong> is a dedicated platform that
          bridges the gap between passionate volunteers and meaningful community
          campaigns. Whether you're looking to contribute your time, skills, or
          heart — Volunteer Connect helps you make a difference.
        </p>

        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400 mt-4">
          Our mission is to empower individuals and organizations to come
          together for positive impact. From disaster relief to local education
          initiatives, we provide tools to easily post, join, and manage
          volunteer opportunities with clarity and trust.
        </p>

        <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400 mt-4">
          We believe in the power of community, compassion, and collective
          action. At Volunteer Connect, every helping hand counts — whether
          you're an experienced volunteer or just getting started.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-secondary mb-3">
          Why Volunteer Connect?
        </h3>
        <ul className="space-y-2 pl-5 text-base list-disc text-gray-700 dark:text-gray-300">
          <li> Discover volunteer campaigns that match your passion</li>
          <li> Join trusted causes with real community impact</li>
          <li> Easily track your activities and involvement</li>
          <li> Secure login, protected routes, and smooth experience</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
