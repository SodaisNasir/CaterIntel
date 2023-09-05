import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { scale } from "react-native-size-matters";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Color } from "../utils/Color";

import Feather from "react-native-vector-icons/Feather";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Dashboard from "../screens/Users/Home/Dashboard";
import Alert from "../screens/Users/Home/Alert";

import Setting from "../screens/Users/Setting/Setting";
import ChangePassword from "../screens/Users/Setting/ChangePassword";
import TermsAndConditions from "../screens/Users/Setting/TermsAndConditions";

import Profile from "../screens/Users/Profiles/Profile";
import EditProfile from "../screens/Users/Profiles/EditProfile";

const UserNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="dashboard"
          component={AllDashboard}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="view-dashboard"
                color={focused ? Color.Main : Color.Grey}
                size={scale(25)}
              />
            ),
          }}
        />

        <Tab.Screen
          name="AllProfile"
          component={AllProfile}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome6
                name="user"
                color={focused ? Color.Main : Color.Grey}
                size={scale(25)}
              />
            ),
          }}
        />

        <Tab.Screen
          name="AllSetting"
          component={AllSetting}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="settings"
                color={focused ? Color.Main : Color.Grey}
                size={scale(25)}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default UserNavigator;

const Stack = createNativeStackNavigator();

function AllDashboard() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="userdashboard"
    >
      <Stack.Screen
        name="userdashboard"
        component={Dashboard}
        options={{ animation: "slide_from_left" }}
      />
      <Stack.Screen
        name="Alert"
        component={Alert}
        options={{ animation: "slide_from_left" }}
      />
    </Stack.Navigator>
  );
}

function AllSetting() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Setting"
    >
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{ animation: "slide_from_left" }}
      />
      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConditions}
        options={{ animation: "flip" }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ animation: "flip" }}
      />
    </Stack.Navigator>
  );
}

function AllProfile() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="profile"
    >
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{ animation: "slide_from_left" }}
      />
      <Stack.Screen
        name="edit_profile"
        component={EditProfile}
        options={{ animation: "slide_from_left" }}
      />
    </Stack.Navigator>
  );
}
