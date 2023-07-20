import {
  signinwithgooglepopup,
  createuser,
} from "../../utils/firebase/firebase";

const Signin = () => {
  const loggoogleuser = async () => {
    const { user } = await signinwithgooglepopup();
    const userdoc = await createuser(user);
  };
  return (
    <div>
      <h1>this is sign page</h1>
      <button onClick={loggoogleuser}>Sign in with google</button>
    </div>
  );
};

export default Signin;
