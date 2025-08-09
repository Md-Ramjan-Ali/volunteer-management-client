import React, { useState } from "react";
import img from "../../assets/image-5.jpg";
import img2 from "../../assets/image-7.jpg";
import img3 from "../../assets/image-6.jpg";

const faqs = [
  {
    id: 1,
    question: "How can I donate?",
    answer:
      "You can donate through our website using credit cards, PayPal, or bank transfer. Your contribution makes a difference.",
  },
  {
    id: 2,
    question: "How are funds utilized?",
    answer:
      "Funds are allocated to education, healthcare, food relief, and emergency support. Detailed reports are published regularly.",
  },
  {
    id: 3,
    question: "Can I volunteer internationally?",
    answer:
      "Yes! We offer international volunteer programs. Please visit our Volunteer page for details on locations and requirements.",
  },
];

const Accordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-10">
      <div className="max-w-screen-xl mx-auto px-3 xl:px-0">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-secondary font-medium">Your questions answered</p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            Get informed now.
          </h2>
          <h3 className="text-2xl text-gray-900 dark:text-white mt-1">
            Answers to your common questions
          </h3>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left image section */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 flex flex-col gap-4">
              <img
                src={img}
                alt="image1"
                className="rounded-lg object-cover w-full h-full"
                style={{ aspectRatio: "3 / 2" }}
              />
              <img
                src={img2}
                alt="image2"
                className="rounded-lg object-cover w-full h-full"
                style={{ aspectRatio: "3 / 2" }}
              />
            </div>
            <div className="col-span-2">
              <img
                src={img3}
                alt="image3"
                className="rounded-lg object-cover w-full h-full"
                style={{ height: "100%" }}
              />
            </div>
          </div>

          {/* Right accordion */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Frequently asked questions
            </h4>
            <p className="text-sm text-gray-600 dark:text-white mb-4">
              Can't find what you're looking for? Get in touch with our team and
              we will gladly help out.
            </p>

            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border-1 border-gray-700 rounded-lg mb-2 bg-white dark:bg-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex justify-between items-center p-4 text-left"
                >
                  <span className="font-medium">
                    {faq.id}. {faq.question}
                  </span>
                  <span className="text-orange-500 text-xl">
                    {openId === faq.id ? "−" : "+"}
                  </span>
                </button>
                {openId === faq.id && (
                  <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
