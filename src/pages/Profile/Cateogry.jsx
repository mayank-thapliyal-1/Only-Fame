import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
const Cateogry = () => {
  const [click, setClick] = useState([]);
  const [select, setSelect] = useState([]);
  const checker = (index) => {
    setClick(() => ({
      [index]: !click[index] || false,
    }));
  };
  const ob = [
    {
      Category: "Entertainment",
      subCategory1: "Comedy & Skits",
      subCategory2: "Short Films",
      subCategory3: "Memes & Reactions",
    },
    {
      Category: "Lifestyle",
      subCategory1: "Travel & Vlogs",
      subCategory2: "Fashion & Style",
      subCategory3: "Daily Life / Routines",
    },
    {
      Category: "Education",
      subCategory1: "Coding & Tech",
      subCategory2: "Language Learning",
      subCategory3: "Science & Math",
      subCategory4: "Exam Prep & Career Advice",
    },
    {
      Category: "Fitness & Health",
      subCategory1: "Workouts & Training",
      subCategory2: "Diet & Nutrition",
      subCategory3: "Yoga & Meditation",
    },
    {
      Category: "Music & Dance",
      subCategory1: "Singing / Covers",
      subCategory2: "Original Music",
      subCategory3: "Dance Performances",
      subCategory4: "DJ & Music Production",
    },
    {
      Category: "Gaming",
      subCategory1: "Gameplays & Walkthroughs",
      subCategory2: "Esports Highlights",
      subCategory3: "Game Reviews & Tips",
    },
    {
      Category: "Art & Creativity",
      subCategory1: "Drawing / Painting",
      subCategory2: "Graphic Design",
      subCategory3: "DIY & Crafts",
      subCategory4: "Animation",
    },
    {
      Category: "Food & Cooking",
      subCategory1: "Recipes & Tutorials",
      subCategory2: "Food Vlogs",
      subCategory3: "Restaurant Reviews",
    },
    {
      Category: "Business & Finance",
      subCategory1: "Startups & Entrepreneurship",
      subCategory2: "Personal Finance Tips",
      subCategory3: "Investing & Crypto",
    },
    {
      Category: "Spirituality & Motivation",
      subCategory1: "Life Coaching",
      subCategory2: "Mental Health",
      subCategory3: "Motivational Talks",
    },
  ];
  return (
    <div className="flex-4 p-10 flex flex-col gap-10 ">
      <h1 className="text-5xl font-semibold uppercase text-primary">
        Category
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {ob.map((items, i) => (
          <div key={i}>
            <div className="flex flex-col gap-5">
              <h1
                className="flex justify-between items-center text-primary border-1 border-primary px-4 py-2 rounded-3xl cursor-pointer hover:bg-primary hover:text-white"
                onClick={() => checker(i)}
              >
                {items.Category}{" "}
                {click[i] === undefined || click[i] ? (
                  <FaAngleDown />
                ) : (
                  <FaChevronUp />
                )}
              </h1>
              <div
                className={`${
                  click[i] ? "flex" : "hidden"
                }   flex-col gap-3 duration-500 ease-in-out  `}
              >
                <span className="px-3 py-2  text-primary delay-100 border-primary hover:scale-105 hover:shadow-2xs shadow-gray-500 duration-200 border-1 cursor-pointer rounded-2xl hover:bg-accent hover:text-white hover:border-accent  ">
                  {" "}
                  {items.subCategory1}{" "}
                </span>
                <span className="px-3 py-2 text-primary delay-100 border-primary hover:scale-105 border-1 hover:shadow-2xs shadow-gray-500 duration-200 cursor-pointer rounded-2xl hover:bg-accent hover:text-white hover:border-accent ">
                  {items.subCategory2}
                </span>
                <span className="px-3 py-2 text-primary delay-100 border-primary hover:scale-105 border-1 hover:shadow-2xs shadow-gray-500 duration-200cursor-pointer rounded-2xl hover:bg-accent hover:text-white hover:border-accent ">
                  {" "}
                  {items.subCategory3}{" "}
                </span>
                {items.subCategory4 ? (
                  <span className="px-3 py-2 delay-100 text-primary border-primary border-1 hover:scale-105 hover:shadow-2xs shadow-gray-500 duration-200cursor-pointer rounded-2xl hover:bg-accent hover:text-white hover:border-accent ">
                    {items.subCategory4}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cateogry;
