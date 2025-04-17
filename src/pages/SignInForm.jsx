import React, { useEffect, useState } from "react";
import FormButton from "../components/shared/FormButton";
import FormHeader from "../components/shared/FormHeader";
import FormInput from "../components/shared/FormInput";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../components/context/AuthContext";

export default function SignInForm() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const { user, createUser, signIn } = UserAuth();

  const onFormSwitch = () => {
    setShowRegisterForm((prevState) => !prevState);
    setEmail("");
    setPassword("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password, confirmPassword };
    console.log(data);
    try {
      await createUser(email, password).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
      });
    } catch (err) {
      console.log(err);
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const onSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  const renderForm = () => {
    if (showRegisterForm) {
      return (
        <>
          <FormHeader title="Register" />
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
            <FormInput
              description="Password"
              type="password"
              className="password"
              placeholder="Enter Your Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormInput
              description="Confirm Password"
              type="password"
              className="password"
              placeholder="Confirm Your Password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FormButton title="Register" />
            <div className="registerLink">
              <p>Already have an account ?</p>
              <Link to="#" onClick={onFormSwitch}>
                Login here!
              </Link>
            </div>
          </form>
        </>
      );
    }
    return (
      <>
        <FormHeader title="Login" />
        <form onSubmit={onSignIn}>
          <FormInput
            description="Email"
            type="email"
            className="emailInput"
            placeholder="Enter Your Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            description="Password"
            type="password"
            className="password"
            placeholder="Enter Your Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormButton title="Log In" />
          <div>
          </div>
          <div className="registerLink">
            <Link to="/forgot-password" className="forgotPasswordLink">
              Forgot Password?
            </Link>
            <p>Don't have an account ?</p>
            <Link to="#" id="registerLink" onClick={onFormSwitch}>
              Register Here!
            </Link>
          </div>
        </form>
      </>
    );
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  });

  return <div className="loginForm">{renderForm()}</div>;
}
