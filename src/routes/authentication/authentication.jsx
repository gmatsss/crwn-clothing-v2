import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import Signpform from "../../components/signup-form/signup_form";
import Signinform from "../../components/signin-form/signin-form";

import "./authentication.scss";
const Authentication = () => {
  // useEffect(async () => {
  //   //grabing the result of the redirect
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userdoc = await createuser(response.user);
  //   }
  // }, []);

  return (
    <div className="authentication-container">
      {/* <button onClick={signinwithgoogleredirect}>
        Sign in with google redirect
      </button> */}
      <Signinform />
      <Signpform />
    </div>
  );
};

export default Authentication;
