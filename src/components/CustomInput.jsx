import React, { forwardRef } from "react";
import { useController, Control } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Color } from "../utils/Color";
import { Font } from "../utils/Font";

const CustomInput = forwardRef((props, ref) => {
  const { field } = useController({
    control: props.control,
    defaultValue: props.defaultValue || "",
    name: props.name,
    rules: props.rules,
  });

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
          placeholderTextColor={
            props.change
              ? props.placeholderTextColor
              : Color.placeholderTextColor
          }
          style={[styles.InputStyles, props.Gapp, props.restyle]}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType}
          textAlignVertical={props.textAlignVertical}
          pattern={props.pattern}
          label={props.label}
          placeholderStyle={props.placeholderStyle}
          fontSize={props.fontSize}
          maxLength={props.maxLength}
          cursorColor={Color.Main}
          keyboardAppearance="dark"
          selectionColor="rgba(12, 19, 79, 0.5)"
        />
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  InputStyles: {
    width: "100%",
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
    marginTop: verticalScale(10),
    width: "100%",
    paddingHorizontal: moderateScale(15),
    height: verticalScale(45),
    backgroundColor: Color.White,
    borderWidth: scale(1),
    borderColor: Color.placeholderTextColor,
    borderRadius: scale(10),
  },
});
export default CustomInput;
