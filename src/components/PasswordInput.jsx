import React, { forwardRef, useState } from "react";
import { useController, Control } from "react-hook-form";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Color } from "../utils/Color";
import { Font } from "../utils/Font";
import Entypo from "react-native-vector-icons/Entypo";
import { GlobalStyle } from "../Constants/GlobalStyle";

const PasswordInput = forwardRef((props, ref) => {
  const { field } = useController({
    control: props.control,
    defaultValue: props.defaultValue || "",
    name: props.name,
    rules: props.rules,
  });

  const [password, setPassword] = useState(true);

  return (
    <>
      <View style={[styles.smallbox, props.style]}>
        <TextInput
          onFocus={props.onFocus}
          textContentType={props.textContentType}
          value={field.value}
          ref={ref}
          onChangeText={field.onChange}
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          placeholder={props.placeholder}
          placeholderTextColor={Color.placeholderTextColor}
          style={[styles.InputStyles, props.Gapp, props.restyle]}
          secureTextEntry={password}
          keyboardType={"default"}
          textAlignVertical={props.textAlignVertical}
          pattern={props.pattern}
          label={props.label}
          placeholderStyle={props.placeholderStyle}
          fontSize={props.fontSize}
          maxLength={props.maxLength}
          cursorColor={Color.Main}
          keyboardAppearance="dark"
          selectionColor={Color.Main}
        />
        <Entypo
          color="#575E6E"
          size={scale(20)}
          onPress={() => setPassword(!password)}
          name={password ? "eye-with-line" : "eye"}
        />
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  InputStyles: {
    width: "80%",
    height: "100%",
    color: Color.Black,
    fontFamily: Font.Gilroy500,
    fontSize: scale(15),
  },
  smallbox: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: verticalScale(15),
    width: "100%",
    paddingHorizontal: moderateScale(15),
    height: verticalScale(45),
    backgroundColor: Color.White,
    borderWidth: scale(1),
    borderColor: Color.placeholderTextColor,
    borderRadius: scale(10),
  },
});
export default PasswordInput;
