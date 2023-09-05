import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { GlobalStyle } from "../Constants/GlobalStyle";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import { Font } from "../utils/Font";
import { Color } from "../utils/Color";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const Header = (props) => {
  const navigation = useNavigation();
  const [notification, setNotification] = useState("");
  useFocusEffect(
    useCallback(() => {
      // Notification(setNotification);
      setNotification(1);
    }, [])
  );
  return (
    <View style={[styles.Container, props.Container, GlobalStyle.Row]}>
      {!props.noBack && (
        <TouchableOpacity
          android_ripple={{ color: Color.Main }}
          onPress={() => navigation.goBack()}
          style={[
            styles.arrowBox,
            { borderColor: props.icon_color ? props.color : Color.Main },
          ]}
        >
          <Ionicons
            name="arrow-back"
            color={props.icon_color ? props.color : Color.Main}
            size={scale(18)}
          />
        </TouchableOpacity>
      )}

      <Text style={[styles.Text, props.TextRestyle]}>{props.Text}</Text>
      {props.alert ? (
        <TouchableOpacity onPress={() => navigation.navigate("Alert")}>
          <Feather name="bell" color={Color.Main} size={scale(18)} />
          <View
            style={[
              styles.Dot,
              {
                backgroundColor: notification
                  ? notification.length > 0
                    ? "red"
                    : Color.Non
                  : Color.Non,
              },
            ]}
          />
        </TouchableOpacity>
      ) : props.edit ? (
        <TouchableOpacity onPress={props.onEditPress}>
          <Text style={styles.editTextStyle}>{props.editText}</Text>
        </TouchableOpacity>
      ) : (
        <Ionicons name="arrow-back" color={Color.Non} size={scale(18)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    justifyContent: "space-between",
    paddingVertical: moderateVerticalScale(20),
    paddingHorizontal: moderateScale(20),
    borderBottomWidth: scale(1),
    borderColor: Color.border,
    marginBottom: verticalScale(15),
  },
  Text: {
    fontFamily: Font.Gilroy700,
    fontSize: scale(18),
    paddingHorizontal: moderateScale(15),
    color: Color.Black,
    textAlignVertical: "center",
  },
  arrowBox: {
    borderWidth: scale(1.3),
    borderRadius: scale(5),
    paddingHorizontal: 2,
    paddingVertical: 1,
  },
  Dot: {
    width: scale(5),
    aspectRatio: 1 / 1,
    position: "absolute",
    right: 3,
    top: 2,
    borderRadius: 100,
  },
  editTextStyle: {
    color: Color.Black,
    fontSize: scale(15),
    fontFamily: Font.Gilroy600,
  },
});
export default Header;
