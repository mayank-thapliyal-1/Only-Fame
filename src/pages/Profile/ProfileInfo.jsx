import React, { useState } from "react";

const ProfileInfo = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [DisplayName, setDisplayName] = useState("");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className="flex flex-col w-full flex-2 p-10 gap-10">
      <h1 className="text-5xl uppercase font-semibold"> Personal Info</h1>
      <form className="flex relative flex-col justify-evenly h-full text-muted text-lg">
        <fieldset className=" duration-200 group border-1 border-muted/50 hover:border-2 hover:border-primary bg-slate-50 px-4 rounded-lg">
          <legend className="group-hover:text-primary">Username </legend>
          <input
            type="text"
            className="outline-none w-full p-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </fieldset>
        <fieldset className=" duration-200 group border-1 border-muted/50 hover:border-2 hover:border-primary bg-slate-50 px-4 rounded-lg">
          <legend className="group-hover:text-primary">Email </legend>
          <input
            type="text"
            className="outline-none w-full p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset className=" duration-200 group border-1 border-muted/50 hover:border-2 hover:border-primary bg-slate-50 px-4 rounded-lg">
          <legend className="group-hover:text-primary">Display Name </legend>
          <input
            type="text"
            className="outline-none w-full p-2"
            value={DisplayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </fieldset>
        <fieldset className=" duration-200 group border-1 border-muted/50 hover:border-2 hover:border-primary bg-slate-50 px-4 rounded-lg">
          <legend className="group-hover:text-primary">Phone </legend>
          <input
            type="tele"
            className="outline-none w-full p-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </fieldset>
        <fieldset className="duration-200 group border-1 border-muted/50 hover:border-2 hover:border-primary bg-slate-50 px-4 rounded-lg">
          <legend className="group-hover:text-primary">Dob </legend>
          <input
            type="date"
            className="outline-none w-full p-2"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </fieldset>
        <fieldset className=" duration-200 group border-1 border-muted/50 hover:border-2 hover:border-primary bg-slate-50 px-4 rounded-lg">
          <legend className="group-hover:text-primary">Location </legend>
          <input
            type="text"
            className="outline-none w-full p-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default ProfileInfo;
