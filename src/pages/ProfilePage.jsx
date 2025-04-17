import React, { useState, useEffect } from "react";
import FormHeader from "../components/shared/FormHeader";
import FormInput from "../components/shared/FormInput";
import FormButton from "../components/shared/FormButton";
import { UserAuth } from "../components/context/AuthContext";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";


import profileImage from "../images/profileimg.png";

export default function ProfilePage() {
  const [name, setName] = useState(auth.currentUser?.displayName || "");
  const [email, setEmail] = useState(auth.currentUser?.email || "");

  const navigate = useNavigate();

  const { updateUser, user } = UserAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email };
    console.log(data);
    try {
      await updateUser(name, email);
    } catch (err) {
      console.log(err);
    }
    setName(auth.currentUser.displayName);
    setEmail(auth.currentUser.email);
  };

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  return (
    <div className="loginForm">
      <>
        <FormHeader title="Edit Profile" />
        <div className="imageContainer">
          <img className="img" src={profileImage} alt="ProfileImg" />
        </div>

        <form onSubmit={onSubmit}>
          <FormInput
            description="Name"
            type="text"
            className="nameInput"
            placeholder="Enter Your Full Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormInput
            description="Email"
            type="email"
            className="emailInput"
            placeholder="Enter Your Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormButton title="Edit Profile" />
        </form>
      </>
    </div>
  );
}
