import React, { useState } from "react";
import {
  auth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
} from "../../Config/firbase";

const Login = ({ invisible, onClose }) => {
  const [phone, setPhone] = useState("");
  const [Otp, setOtp] = useState("");
  const [visible, setVisible] = useState(true);
  const [verificationId, setVerificationId] = useState(null);

  if (!invisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const SetupCaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("Captcha solved", response);
          },
        }
      );
    }
  };
  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
  
    if (input.startsWith("91")) {
      input = input.slice(2); // Remove extra "91" if user types it manually
    }
    if (input.length > 10) {
      input = input.slice(0, 10); // Limit input to 10 digits
    }
    setPhone("+91" + input);
  };
  
  const sendOTP = async (event) => {
    event.preventDefault()
    SetupCaptcha();
    setVisible(!visible);
    console.log("running");
    try {
      const confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        window.recaptchaVerifier // ✅ Corrected variable name
      );
      setVerificationId(confirmation.verificationId);
      console.log("OTP is Sent");
    } catch (error) {
      console.error("Error sending OTP", error);
    }
  };

  const verifyOTP = async (event) => {
    event.preventDefault()
    if (!verificationId) return console.log("Enter the OTP first");
    console.log("runed");
    try {
      const credential = PhoneAuthProvider.credential(verificationId, Otp);
      await signInWithCredential(auth, credential);
      console.log("User signed in successfully");
    } catch (error) {
      console.error("Error during OTP verification", error);
    }
  };

  return (
    <div
      className=" fixed inset-0 z-50 bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="border-1 border-gray-300 bg-white h-[40rem] w-[50rem] flex items-center justify-between px-14 gap-20 rounded-4xl">
        <button
          className="absolute place-self-start right-[19rem] top-[4.5rem] hover:text-gray-600 hover:scale-110 text-3xl font-semibold"
          onClick={onClose}
        >
          X
        </button>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img
            className="h-[25rem] w-[30rem] p-0 object-contain"
            src="src/assets/images/common_img/get-app-link.png"
            alt=""
          />
          <img
            className="h-12 w-40 object-contain"
            src="src/assets/images/common_img/OnlyFame.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-7 items-start">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-serif italic">
              Invite Your Friends to{" "}
              <span className="text-[#a44cff]"> OnlyFame!</span>
            </h1>
            <p className="font-extralight text-xl">
              "Invite influencers & brands to OnlyFame and grow your network!"
            </p>
          </div>
          <form
            className={`${
              visible ? "flex" : "hidden"
            }  flex-col gap-6 items-start p-0`}
          >
            <input
              type="tel"
              required
              className="bg-gray-300 p-4 rounded-3xl w-[20rem]"
              placeholder="+91 9330101018"
              value={phone}
              onChange={handlePhoneChange}
            />
            <button
              className="bg-gradient-to-b from-[#8f53cf] to-[#650bc5] rounded-4xl text-white text-xl font-extralight h-[3rem] w-[9rem]"
              onClick={sendOTP}
            >
              Send OTP
            </button>
          </form>
          <form
            className={` ${
              visible ? "hidden" : "flex"
            } flex-col gap-6 items-start p-0 `}
          >
            <input
              type="tel"
              required
              className="bg-gray-300 p-4 rounded-3xl w-[20rem]"
              placeholder="+91 9330101018"
              value={phone}
              onChange={handlePhoneChange}
            />
            <input
              type="text"
              required
              value={Otp}
              onChange={(e) => setOtp(e.target.value)}
              className="bg-gray-300 p-4 rounded-3xl w-[20rem]"
              placeholder="OTP"
            />
            <button
              className="bg-gradient-to-b from-[#8f53cf] to-[#650bc5] rounded-4xl text-white text-xl font-extralight h-[3rem] w-[9rem]"
              onClick={verifyOTP}
            >
              Refer
            </button>
            <div id="recaptcha-container"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
