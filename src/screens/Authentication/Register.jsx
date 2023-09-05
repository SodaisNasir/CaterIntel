import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Color } from "../../utils/Color";
import { Font } from "../../utils/Font";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import CustomInput from "../../components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/CustomButton";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import PasswordInput from "../../components/PasswordInput";
import { GlobalStyle } from "../../Constants/GlobalStyle";
import { launchImageLibrary } from "react-native-image-picker";
import Error from "../../components/Modal/Error";
import { useDispatch } from "react-redux";
// import { verify_email_before_registration } from "../../redux/actions/AuthActions";
import Loading from "../../components/Modal/Loading";
import Toast from "react-native-simple-toast";
import ConnectionModal from "../../components/Modal/ConnectionModal";
import Validation from "../../components/Validation";
import { EmailRegix, NameRegix } from "../../utils/Urls";
// import LogoCard from "../../components/Card/LogoCard";

const Register = ({ navigation, route }) => {
  //   const { social, socialData } = route.params;
  const dispatch = useDispatch();
  const [errorModal, setErrorModal] = useState(false);
  const [isEmailExist, setIsEmailExist] = useState(false);
  const [photoModal, setPhotoModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const OS = Platform.OS;

  //   console.log("socialData", socialData);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const [saveImage, setSaveImage] = useState("");

  const photosave = () => {
    let options = {
      storageOptions: {
        mediaType: "photo",
        path: "image",
        includeExtra: true,
      },
      selectionLimit: 1,
    };

    launchImageLibrary(options, (res) => {
      if (res.didCancel) {
        Toast.show("You have cancelled Image picker");
      } else if (res.error) {
        console.log("ImagePicker", res.error);
      } else {
        setSaveImage({
          name: res.assets?.[0]?.fileName,
          uri: res.assets?.[0]?.uri,
          type: res.assets?.[0]?.type,
        });
      }
    });
  };

  // const photosave = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 300,
  //     cropping: true,
  //   }).then(image => {
  //     // console.log('image ==>',image);
  //     setSaveImage({
  //       uri: image.path,
  //       type: image.mime
  //     });
  //   });
  // };

  const type = "signup";
  const onSubmit = (data) => {
    if (saveImage?.uri) {
      if (data.password == data.confirm_password) {
        // dispatch(
        //   verify_email_before_registration(
        //     data,
        //     type,
        //     navigation,
        //     saveImage,
        //     setIsEmailExist,
        //     setLoading,
        //     OS
        //   )
        // );
        navigation.navigate("otp", { type: type, data, saveImage });
      } else {
        setErrorModal(true);
        setTimeout(() => {
          setErrorModal(false);
        }, 2000);
      }
    } else {
      setPhotoModal(true);
      setTimeout(() => {
        setPhotoModal(false);
      }, 2000);
    }
  };

  return (
    <SafeAreaView style={GlobalStyle.grey_container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <LogoCard /> */}
        <Text style={styles.SignUpText}>Sign In</Text>
        <Pressable onPress={photosave} style={styles.ImageBox}>
          <Image
            style={[GlobalStyle.Image, { borderRadius: scale(100) }]}
            source={
              saveImage
                ? { uri: saveImage?.uri }
                : require("../../assets/image/default.png")
            }
          />
        </Pressable>
        <View style={{ paddingHorizontal: moderateScale(20) }}>
          <CustomInput
            fontSize={scale(16)}
            control={control}
            keyboardType="default"
            name="name"
            // defaultValue={social == "social" ? socialData?.user_name : ""}
            // value={social == "social" ? socialData?.user_name : ""}
            rules={{
              required: "User Name is required",
              value: NameRegix,
              message: "Enter a User Name",
            }}
            placeholder="User Name"
          />
          {errors.name && <Validation title={errors.name.message} />}
          <CustomInput
            fontSize={scale(16)}
            MaterialIcons={true}
            MaterialIcons_Name="email"
            size={scale(20)}
            control={control}
            // defaultValue={social == "social" ? socialData?.email : ""}
            // value={social == "social" ? socialData?.email : ""}
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
          <CustomInput
            control={control}
            keyboardType="numeric"
            name="phone_number"
            rules={{
              required: "*Phone Number is required",
              minLength: {
                value: 10,
                message: "*Phone Number is not valid",
              },
              maxLength: {
                value: 16,
                message: "*Phone Number is not valid",
              },
            }}
            placeholder="Phone Number"
            fontSize={scale(16)}
          />
          {errors.phone_number && (
            <Validation title={errors.phone_number.message} />
          )}

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
            placeholder="Password"
            placeholderTextColor={"#32323266"}
            fontSize={scale(16)}
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
            fontSize={scale(16)}
            placeholderTextColor={"#32323266"}
          />
          {errors.confirm_password && (
            <Validation title={errors.confirm_password.message} />
          )}

          <CustomButton
            onPress={handleSubmit(onSubmit)}
            title="Register"
            textStyle={{ color: Color.White, fontSize: scale(23) }}
          />
        </View>
        <View style={{ height: verticalScale(10) }} />
      </ScrollView>
      <Error isVisible={errorModal} message={"Password is not matched"} />
      <Error isVisible={isEmailExist} message={"This email already exists"} />
      <Error isVisible={photoModal} message={"please Upload a Photo"} />
      <Loading isVisible={loading} />
      <ConnectionModal />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SignUpText: {
    textAlign: "center",
    color: Color.Black,
    fontFamily: Font.Gilroy500,
    fontSize: scale(30),
    marginVertical: verticalScale(20),
  },
  ImagePickerBox: {
    borderWidth: scale(1),
    borderRadius: scale(10),
    borderColor: Color.Main,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: moderateScale(20),
    justifyContent: "space-between",
    marginTop: verticalScale(10),
    height: verticalScale(45),
  },
  Upload: {
    color: Color.Black,
    fontFamily: Font.Gilroy500,
    fontSize: scale(16),
  },
  ImageBox: {
    width: scale(150),
    aspectRatio: 1 / 1,
    borderRadius: 100,
    alignSelf: "center",
    borderWidth: scale(1),
    borderColor: Color.Black,
  },
});

export default Register;
