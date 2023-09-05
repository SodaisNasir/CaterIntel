import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Color } from "../../utils/Color";
import { GlobalStyle } from "../../Constants/GlobalStyle";
import { moderateScale, scale } from "react-native-size-matters";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import PasswordInput from "../../components/PasswordInput";
import Validation from "../../components/Validation";
import CustomInput from "../../components/CustomInput";
import { Font } from "../../utils/Font";
import { IS_SIGN_IN } from "../../redux/reducer/Holder";
import { EmailRegix } from "../../utils/Urls";
import CustomButton from "../../components/CustomButton";

const Login = ({ navigation }) => {
  const [index, setIndex] = useState(100);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    dispatch({ type: IS_SIGN_IN, payload: data.email });
  };

  return (
    <SafeAreaView style={GlobalStyle.grey_container}>
      <StatusBar
        translucent={false}
        backgroundColor={Color.LightGrey}
        barStyle="dark-content"
      />
      <View style={styles.MainContainer}>
        <Text style={[GlobalStyle.Heading, { fontSize: scale(25) }]}>
          Welcome Back
        </Text>
        <Text style={[GlobalStyle.Heading, { color: Color.Grey }]}>
          Please enter your details to sign in
        </Text>
      </View>
      <View
        style={[styles.MainContainer, { paddingHorizontal: moderateScale(15) }]}
      >
        <CustomInput
          onFocus={() => {
            setIndex(0);
          }}
          style={{
            borderColor:
              index === 0
                ? Color.Main
                : errors.email
                ? Color.red
                : Color.border,
          }}
          Heading="Email"
          control={control}
          keyboardType="email-address"
          name="email"
          rules={{
            required: "*Email is required",
            pattern: {
              value: EmailRegix,
              message: "Email is not valid",
            },
          }}
          placeholder="Email Address"
        />
        {errors.email && <Validation title={errors.email.message} />}
        <PasswordInput
          onFocus={() => {
            setIndex(1);
          }}
          style={{
            borderColor:
              index === 1
                ? Color.Main
                : errors.password
                ? Color.red
                : Color.border,
          }}
          Heading="Password"
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
        <Text
          onPress={() =>
            navigation.navigate("find", {
              type: "find",
            })
          }
          style={[GlobalStyle.InputHeading, { textAlign: "right" }]}
        >
          Forgot Password?
        </Text>
        <CustomButton
          Ripple={GlobalStyle.WhiteRipple}
          onPress={handleSubmit(onSubmit)}
          ButtonStyle={styles.MainContainer}
          title="Log In"
        />
        <Text
          style={[
            GlobalStyle.InputHeading,
            styles.MainContainer,
            { textAlign: "center", fontSize: scale(13) },
          ]}
        >
          Don't have an account?{"  "}
          <Text
            onPress={() => navigation.navigate("register")}
            style={[
              GlobalStyle.InputHeading,
              { color: Color.Main, fontSize: scale(13) },
            ]}
          >
            Sign Up{" "}
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    marginTop: "12%",
  },
  SubHeading: {
    textAlign: "center",
    color: Color.Black,
    fontSize: scale(16),
    fontFamily: Font.Poppins500,
  },
});

export default Login;
