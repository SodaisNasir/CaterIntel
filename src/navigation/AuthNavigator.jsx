import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../screens/Authentication/Login";
import FindAccount from "../screens/Authentication/FindAccount.jsx";
import Reset from "../screens/Authentication/Reset";
import Otp from "../screens/Authentication/Otp.jsx";
import Register from "../screens/Authentication/Register";

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="login"
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="otp" component={Otp} />
        <Stack.Screen name="find" component={FindAccount} />
        <Stack.Screen name="reset" component={Reset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
