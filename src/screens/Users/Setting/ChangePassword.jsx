import React, { useCallback, useState } from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { useForm } from "react-hook-form";
import CustomButton from "../../../components/CustomButton";
import { Font } from "../../../utils/Font";
import PasswordInput from "../../../components/PasswordInput";
import { GlobalStyle } from "../../../Constants/GlobalStyle";
import { useFocusEffect } from "@react-navigation/native";
import CustomLotti from "../../../components/Modal/CustomLotti";
import Error from "../../../components/Modal/Error";

// import { Update } from '../../../redux/actions/UserAction';
import Loading from "../../../components/Modal/Loading";
import Validation from "../../../components/Validation";
import ConnectionModal from "../../../components/Modal/ConnectionModal";
import { useDispatch } from "react-redux";
import { Color } from "../../../utils/Color";
import Header from "../../../components/Header";
import { IS_SIGN_IN } from "../../../redux/reducer/Holder";

const ChangePassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const [passwordChange, setPasswordChange] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    if (data.new_password == data.confirm_password) {
      // dispatch(Update(data, setPasswordChange, setLoading, setPasswordError));
      dispatch({ type: IS_SIGN_IN, payload: null });
    } else {
      setErrorModal(true);
      setTimeout(() => {
        setErrorModal(false);
      }, 2000);
    }
  };

  useFocusEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    })
  );

  return (
    <SafeAreaView style={GlobalStyle.grey_container}>
      <Header Text="Change Password" />
      <View style={{ paddingHorizontal: moderateScale(15) }}>
        <Text style={styles.Heading}>Did you forgot your Password?</Text>
        <PasswordInput
          fontSize={scale(16)}
          control={control}
          name="password"
          rules={{
            required: "*Password is required",
            minLength: {
              value: 8,
              message: "*Password too short (minimum length is 8)",
            },
            maxLength: {
              value: 16,
              message: "*Password too long (maximum length is 16)",
            },
          }}
          placeholder="Password"
          maxLength={20}
          placeholderTextColor={"#32323266"}
        />
        {errors.password && <Validation title={errors.password.message} />}
        <PasswordInput
          fontSize={scale(16)}
          control={control}
          name="new_password"
          rules={{
            required: "*New Password is required To Reset",
            minLength: {
              value: 8,
              message: "*Password too short (minimum length is 8)",
            },
            maxLength: {
              value: 16,
              message: "*Password too long (maximum length is 16)",
            },
          }}
          placeholder="New Password"
          maxLength={20}
          placeholderTextColor={"#32323266"}
        />
        {errors.new_password && (
          <Validation title={errors.new_password.message} />
        )}
        <PasswordInput
          fontSize={scale(16)}
          control={control}
          name="confirm_password"
          rules={{
            required: "*Confirm Password is required To Reset",
            minLength: {
              value: 8,
              message: "*Password too short (minimum length is 8)",
            },
            maxLength: {
              value: 16,
              message: "*Password too long (maximum length is 16)",
            },
          }}
          placeholder="Confirm Password"
          maxLength={20}
          placeholderTextColor={"#32323266"}
        />
        {errors.confirm_password && (
          <Validation title={errors.confirm_password.message} />
        )}
        <Validation
          restyle={{ marginTop: verticalScale(20), width: "80%" }}
          title="After Your change password Your account will be Logout from this "
        />
        <CustomButton
          title="Change Password"
          textStyle={{ color: Color.White }}
          containerStyle={[GlobalStyle.CustomButtonRestyle, { width: "90%" }]}
          onPress={handleSubmit(onSubmit)}
        />
        <CustomLotti
          isVisible={passwordChange}
          source={require("../../../assets/lotti/passwordchange.json")}
          Title="Password has been changed"
          TextRestyle={{ color: Color.ThemeBlue }}
        />

        <Error isVisible={errorModal} message={"Password is not matched"} />
        <Loading isVisible={loading} />
        <CustomLotti
          isVisible={passwordError}
          source={require("../../../assets/lotti/passwrderror.json")}
          Title="Password your gave is not Correct"
          TextRestyle={{ color: Color.Danger }}
        />
      </View>
      <ConnectionModal />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Heading: {
    fontSize: scale(22),
    color: Color.Main,
    fontFamily: Font.Gilroy700,
    marginTop: verticalScale(10),
  },
});
export default ChangePassword;
