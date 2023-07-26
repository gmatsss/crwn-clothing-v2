import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth, //states in the firebase and website
  signinwithgooglepopup,
  createuser,
  signinwithgoogleredirect,
} from "../../utils/firebase/firebase";

import Signpform from "../../components/signup-form/signup_form";

const Signin = () => {
  useEffect(async () => {
    //grabing the result of the redirect
    const response = await getRedirectResult(auth);
    if (response) {
      const userdoc = await createuser(response.user);
    }
  }, []);

  const loggoogleuser = async () => {
    const { user } = await signinwithgooglepopup();
    const userdoc = await createuser(user);
  };

  return (
    <div>
      <h1>this is sign page</h1>
      <button onClick={loggoogleuser}>Sign in with google</button>
      <button onClick={signinwithgoogleredirect}>
        Sign in with google redirect
      </button>

      <Signpform />
    </div>
  );
};

export default Signin;
