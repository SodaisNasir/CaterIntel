import React, { useState } from "react";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { useSelector } from "react-redux";
import Splash from "./src/screens/SplashScreen";
import UserNavigator from "./src/navigation/UserNavigator";

const App = () => {
  const [loading, setLoading] = useState(true);
  const SignIn = useSelector((state) => state.isSignin);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <>
          {SignIn == null && <AuthNavigator />}
          {SignIn == "user@gmail.com" && <UserNavigator />}
        </>
      )}
    </>
  );
};

export default App;
