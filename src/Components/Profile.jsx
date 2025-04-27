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
import { auth, db } from "../Config/firbase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [photoUrl, setPhotoUrl] = useState(
    "src/assets/images/common_img/profile-pic.webp"
  );
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
      await setDoc(doc(db, "users", uid), {
        email:email,
        username:username,
        uid:uid,
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
      }, { merge: true });
      console.log("done");
      // Store essential user info in localStorage
    localStorage.setItem("user", JSON.stringify({
      uid: uid,
      email: email,
      photoUrl: finalPhotoUrl,
    }));
    console.log("done")
      navigate("/");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };
  // Select Catogary
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
          value={displayname}
          onChange={(e) => setDisplayname(e.target.value)}
          placeholder="Display Name"
          className="p-3 pl-6 uppercase bg-gray-300 w-[30rem] rounded-2xl hover:scale-105 duration-500 outline-none"
        />
        <div className="flex flex-col gap-2">
          <label>About</label>
          <textarea
            className="p-6  bg-gray-300 w-[30rem] rounded-2xl resize-none outline-none"
            name="about"
            rows={10}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center w-full h-[98.5vh] overflow-scroll px-5">
        <h1 className="text-2xl uppercase">Catogary</h1>
        <div className=" grid grid-cols-4 grid-rows-5 gap-6">
          {ob.map((items, i) => (
            <div
              className={`p-3 text-center border-2 rounded-4xl cursor-pointer border-purple-800  hover:scale-110 ${
                select[i] == true ? "bg-purple-800 text-white" : ""
              }`}
              key={i}
              onClick={() => Select(i)}
            >
              {items.type}
            </div>
          ))}
          <div className="grid grid-cols-2 gap-3 grid-rows-4 w-[54rem] p-4">
            <input
              type="url"
              value={instaUrl}
              onChange={(e) => setInstaUrl(e.target.value)}
              placeholder="Instagram handle Link"
              className="p-3 pl-6  bg-gray-300 rounded-2xl  outline-none"
            />
            <input
              type="url"
              value={ytUrl}
              onChange={(e) => setYtUrl(e.target.value)}
              placeholder="Youtube channel Link"
              className="p-3 pl-6  bg-gray-300 rounded-2xl  outline-none"
            />

            <input
              type="text"
              placeholder="Location"
              value={Location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-3 pl-6  bg-gray-300 rounded-2xl  outline-none"
            />

            <select
              name="Gender"
              id=""
              className="p-3 pl-6 uppercase bg-gray-300 rounded-2xl  outline-none"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="trans">Trans</option>
              <option value="other">Other</option>
            </select>
            <input
              type="date"
              name="date"
              id=""
              className="p-3 pl-6 uppercase bg-gray-300 rounded-2xl  outline-none"
              value={dob}
              onChange={setAge}
            />
            <input
              type="text"
              placeholder="Language  Content"
              value={contType}
              onChange={(e) => setcontType(e.target.value)}
              className="p-3 pl-6  bg-gray-300 rounded-2xl  outline-none"
            />
            <input
              type="number"
              placeholder="Phone Number(Optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-3 pl-6  bg-gray-300 rounded-2xl  outline-none"
            />
            <label className="p-2 text-xl flex items-center gap-3 text-gray-500">
              18+ Content
              <input
                type="checkbox"
                value={adultCont}
                onChange={(e) => setAdultCont(e.target.value)}
                className="h-4 accent-purple-700 w-4 outline-none"
              />
            </label>
            <label className="px-2 flex items-center text-gray-500 text-xl gap-4">
              Abusive Content
              <select
                name="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="p-3 pl-6 font-light text-gray-700 uppercase bg-gray-300 rounded-2xl  outline-none"
              >
                <option value="No">No</option>
                <option value="Mild">Mild</option>
                <option value="High">high</option>
              </select>
            </label>
          </div>
        </div>
        <button
          className="p-4 bg-purple-700 text-white text-2xl font-semibold rounded-2xl w-[12rem]"
          onClick={updateData}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
