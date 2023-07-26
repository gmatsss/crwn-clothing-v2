import React, { useState } from "react";

import "./signup-form.scss";

import Button from "../button/button";

import {
  createauthwithemailandpass,
  createuser,
} from "../../utils/firebase/firebase";

import Forminput from "../form-input/form-input";

const defaultformfields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signpform = () => {
  const [formfields, setFormfields] = useState(defaultformfields);
  const { displayName, email, password, confirmPassword } = formfields;

  const resetfields = () => {
    setFormfields(defaultformfields);
  };

  const handle_submit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Please match your password");
      return;
    }

    try {
      //firebase utils functions
      const { user } = await createauthwithemailandpass(email, password);
      const res = await createuser(user, { displayName });
      resetfields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        return alert("Email already in use");
      }
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormfields({ ...formfields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have a account?</h2>
      <span>Sign up with email</span>
      <form
        action=""
        onSubmit={(e) => {
          handle_submit(e);
        }}
      >
        <Forminput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <Forminput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <Forminput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <Forminput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttontype={"inverted"} type="submit">
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default Signpform;
