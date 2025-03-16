import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Store the index of the open item

  const toggleIndex = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqItems = [
    {
      question: "What type of Brands and Agencies are on OnlyFame?",
      answer:
        "OnlyFame partners with premium brands across industries like fashion, fitness, lifestyle, technology, and more, offering diverse collaboration opportunities for creators.",
    },
    {
      question: "How is OnlyFame different from other existing Creator apps?",
      answer:
        "HashFame connects you directly with a verified network of brands and agencies actively seeking influencers. Unlike registering with only one agency, expand your network, and get inbound requests for collabs from thousands of brands.",
    },
    {
      question: "Is OnlyFame free for Creators?",
      answer:
        "Yes, create a profile and get started connecting with brands for absolutely free. No fee or hidden charges.",
    },
  ];
  return (
    <div className="px-[11rem] py-12 flex flex-col items-center ">
      <h1 className="text-4xl font-serif  italic ">
        Frequently Asked Questions
      </h1>
      <div className="py-12 w-[45rem]">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col p-10 border-b-[1px] border-[#F3F3F5]"
          >
            <div className="flex justify-between items-center">
              <h1 className="font-bold">{item.question}</h1>
              <span
                className="font-semibold text-[1.5rem] cursor-pointer p-0 flex justify-center items-center duration-700"
                onClick={() => toggleIndex(index)}
              >
                <MdKeyboardArrowDown className={`transition-transform origin-center duration-700 ${
                    activeIndex === index ? "-rotate-180" : "rotate-0"
                  }`} />
              </span>
            </div>
            <p className={activeIndex === index ? "block mt-2" : "hidden"}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
