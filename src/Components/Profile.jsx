import { EmailAuthCredential, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getDoc,
  getDocs,
  query,
  where,
  doc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../Config/firbase";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [Location, setLocation] = useState("");
  const [instaUrl,setInstaUrl] = useState("");
  const [displayname,setDisplayname]=useState("");
  const [about,setAbout]=useState("");
  const [ytUrl,setYtUrl] = useState("");
  const [gender,setGender]=useState("Select any Gender");
  const[agecont,setAgecont]=useState("");
  const [catogary,setCatogary]=useState([]);

  // const 
  useEffect(() => {
    const fetchUserData = async () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          setEmail(user.email || "");

          try {
            const q = query(
              collection(db, "users"),
              where("email", "==", user.email)
            );
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
              const userDoc = querySnapshot.docs[0];
              const data = userDoc.data();
              setEmail(data.email);
              setUsername(data.username);
              setPhotoUrl(data.photoUrl);
              console.log("User data:", data);
            } else {
              console.log("No user found for this email.");
            }
          } catch (err) {
            console.error("Error fetching user from Firestore:", err);
          }
        }
      });
    };

    fetchUserData();
  }, []);
  const updateData=()=>{

  }
  const ob = [
    {
      type: "Fashion",
    },
    {
      type: "Beauty & Makeup",
    },
    {
      type: "Fitness & Health",
    },
    {
      type: "Travel",
    },
    {
      type: "Food & Cooking",
    },
    {
      type: "Tech & Gadgets",
    },
    {
      type: "Gaming",
    },
    {
      type: "Music",
    },
    {
      type: "Photography",
    },
    {
      type: "Lifestyle",
    },
    {
      type: "Parenting",
    },
    {
      type: "Education",
    },
    {
      type: "Finance & Investment",
    },
    {
      type: "Motivation & Self-help",
    },
    {
      type: "Comedy & Memes",
    },
    {
      type: "Art & Design",
    },
    {
      type: "DIY & Crafts",
    },
    {
      type: "Books & Reviews",
    },
    {
      type: "Cars & Automobiles",
    },
    {
      type: "Pets & Animals",
    },
  ];
  return (
    <div className="flex  p-2 justify-between  gap-5  ">
      <div className=" flex flex-col justify-between  items-center  border-2 border-purple-900 rounded-2xl p-2 px-4 ">
        <h1 className="text-2xl uppercase">Profile</h1>
        <img
          src={photoUrl}
          className=" h-36 w-36 rounded-full object-fill"
          alt=""
        />
        <input
          className="p-3 pl-6  bg-gray-300 w-[30rem] rounded-2xl hover:scale-105 duration-500 outline-none"
          type="text"
          name=""
          value={username}
          id=""
        />
        <input
          className="p-3 pl-6  bg-gray-300 w-[30rem] rounded-2xl hover:scale-105 duration-500 outline-none"
          type="text"
          name=""
          value={email}
          id=""
        />
        <input
          type="text"
          placeholder="Display Name"
          className="p-3 pl-6 uppercase bg-gray-300 w-[30rem] rounded-2xl hover:scale-105 duration-500 outline-none"
        />
        <div className="flex flex-col gap-2">
          <label>About</label>
          <textarea
            className="p-6  bg-gray-300 w-[30rem] rounded-2xl resize-none outline-none"
            name="about"
            rows={10}
          ></textarea>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center w-full h-[98.5vh] overflow-scroll px-5">
        <h1 className="text-2xl uppercase">Catogary</h1>
        <div className=" grid grid-cols-4 grid-rows-5 gap-6">
          {ob.map((items, i) => (
            <div
              className="p-3 text-center border-2 rounded-4xl cursor-pointer border-purple-800 hover:bg-purple-800 hover:text-white hover:scale-110"
              key={i}
            >
              {items.type}
            </div>
          ))}
          <div className="grid grid-cols-2 gap-3 grid-rows-4 w-[54rem] p-4">
            <input
              type="url"
              placeholder="Instagram handle Link"
              className="p-3 pl-6 uppercase bg-gray-300 rounded-2xl  outline-none"
            />
            <input
              type="url"
              placeholder="Youtube channel Link"
              className="p-3 pl-6 uppercase bg-gray-300 rounded-2xl  outline-none"
            />

            <input
              type="text"
              placeholder="Location"
              className="p-3 pl-6 uppercase bg-gray-300 rounded-2xl  outline-none"
            />

            <select
              name="Gender"
              id=""
              className="p-3 pl-6 uppercase bg-gray-300 rounded-2xl  outline-none"
            >
              <option value="">Select Gender</option>
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Trans</option>
              <option value="">Other</option>
            </select>

            <input
              type="text"
              placeholder="Language In Which you Make Your Content"
              className="p-3 pl-6 uppercase bg-gray-300 rounded-2xl  outline-none"
            />
            <input
              type="number"
              placeholder="Phone Number(Optional)"
              className="p-3 pl-6 uppercase bg-gray-300 rounded-2xl  outline-none"
            />
            <label className="p-2 text-xl flex items-center gap-3 text-gray-500">
              18+ Content
              <input
                type="checkbox"
                className="h-4 accent-purple-700 w-4 outline-none"
              />
            </label>
            <label className="px-2 flex items-center text-gray-500 text-xl gap-4">
              Abusive Content
              <select
                name="Content"
                className="p-3 pl-6 font-light text-gray-700 uppercase bg-gray-300 rounded-2xl  outline-none"
              >
                <option value="">No</option>
                <option value="">Mild</option>
                <option value="">high</option>
              </select>
            </label>
          </div>
        </div>
        <button className="p-4 bg-purple-700 text-white text-2xl font-semibold rounded-2xl w-[12rem]">
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
