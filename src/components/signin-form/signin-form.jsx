import React, { useState } from "react";

import "./signin-form.scss";

import Button from "../button/button";

import Forminput from "../form-input/form-input";

import {
  auth, //states in the firebase and website
  signinwithgooglepopup,
  createuser,
  signinwithgoogleredirect, //redirect func to google
  signinauthwithemailandpass,
} from "../../utils/firebase/firebase";

const defaultformfields = {
  email: "",
  password: "",
};

const Signinform = () => {
  const sisgninwithgoogle = async () => {
    const { user } = await signinwithgooglepopup();
    const userdoc = await createuser(user);
    console.log(userdoc);
  };

  const [formfields, setFormfields] = useState(defaultformfields);
  const { email, password } = formfields;

  const resetfields = () => {
    setFormfields(defaultformfields);
  };

  const handle_submit = async (event) => {
    event.preventDefault();

    try {
      const res = await signinauthwithemailandpass(email, password);
      resetfields();
      console.log(res);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Password is not correct");
          break;

        case "auth/user-not-found":
          alert("User not found");
          break;

        default:
          console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormfields({ ...formfields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have a account?</h2>
      <span>Sign in with email</span>
      <form
        action=""
        onSubmit={(e) => {
          handle_submit(e);
        }}
      >
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

        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttontype={"google"}
            onClick={sisgninwithgoogle}
          >
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signinform;
