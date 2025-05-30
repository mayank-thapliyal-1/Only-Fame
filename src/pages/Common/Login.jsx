import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../../Config/firbase";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "../../assets/images/common_img/get-app-link.png"
import logo from "../../assets/images/common_img/OnlyFame.png"
const Login = ({ invisible, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [SignUp, setSignUp] = useState(true);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [comp, setComp] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  if (!invisible) return null;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (SignUp) {
        const userRef = collection(db, "users");
        const e = query(userRef, where("email", "==", email));
        const u = query(userRef, where("username", "==", username));
        const emailSnap = await getDocs(e);
        const usernameSnap = await getDocs(u);
        if (!emailSnap.empty) {
          setError("Email already in use!");
          return;
        }

        if (!usernameSnap.empty) {
          setError("Username already taken!");
          return;
        }
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        // Add user to Firestore
        await addDoc(userRef, {
          uid: user.uid,
          username,
          email,
          photoUrl: "src/assets/images/common_img/profile-pic.webp",
        });
        setError("");
        navigate("/profile-data");

        setComp("User created successfulluy!");
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("run");
        const user = userCredential.user;
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data(); // ✅ get the actual data

          localStorage.setItem(
            "user",
            JSON.stringify({
              uid: user.uid,
              email: data.email,
              photoUrl: data.photoUrl || null,
            })
          );

          setError("");
          console.log("it done");
          onClose();
        } else {
          console.log("No such document!");
        }
      }
    } catch (err) {
      setError(err.message);
      console.log(error.message);
    }
  };
  return (
    <div
      className=" fixed inset-0 z-50 bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
      // onClick={handleClose}
      id="wrapper"
    >
      <div className="border-1 border-gray-300 bg-white h-[40rem] w-[50rem] flex items-center justify-between px-14 gap-20 rounded-4xl">
      <button
          className=" font-sans absolute place-self-start right-[21rem] top-[6rem] p-2 px-4 hover:scale-110 text-2xl rounded-full hover:border-1 hover:border-slate-200  "
          onClick={onClose}
        >
          X
        </button>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img
            className="h-[25rem] w-[30rem] p-0 object-contain"
            src={Image}
            alt=""
          />
          <img
            className="h-12 w-40 object-contain"
            src={logo}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-7 items-start">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-serif italic">
              {" "}
              {SignUp ? "Sign UP Now in " : "Sign In Now to"}
              <span className="text-[#a44cff]"> OnlyFame!</span>
            </h1>
            <p className="font-extralight text-xl">
              "Join now to OnlyFame and became the part of this Group !"
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className={"flex flex-col gap-6 items-start p-0"}
          >
            <input
              type="email"
              required
              className="bg-gray-300 p-4 rounded-3xl w-[20rem] hover:scale-105 duration-500 "
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              required={SignUp}
              className={`bg-gray-300 p-4 ${
                SignUp ? "block" : "hidden"
              } rounded-3xl w-[20rem] hover:scale-105 duration-500 `}
              placeholder="UserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="bg-gray-300 p-4 rounded-3xl w-[20rem] hover:scale-105 duration-500 flex justify-between ">
              <input
                type={visible ? "text" : "password"}
                required
                placeholder="Password"
                className="outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="text-2xl "
                onClick={() => setVisible((perv) => !perv)}
              >
                {visible ? <FaEye className="text-muted" /> : <FaEyeSlash className="text-muted" />}
              </span>
            </span>

            <button className="bg-gradient-to-b from-[#8f53cf] to-[#650bc5] rounded-4xl text-white text-xl font-extralight h-[3rem] w-[9rem] hover:scale-105 duration-500 delay-200 box-border border-4 hover:border-[#a37ccc]">
              {SignUp ? "Sign Up" : "Sign In"}{" "}
            </button>
            <div className="flex gap-3 w-full">
              <p>
                {SignUp
                  ? "Already have an account ?"
                  : "Create a Account Now !"}
              </p>{" "}
              <span
                className="text-blue-400 hover:scale-105 cursor-pointer"
                onClick={(event) => {
                  event.preventDefault();
                  setSignUp((prev) => !prev);
                }}
              >
                {" "}
                {SignUp ? "SignIn" : "SignUp"}{" "}
              </span>
            </div>
            <p className="text-red-600">{error}</p>
            <p className="text-green-600">{comp}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
