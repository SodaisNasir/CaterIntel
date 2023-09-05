import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Color } from "../utils/Color";
import { GlobalStyle } from "../Constants/GlobalStyle";
import { Font } from "../utils/Font";
const SettingItem = (props) => {
  return (
    <>
      <Pressable
        android_ripple={{ color: props.Notification ? Color.Non : Color.Main }}
        onPress={props.onPress}
        activeOpacity={0.6}
        style={styles.Container}
      >
        <Text style={styles.Text}>{props.Title}</Text>
        <View style={GlobalStyle.Row}>
          {props.Notification ? (
            props.children
          ) : props.Delete ? (
            <View style={styles.Circle}>
              <MaterialCommunityIcons
                name="alert-remove"
                size={scale(16)}
                color="red"
              />
            </View>
          ) : (
            <View style={styles.Circle}>
              <Entypo
                name="chevron-right"
                size={scale(18)}
                color={Color.Grey}
              />
            </View>
          )}
        </View>
      </Pressable>
      <View
        style={{
          borderBottomWidth: scale(1),
          borderColor: Color.border,
          marginLeft: scale(15),
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: verticalScale(52),
    paddingHorizontal: moderateScale(15),
  },
  Text: {
    color: Color.Black,
    fontFamily: Font.Poppins500,
    fontSize: scale(16),
    top: verticalScale(2),
  },
  Circle: {
    backgroundColor: Color.White,
    height: scale(30),
    width: scale(30),
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(8),
  },
  Image: {
    height: scale(15),
    width: scale(15),
  },
  Number: {
    color: Color.White,
    fontFamily: Font.Poppins500,
    top: 1.5,
  },
  Circle2: {
    backgroundColor: Color.Yellow,
    height: scale(30),
    width: scale(25),
    aspectRatio: 1 / 1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(20),
  },
});

export default SettingItem;
