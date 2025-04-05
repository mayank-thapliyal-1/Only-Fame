import { onAuthStateChanged } from "firebase/auth";
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
  const [photoUrl,setPhotoUrl]=useState('');
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
    <div className="flex justify-between p-5">
      <div>
        <h1>Profile</h1>
        <img src={photoUrl} alt="" />
        {email}
         {username}

        <p></p>
      </div>
      <div>Influecers</div>
      <div className="flex flex-col gap-5 items-center">
        <h1>Catogary</h1>
        <div className=" grid grid-cols-4 grid-rows-5 gap-6">
        {ob.map((items, i) => (
          <div className="p-4 border-2 rounded-full cursor-pointer hover:bg-gray-300 hover:scale-110" key={i} >{items.type}</div>
        ))}
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
