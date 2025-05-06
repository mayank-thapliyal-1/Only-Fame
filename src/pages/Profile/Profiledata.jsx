import { EmailAuthCredential, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import React, { useRef, useEffect, useState } from "react";
import { auth, db } from "../../Config/firbase";
import { useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
const ProfileData = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [photoUrl, setPhotoUrl] = useState(
    "src/assets/images/common_img/profile-pic.webp"
  );
  const [state, setState] = useState(0);
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [Location, setLocation] = useState("");
  const [instaUrl, setInstaUrl] = useState("");
  const [displayname, setDisplayname] = useState("");
  const [about, setAbout] = useState("");
  const [ytUrl, setYtUrl] = useState("");
  const [contType, setcontType] = useState("");
  const [content, setContent] = useState("");
  const [adultCont, setAdultCont] = useState("");
  const [gender, setGender] = useState("");
  const [agecont, setAgecont] = useState("");
  const [dob, setDob] = useState("");
  const [catogary, setCatogary] = useState([]);
  const [select, setSelect] = useState([]);
  const [click, setClick] = useState([]);
  const [uid, setUid] = useState("");
  const [error, setError] = useState("");
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
              setUid(data.uid);
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
  // Set Age
  const setAge = (e) => {
    setDob(e.target.value);
    const birth = new Date(e.target.value);
    const now = new Date();
    const diff = now - birth;
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    setAgecont(years);
  };
  // Image Upload
  const handleImageClick = () => {
    fileInputRef.current.click(); // triggers hidden file input
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    const objectUrl = URL.createObjectURL(file);
    setPhotoUrl(objectUrl);
  };
  //   set State
  const increase = () => {
    if (state == 2) {
updateData();
      return;
    }
    setState((prev) => prev + 1);
  };
  const decrease = () => {
    if (state == 0) {
      return;
    }
    setState((perv) => perv - 1);
  };
  // Upload Image In Cloudinary
  const uploadImageToCloudinary = async () => {
    if (photoUrl && photoUrl.startsWith("https://res.cloudinary.com/")) {
      console.log("Image already uploaded, skipping re-upload...");
      return photoUrl;
    }
    if (!image) {
      alert("Please select an image first");
      return null;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "Quiizy");
    formData.append("folder", "Quizzy");

    try {
      const response = await fetch(import.meta.env.VITE_Cloudinary_API_KEY, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      alert("image upload succesfully");

      return data.secure_url;
    } catch (error) {
      console.log("Cloudinary upload failed", error);
      alert("Image upload failed");
      return null;
    }
  };

  // Update Data
  const updateData = async () => {
    if (phone.length === 10) {
      setError("Phone Number Should be 10 digit");
    }
    let finalPhotoUrl = photoUrl;
    if (image) {
      const uploadedUrl = await uploadImageToCloudinary();
      if (uploadedUrl) {
        finalPhotoUrl = uploadedUrl;
        setPhotoUrl(uploadedUrl);
      }
    }

    try {
      await setDoc(
        doc(db, "users", uid),
        {
          email: email,
          username: username,
          uid: uid,
          photoUrl: finalPhotoUrl,
          Display: displayname,
          About: about,
          Gender: gender,
          ContentLang: content,
          AdultContent: adultCont,
          Age: agecont,
          Dob: dob,
          Catogary: catogary,
          YoutubeUrl: ytUrl,
          InstaUrl: instaUrl,
          Abusise_Content: contType,
          Location: Location,
          PhoneNumber: phone,
        },
        { merge: true }
      );
      console.log("done");
      // Store essential user info in localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          uid: uid,
          email: email,
          photoUrl: finalPhotoUrl,
        })
      );
      navigate("/");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };
  // Select Catogary
  const checker = (index) => {
    setClick(() => ({
      [index]: !click[index] || false,
    }));
  };
  const Select = (i) => {
    const selectedObject = ob[i];
    const isSelected = catogary.some((item) => item?.id === selectedObject.id);
    const updatedSelect = [...select];
    updatedSelect[i] = !isSelected;
    setSelect(updatedSelect);
    let updatedCatogary;
    if (isSelected) {
      // Remove the selected item
      updatedCatogary = catogary.filter(
        (item) => item?.id !== selectedObject.id
      );
    } else {
      // Add the selected item
      updatedCatogary = [...catogary, selectedObject];
    }
    setCatogary(updatedCatogary);
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
    <div className="flex  p-5 justify-center items-center gap-5  bg-accent h-screen w-screen ">
      <div className=" p-4 shadow-2xl shadow-gray-400 bg-white rounded-2xl  flex flex-col  gap-4">
        <h1 className=" text-5xl text-center text-primary ">
          {" "}
          {state == 2 ? "Category" : "Profile"}{" "}
        </h1>
        <div className={`${state == 0 ? "flex" : "hidden"}`}>
          <div className="flex flex-col gap-3">
            <fieldset className=" group px-3 rounded-2xl border-1  border-muted hover:border-primary p-2  bg-gray-100 w-[25rem]  duration-500">
              <legend className=" group-hover:text-primary">Username</legend>
              <input
                className=" outline-none"
                type="text"
                name=""
                value={username}
                id=""
              />
            </fieldset>
            <fieldset className=" group px-3 p-2 rounded-2xl border-1  bg-gray-100 w-[25rem] duration-500 border-muted hover:border-primary pl-3">
              <legend className="group-hover:text-primary">Email</legend>
              <input
                className=" outline-none w-full"
                type="text"
                name=""
                value={email}
                id=""
              />
            </fieldset>
            <fieldset className=" pl-3 p-2 group border-1 w-[25rem] hover:shadow-2xl  border-muted hover:border-primary  bg-slate-100 rounded-2xl">
              <legend className="group-hover:text-primary text-muted">
                Display Name
              </legend>
              <input
                type="text"
                value={displayname}
                onChange={(e) => setDisplayname(e.target.value)}
                className=" w-full  duration-500 outline-none"
              />
            </fieldset>
            <fieldset className=" border-1 border-muted pl-2 rounded-2xl bg-slate-100 flex flex-col gap-2">
              <legend className="text-muted">About</legend>
              <textarea
                className="p-2   w-[30rem] rounded-2xl resize-none outline-none"
                name="about"
                rows={10}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              ></textarea>
            </fieldset>
          </div>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleImageUpload}
          />
          <img
            src={photoUrl}
            onClick={handleImageClick}
            className=" h-52 relative right-10 w-52 rounded-full object-fill"
            alt=""
          />
        </div>
        <div className={`${state == 1 ? "grid" : "hidden"}  grid-cols-2 gap-5`}>
          <fieldset className=" pl-3 p-2 group border-1 w-[25rem] hover:shadow-2xl  border-muted hover:border-primary  bg-slate-100 rounded-2xl">
            <legend className="group-hover:text-primary text-muted">
              Instagram-Url
            </legend>
            <input
              type="url"
              value={instaUrl}
              onChange={(e) => setInstaUrl(e.target.value)}
              className="w-full outline-none"
            />
          </fieldset>
          <fieldset className=" pl-3 p-2 group border-1 w-[25rem] hover:shadow-2xl  border-muted hover:border-primary  bg-slate-100 rounded-2xl">
            <legend className="group-hover:text-primary text-muted">
              Youtube-Url
            </legend>
            <input
              type="url"
              value={ytUrl}
              onChange={(e) => setYtUrl(e.target.value)}
              className="w-full outline-none"
            />
          </fieldset>
          <fieldset className=" pl-3 p-2 group border-1 w-[25rem] hover:shadow-2xl  border-muted hover:border-primary  bg-slate-100 rounded-2xl">
            <legend className="group-hover:text-primary text-muted">
              Location
            </legend>
            <input
              type="text"
              value={Location}
              onChange={(e) => setLocation(e.target.value)}
              className=" w-full outline-none"
            />
          </fieldset>

          <select
            name="Gender"
            id=""
            className=" h-13 mt-3 pl-6 uppercae border-1 border-muted bg-slate-100 rounded-2xl  outline-none"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="trans">Trans</option>
            <option value="other">Other</option>
          </select>
          <fieldset className=" pl-3 p-2 group border-1 w-[25rem] hover:shadow-2xl  border-muted hover:border-primary  bg-slate-100 rounded-2xl">
            <legend>Dob</legend>
            <input
              type="date"
              name="date"
              id=""
              className=" w-full outline-none"
              value={dob}
              onChange={setAge}
            />
          </fieldset>
          <fieldset className=" pl-3 p-2 group border-1 w-[25rem] hover:shadow-2xl  border-muted hover:border-primary  bg-slate-100 rounded-2xl">
            <legend>Content Language</legend>
            <input
              type="text"
              value={contType}
              onChange={(e) => setcontType(e.target.value)}
              className="outline-none"
            />
          </fieldset>
          <fieldset className=" pl-3 p-2 group border-1 w-[25rem] hover:shadow-2xl  border-muted hover:border-primary  bg-slate-100 rounded-2xl">
            <legend>Phone</legend>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full  outline-none"
            />
          </fieldset>
          <label className="p-2 text-lg flex items-center gap-3 text-muted">
            18+ Content
            <input
              type="checkbox"
              value={adultCont}
              onChange={(e) => setAdultCont(e.target.value)}
              className="h-4 accent-purple-700 w-4 outline-none"
            />
          </label>
          <label className="px-2 flex items-center text-muted text-lg gap-4">
            Abusive Content
            <select
              name="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="p-2 pl-4 font-light text-muted border-1 border-muted uppercase bg-slate-100 rounded-2xl  outline-none"
            >
              <option value="No">No</option>
              <option value="Mild">Mild</option>
              <option value="High">high</option>
            </select>
          </label>
        </div>
        <div className={`${state == 2 ? "flex" : "hidden"} p-0 `}>
          <div className=" grid grid-cols-3 gap-1">
            {ob.map((items, i) => (
              <div key={i}>
                <div className="flex flex-col gap-2">
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
                    }   flex-col gap-2 duration-500 ease-in-out  `}
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
        <div
          className={`${
            state == 0 ? "justify-end" : "justify-between"
          } flex px-4 py-2 cursor-pointer w-full`}
        >
          <button
            className={`${
              state == 0 ? "hidden" : "block"
            } hover:text-primary cursor-pointer hover:scale-105`}
            onClick={decrease}
          >
            prev
          </button>{" "}
          <button
            className="hover:text-primary cursor-pointer hover:scale-105"
            onClick={increase}
          >
            {" "}
            {state == 2 ? "Save" : "next"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
