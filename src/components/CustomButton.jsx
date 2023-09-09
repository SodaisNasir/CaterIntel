import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { scale, verticalScale } from "react-native-size-matters";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Font } from "../utils/Font";
import { Color } from "../utils/Color";

const CustomButton = (props) => {
  return (
    <Pressable
      android_ripple={props.Ripple}
      disabled={props.disabled}
      onPress={props.onPress}
      style={[styles.containerStyle, props.ButtonStyle]}
    >
      {props.File && (
        <Feather
          style={{ paddingHorizontal: 5 }}
          name="upload"
          color={Color.MidGrey}
          size={scale(20)}
        />
      )}
      <Text style={[styles.font, props.textStyle]}>{props.title}</Text>
      {props.selected && (
        <AntDesign
          style={{ paddingHorizontal: 5 }}
          name="checkcircle"
          color={Color.White}
          size={scale(20)}
        />
      )}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  containerStyle: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(100),
    marginTop: verticalScale(15),
    alignSelf: "center",
    backgroundColor: Color.Main,
    height: verticalScale(50),
    borderWidth: 1,
    flexDirection: "row",
    overflow: "hidden",
    borderColor: Color.Main,
  },

  font: {
    color: Color.white,
    fontSize: scale(15),
    textTransform: "capitalize",
    fontFamily: Font.Poppins400,
    top: 1.5,
  },
});
