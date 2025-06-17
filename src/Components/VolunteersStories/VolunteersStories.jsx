import React from "react";
import image1 from '../../assets/ramjan.png'
import image2 from '../../assets/slider44.jpg'
import image3 from '../../assets/co.jpg'

const stories = [
  {
    name: "Amina Khatun",
    quote:
      "Volunteering at the local animal shelter changed my life. It made me realize how powerful kindness can be.",
    image: image1,
  },
  {
    name: "Rafiq Hasan",
    quote:
      "Helping plant trees in our city was not just good for nature, but it connected me with amazing people.",
    image: image3,
  },
  {
    name: "Sumaiya Noor",
    quote:
      "Supporting students from low-income families has been the most fulfilling part of my year.",
    image: image2,
  },
];

const VolunteersStories = () => {
  return (
    <section className=" my-20 px-4 max-w-7xl mx-auto text-gray-700 dark:text-white">
      <div data-aos="zoom-in" data-aos-easing="linear" className="">
        <h2 className="text-3xl font-bold text-center mb-8 text-secondary dark:text-white">
          Volunteer Stories
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Hear from real volunteers about their inspiring journeys and the
          difference they've made in the lives of others.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 ">
        {stories.map((story, index) => (
          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            key={index}
            className="rounded-lg p-6 text-center shadow-md hover:shadow-lg transition"
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <p className="italic mb-3">“{story.quote}”</p>
            <h4 className="font-semibold text-lg text-secondary dark:text-white">
              — {story.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VolunteersStories;
