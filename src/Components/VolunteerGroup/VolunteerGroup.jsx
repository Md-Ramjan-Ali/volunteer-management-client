import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaGooglePlus,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import img1 from "../../assets/team-1.jpg"
import img2 from "../../assets/team-2.jpg"
import img3 from "../../assets/team-3.jpg"
import img4 from "../../assets/team-4.jpg"

const volunteers = [
  {
    name: "Jonathan Doe",
    mobile: "+49 123 456 789",
    email: "johndoe@email.com",
    image: img1,
  },
  {
    name: "George Bell",
    mobile: "+49 123 456 789",
    email: "johndoe@email.com",
    image: img2,
  },
  {
    name: "Laura Fenty",
    mobile: "+49 123 456 789",
    email: "johndoe@email.com",
    image: img3,
  },
  {
    name: "Cameron Poll",
    mobile: "+49 123 456 789",
    email: "johndoe@email.com",
    image: img4,
  },
];

const VolunteerGroup = () => {
  return (
    <section className="py-10">
      <div className="max-w-screen-xl mx-auto px-3">
        <h2 className="text-2xl mb-8 border-b-1 pb-5 text-secondary dark:text-white">
          Our group of <span className="font-semibold">volunteers</span>
        </h2>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {volunteers.map((v, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden dark:border-1 border-gray-200 dark:border-gray-700 "
              data-aos="zoom-in"
              data-aos-easing="linear"
            >
              <img
                src={v.image}
                alt={v.name}
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold mb-2">{v.name}</h3>
                <p className="flex items-center justify-center text-gray-600 dark:text-white text-sm mb-1">
                  <FaPhone className="mr-2 text-primary" />
                  <span className="font-semibold">Mobile:</span>&nbsp;{v.mobile}
                </p>
                <p className="flex items-center justify-center text-gray-600 dark:text-white text-sm mb-3">
                  <FaEnvelope className="mr-2 text-primary" />
                  <span className="font-semibold">E-Mail:</span>&nbsp;{v.email}
                </p>
                <div className="flex justify-center space-x-4 text-gray-500 dark:text-white text-lg">
                  <a href="#">
                    <FaFacebook />
                  </a>
                  <a href="#">
                    <FaGooglePlus />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerGroup;
