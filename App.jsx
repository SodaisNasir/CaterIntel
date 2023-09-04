import React, { useState } from "react";
import AuthNavigator from "./src/navigation/AuthNavigator";
// import UserNavigator from "./src/navigation/UserNavigator";
import { useSelector } from "react-redux";
import Splash from "./src/screens/SplashScreen";

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
          {/* {SignIn == "1234" && <UserNavigator />} */}
        </>
      )}
    </>
  );
};

export default App;