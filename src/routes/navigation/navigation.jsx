import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigation.scss";
import { UserContext } from "../../context/usercontext";
import { signoutuser } from "../../utils/firebase/firebase";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signoutuser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/Authentication">
              Sign-in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
