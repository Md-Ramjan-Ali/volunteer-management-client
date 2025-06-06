import React from "react";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <div>
      <Helmet>
        <title>Privacy | SebaConnect</title>
      </Helmet>
      <div className="max-w-4xl mx-auto mt-20 px-3 lg:px-0">
        <h2 className="text-3xl font-bold text-green-500 mb-4 text-center md:text-left">
          Privacy Policy
        </h2>
        <p className="text-lg mb-6">
          At Event Explore, we respect your privacy. This policy outlines what
          data we collect and how we use it.
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            We collect basic information such as name, email, and profile
            picture during registration.
          </li>
          <li>Your data is stored securely using Firebase Authentication.</li>
          <li>
            We do not sell or share your personal information with third
            parties.
          </li>
          <li>We use cookies to enhance your user experience and analytics.</li>
          <li>
            You have the right to request deletion of your account and data at
            any time.
          </li>
        </ul>
        <p className="mt-6 text-base">
          For any privacy-related concerns, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
