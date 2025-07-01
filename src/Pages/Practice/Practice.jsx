import React from "react";
import img1 from '../../assets/volunteer.jpg'
import img2 from '../../assets/volunteer.jpg'
import img3 from '../../assets/volunteer.jpg'

const OurMission = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-2 lg:px-0 pb-20">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm tracking-widest text-gray-500 uppercase mb-2" style={{letterSpacing: "5px"}}>
          Our Mission
        </p>
        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-gray-800 mb-4 leading-snug">
          Caring Hearts, Stronger Communities
        </h2>
        <p className="text-gray-500 dark:text-gray-300 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut elit
          tellus, luctus nec mattis, pulvinar dapibus leo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-yellow-200 p-6 rounded-xl flex flex-col justify-between">
          <div className="text-sm text-gray-600 mb-2">01.</div>
          <h3 className="text-xl font-semibold mb-4">
            Creating Smiles, Changing Worlds
          </h3>
          <p className="text-gray-700 text-sm">
            Morbi sit amet ultricies felis, non aliquam urna. Proin id dui ut
            lectus blandit imperdiet. Nunc eu lorem est tempus ligula convallis.
          </p>
        </div>

        {/* Image 1 */}
        <div className="rounded-xl overflow-hidden">
          <img
            src={img1}
            alt="Happy children"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 2 */}
        <div className="bg-yellow-200 p-6 rounded-xl flex flex-col justify-between">
          <div className="text-sm text-gray-600 mb-2">02.</div>
          <h3 className="text-xl font-semibold mb-4">
            Acts of Kindness, Seeds of Change
          </h3>
          <p className="text-gray-700 text-sm">
            Donec pretium ac ligula non aliquam. Curabitur pulvinar orci sed ex
            ornare, id facilisis nibh rhoncus. Duis in vehicula mi.
          </p>
        </div>

        {/* Image 2 */}
        <div className="rounded-xl overflow-hidden">
          <img
            src={img2}
            alt="Donation hands"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 3 */}
        <div className="bg-yellow-200 p-6 rounded-xl flex flex-col justify-between">
          <div className="text-sm text-gray-600 mb-2">03.</div>
          <h3 className="text-xl font-semibold mb-4">
            Spreading Joy, Changing Lives
          </h3>
          <p className="text-gray-700 text-sm">
            Aenean sodales lectus augue, sed porttitor velit fermentum non.
            Donec in vestibulum elit, vel pretium magna. Sed velit lectus.
          </p>
        </div>

        {/* Image 3 */}
        <div className="rounded-xl overflow-hidden">
          <img
            src={img3}
            alt="Donation volunteer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
