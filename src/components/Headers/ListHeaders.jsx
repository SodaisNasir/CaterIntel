import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import AntDesign from "react-native-vector-icons/AntDesign";
import { GlobalStyle } from "../../Constants/GlobalStyle";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../utils/Color";
import { Font } from "../../utils/Font";

const ListHeader = (props) => {
  const navigation = useNavigation();
  return (
    <View style={[GlobalStyle.Row, styles.container]}>
      <View style={GlobalStyle.Row}>
        {props.Logo ? (
          <Image style={styles.Image} source={props.source} />
        ) : null}
        <Text style={[styles.Title, props.TitleRestyle]}>{props.Title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    marginTop: verticalScale(20),
    paddingHorizontal: moderateScale(10),
  },
  Image: {
    width: scale(22),
    height: verticalScale(22),
    marginRight: scale(10),
  },
  Title: {
    fontSize: scale(15),
    fontFamily: Font.Poppins600,
    color: Color.Black,
  },
  Text: {
    color: Color.Black,
    fontSize: scale(12),
    fontFamily: Font.Poppins500,
    top: verticalScale(1),
  },
  MoreBox: {
    backgroundColor: Color.White,
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateVerticalScale(5),
    borderRadius: scale(20),
  },
});

export default ListHeader;
