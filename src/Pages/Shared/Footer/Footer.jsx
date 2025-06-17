import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";
import FooterLogo from "../../../assets/volunteer-logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1f2937] text-white pt-10 mt-20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5 lg:px-0">
          {/* Left: Text and Image */}
          <div>
            <div className="text-center md:text-left space-y-6 mb-10">
              <Link to="/" className="flex gap-1 items-center cursor-pointer">
                <img className="w-16" src={FooterLogo} alt="" />
                <h2 className=" text-2xl font-bold ">
                  <span className="text-primary">Seba</span>
                  <span className="text-secondary dark:text-white">
                    Connect
                  </span>
                </h2>
              </Link>
              <p className="mt-2 text-gray-300 max-w-sm">
                A volunteer management system is a platform that helps
                organizations recruit, schedule, and track volunteers
                efficiently. It streamlines communication, event coordination,
                and performance tracking to enhance volunteer engagement and
                impact.
              </p>
            </div>
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
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div className="space-y-5 text-gray-300">
              <div className="flex items-start gap-3">
                <FaHome className="text-xl mt-1" />
                <p>
                  Volunteer for Bangladesh, House 57, <br />
                  Road 7B, Block H, Banani, 1213, Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-xl" />
                <p>mrramjankhan100@gmail.com</p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-xl" />
                <p>+88 01928-294516</p>
              </div>
            </div>
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

        {/* Bottom Line */}
        <div className="bg-[#111827] text-gray-500 text-center mt-5 py-5">
          © {new Date().getFullYear()} SebaConnect | Volunteer Platform. All
          rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
