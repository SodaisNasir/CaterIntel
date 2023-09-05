import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import CustomButton from "../../components/CustomButton";
import { useForm } from "react-hook-form";
import PasswordInput from "../../components/PasswordInput";
import { GlobalStyle } from "../../Constants/GlobalStyle";
import Error from "../../components/Modal/Error";
import CustomLotti from "../../components/Modal/CustomLotti";
// import { update_password } from "../../redux/actions/AuthActions";
import Loading from "../../components/Modal/Loading";
import ConnectionModal from "../../components/Modal/ConnectionModal";
import Validation from "../../components/Validation";
// import LogoCard from "../../components/Card/LogoCard";
import { Color } from "../../utils/Color";
import { Font } from "../../utils/Font";

const Reset = ({ route, navigation }) => {
  // const { user_id } = route.params;
  // console.log("user_id", user_id);
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [passwordChange, setPasswordChange] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const type = "auth";
  const onSubmit = (data) => {
    if (data.password == data.confirm_password) {
      navigation.navigate('login')
      // update_password(
      //   data,
      //   setPasswordChange,
      //   navigation,
      //   user_id,
      //   setLoading,
      //   type
      // );
    } else {
      setErrorModal(true);
      setTimeout(() => {
        setErrorModal(false);
      }, 2000);
    }
  };

  return (
    <View style={GlobalStyle.grey_container}>
      {/* <ImageBackground
        source={require("../../assets/image/Bacground/reset.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      > */}
      {/* <LogoCard /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.MainBox}>
          <Text style={styles.Find}>Reset Your Password</Text>
          <Text style={styles.Search}>
            Please enter your{" "}
            <Text style={{ color: Color.Yellow }}>New Password.</Text> Password
            must be on 8 characters
          </Text>
          <PasswordInput
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
            placeholder="New Password"
            maxLength={16}
            fontSize={scale(16)}
            placeholderTextColor={"#32323266"}
          />
          {errors.password && <Validation title={errors.password.message} />}
          <PasswordInput
            control={control}
            name="confirm_password"
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
            placeholder="Confirm Password"
            maxLength={16}
            fontSize={scale(16)}
            placeholderTextColor={"#32323266"}
          />

          {errors.confirm_password && (
            <Validation title={errors.confirm_password.message} />
          )}
          <CustomButton
            onPress={handleSubmit(onSubmit)}
            title="Confirm"
            containerStyle={[
              GlobalStyle.CustomButtonRestyle,
              styles.containerStyle,
            ]}
            textStyle={{ color: Color.ThemeBlue }}
          />
        </View>
      </ScrollView>
      <Error
        isVisible={errorModal}
        onClose={() => setErrorModal(false)}
        message={"Password is not matched"}
      />
      <CustomLotti
        isVisible={passwordChange}
        source={require("../../assets/lotti/passwordchange.json")}
        Title="Password has been changed"
        TextRestyle={{ color: Color.ThemeBlue }}
      />
      <Loading isVisible={loading} />
      <ConnectionModal />
      {/* </ImageBackground> */}
    </View>
  );
};
const styles = StyleSheet.create({
  Find: {
    color: Color.Main,
    fontFamily: Font.Gilroy500,
    fontSize: scale(30),
    textAlign: "center",
  },
  Search: {
    color: Color.Main,
    fontFamily: Font.Gilroy500,
    fontSize: scale(16),
    textAlign: "center",
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
  },
  MainBox: {
    marginTop: "25%",
    marginBottom: "10%",
    marginHorizontal: scale(20),
  },
  Row: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerStyle: {
    backgroundColor: Color.White,
    borderColor: Color.ThemeBlue,
    marginTop: "15%",
  },
});

export default Reset;
