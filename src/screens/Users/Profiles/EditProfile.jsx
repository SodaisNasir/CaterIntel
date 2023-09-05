import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { GlobalStyle } from "../../../Constants/GlobalStyle";
import { Color } from "../../../utils/Color";
import { useFocusEffect } from "@react-navigation/native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Header from "../../../components/Header";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import ImagePickerModal from "../../../components/Modal/ImagePickerModal";
import CustomInput from "../../../components/CustomInput";
import { EmailRegix, NameRegix } from "../../../utils/Urls";
import { useForm } from "react-hook-form";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Zocial from "react-native-vector-icons/Zocial";
import Validation from "../../../components/Validation";
import CustomButton from "../../../components/CustomButton";

const EditProfile = ({ navigation }) => {
  const [saveImage, setSaveImage] = useState();
  const [pickerModal, setPickerModal] = useState(false);
  const [activeLoading, setActiveLoading] = useState(false);

  const togglePickerModal = () => {
    setPickerModal(!pickerModal);
  };

  const [show, setShow] = useState(true);
  const onSubmit = () => {
    navigation.goBack();
  };
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
        Toast.show("Picker is Canceled");
      } else if (res.error) {
        console.log("====> imagePicker");
      } else if (res.customButton) {
        alert(res.customButton);
      } else {
        setSaveImage({
          name: res.assets?.[0]?.fileName,
          uri: res.assets?.[0]?.uri,
          type: res.assets?.[0]?.type,
        });
        setShow(false);
      }
    });
  };
  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    launchCamera(options, (res) => {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      console.log("Response = ", res);
      if (res.didCancel) {
        console.log("User cancelled image picker");
      } else if (res.error) {
        console.log("ImagePicker Error: ", res.error);
      } else {
        setSaveImage({
          name: res.assets?.[0]?.fileName,
          uri: res.assets?.[0]?.uri,
          type: res.assets?.[0]?.type,
        });
        setShow(false);
      }
    });
  };
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, [])
  );
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  return (
    <SafeAreaView style={GlobalStyle.grey_container}>
      <Header
        edit
        editText="Cancel"
        Text="Edit Profile"
        onEditPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={togglePickerModal}>
          <Image
            resizeMode="contain"
            style={styles.circle}
            source={
              show
                ? {
                    uri: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
                  }
                : { uri: saveImage.uri }
            }
          />
        </TouchableOpacity>
        <View style={GlobalStyle.Padding}>
          <View style={GlobalStyle.Row}>
            <FontAwesome5 name="user-alt" size={scale(20)} color={Color.Main} />
            <CustomInput
              style={styles.CustomInputRestyle}
              Gapp={styles.Gapp}
              control={control}
              keyboardType="default"
              name="name"
              placeholder="Enter Your Name"
              //   defaultValue={userDetails.name}
              //   value={userDetails.name}
              rules={{
                required: "Name is required",
                value: NameRegix,
                message: "Edit Your Name",
              }}
            />
            {errors.name && <Validation title={errors.name.message} />}
          </View>
          <View style={GlobalStyle.Row}>
            <Zocial name="email" size={scale(20)} color={Color.Main} />
            <CustomInput
              style={styles.CustomInputRestyle}
              Gapp={styles.Gapp}
              control={control}
              keyboardType="default"
              name="email"
              placeholder="Enter Your Name"
              //   defaultValue={userDetails.name}
              //   value={userDetails.name}
              rules={{
                required: "Email is required",
                value: EmailRegix,
                message: "Edit Your Email",
              }}
            />
            {errors.name && <Validation title={errors.name.message} />}
          </View>
          <View style={GlobalStyle.Row}>
            <FontAwesome5
              name="phone-alt"
              size={scale(20)}
              color={Color.Main}
            />
            <CustomInput
              style={styles.CustomInputRestyle}
              Gapp={styles.Gapp}
              control={control}
              keyboardType="numeric"
              name="phone"
              placeholder="Edit Your Phone Number"
              //   defaultValue={userDetails.name}
              //   value={userDetails.name}
              rules={{
                required: "Phone Number is required",
                value: EmailRegix,
                message: "*Enter a Phone Number",
              }}
            />
            {errors.name && <Validation title={errors.name.message} />}
          </View>
        </View>
        <CustomButton
          onPress={handleSubmit(onSubmit)}
          title="Save Changes"
          ButtonStyle={{
            marginTop: verticalScale(40),
            width: "75%",
          }}
        />
        <View style={GlobalStyle.RowContrainer} />
      </ScrollView>
      <ImagePickerModal
        isVisible={pickerModal}
        onClose={togglePickerModal}
        PressPicture={() => {
          photosave();
          togglePickerModal();
        }}
        PressCamera={() => {
          cameraLaunch();
          togglePickerModal();
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  circle: {
    width: scale(110),
    height: scale(110),
    backgroundColor: Color.White,
    borderRadius: scale(100),
    alignSelf: "center",
  },
  CustomInputRestyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: Color.White,
    borderRadius: 0,
    width: "90%",
    marginTop: verticalScale(15),
    marginLeft: scale(15),
    paddingHorizontal: 0,
    height: verticalScale(40),
    backgroundColor: Color.Non,
  },
  Gapp: {
    paddingHorizontal: moderateScale(5),
  },
});

export default EditProfile;
