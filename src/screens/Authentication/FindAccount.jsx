import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useForm } from "react-hook-form";
import { scale, verticalScale } from "react-native-size-matters";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { GlobalStyle } from "../../Constants/GlobalStyle";
import Error from "../../components/Modal/Error";
// import { verify_email_before_password } from "../../redux/actions/AuthActions";
import Loading from "../../components/Modal/Loading";
import { useDispatch } from "react-redux";
import ConnectionModal from "../../components/Modal/ConnectionModal";
import Validation from "../../components/Validation";
// import LogoCard from "../../components/Card/LogoCard";
import { Color } from "../../utils/Color";
import { Font } from "../../utils/Font";
import { EmailRegix } from "../../utils/Urls";

const FindAccount = ({ navigation }) => {
  const dispatch = useDispatch();

  const [isEmailExist, setIsEmailExist] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  const type = "forgot";
  const onSubmit = (data) => {
    navigation.navigate("reset", { user_id: "asdfasdf" });
    // dispatch(
    //   verify_email_before_password(
    //     data,
    //     type,
    //     navigation,
    //     setIsEmailExist,
    //     setLoading
    //   )
    // );
  };

  return (
    <View style={GlobalStyle.grey_container}>
      {/* <LogoCard /> */}
      <View style={styles.MainBox}>
        <Text style={styles.Find}>Find Your Account</Text>
        <Text style={styles.Search}>
          Please enter your email address to search for your account.
        </Text>
        <CustomInput
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
          fontSize={scale(16)}
        />
        {errors.email && <Validation title={errors.email.message} />}
        <View style={[styles.Row, { justifyContent: "flex-end" }]}>
          <CustomButton
            onPress={() => navigation.navigate("SignIn")}
            title="Cancel"
            ButtonStyle={[GlobalStyle.SmallBtn, styles.containerStyle]}
            textStyle={{ color: Color.Main, fontSize: scale(14) }}
          />
          <CustomButton
            onPress={handleSubmit(onSubmit)}
            title="Search"
            ButtonStyle={[
              GlobalStyle.SmallBtn,
              styles.containerStyle,
              { backgroundColor: Color.Main },
            ]}
            textStyle={{ fontSize: scale(13) }}
          />
        </View>
      </View>

      <Error isVisible={isEmailExist} message={"This email does not exists"} />
      <Loading isVisible={loading} />
      <ConnectionModal />
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
    width: "30%",
    height: verticalScale(40),
    marginLeft: scale(10),
  },
});
export default FindAccount;
