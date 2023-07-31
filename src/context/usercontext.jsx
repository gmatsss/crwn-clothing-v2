import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase";

//the value that we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  //initial state of the user
  const [currentUser, setCurrentUser] = useState(null);

  const value = { currentUser, setCurrentUser };

  //coonection to firebase that there is a user sign in
  useEffect(() => {
    const unsubs = onAuthStateChangedListener((user) => {
      //to hold the current user even in refresh state
      setCurrentUser(user);
      console.log(user);
    });

    return unsubs;
  }, []);

  //for wrapping to app or for u want to user data
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
