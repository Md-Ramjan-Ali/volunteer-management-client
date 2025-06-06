import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";
import FooterLogo from "../../assets/logo.png";

const Footer = () => {
  const handleMassege = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const contactMessage = Object.fromEntries(formData.entries());
    console.log(contactMessage);
    e.target.reset();
  };
  return (
    <div>
      <footer className="bg-[#1e293b] text-white py-10 mt-20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {/* Left: Text and Image */}
          <div
         
          >
            <div className="text-center md:text-left space-y-6 mb-10">
              <Link to="/" className="flex gap-1 items-center cursor-pointer">
                <img className="w-16" src={FooterLogo} alt="" />
                <h2 className=" text-2xl font-bold ">
                  <span className="text-green-500">Job</span>Pond
                </h2>
              </Link>
              <p className="mt-2 text-gray-400 max-w-sm">
                A freelancer marketplace is an online platform where clients can
                post tasks or projects and hire skilled freelancers to complete
                them.
              </p>
            </div>

            <div className="space-y-10">
              <div className="">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Important Info
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link to="/terms" className="hover:text-white">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Follow Us
                </h3>
                <div className="flex gap-4 text-gray-300 text-lg">
                  <a
                    href="https://www.facebook.com/share/15NASC5RNv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://x.com/saiful2829"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.instagram.com/ra_mjan8549/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="www.linkedin.com/in/md-ramjan-ali-1bb369324"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form
            onSubmit={handleMassege}
            className="space-y-6"
          
          >
            <h2 className="text-2xl font-bold">Contact With Us</h2>
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Full name
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-3 rounded-md bg-[#1e293b] border border-gray-500 focus:outline-none focus:border-purple-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 rounded-md bg-[#1e293b] border border-gray-500 focus:outline-none focus:border-purple-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Message
              </label>
              <textarea
                rows="4"
                name="text"
                className="w-full p-3 rounded-md bg-[#1e293b] border border-gray-500 focus:outline-none focus:border-purple-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-gray-500 text-sm mt-8 border-t pt-4 border-gray-700">
          © {new Date().getFullYear()} Event Explorer. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
