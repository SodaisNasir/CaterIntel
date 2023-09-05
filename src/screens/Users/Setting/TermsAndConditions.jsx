import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import { useFocusEffect } from "@react-navigation/native";
import { GlobalStyle } from "../../../Constants/GlobalStyle";
import RenderHtml from "react-native-render-html";
import { Color } from "../../../utils/Color";
import { Font } from "../../../utils/Font";
import Header from "../../../components/Header";
import { BaseUrl } from "../../../utils/Urls";
import Loading from "../../../components/Modal/Loading";
import CustomButton from "../../../components/CustomButton";
import ConnectionModal from "../../../components/Modal/ConnectionModal";

const TermsAndConditions = ({ navigation, route }) => {
  const { path, type } = route.params;
  const WhatToShow = type == "term" ? "Terms and Conditions" : "Privacy";
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const { width } = Dimensions.get("window");
  const onSubmit = () => {
    navigation.goBack();
  };

  const getHtml = async () => {
    setLoading(true);
    try {
      let base_url = `${BaseUrl}show-setting`;
      let myData = new FormData();

      // myData.append("token", token);
      myData.append("type", WhatToShow);

      const response = await fetch(base_url, {
        body: myData,
        method: "post",
      });
      const responseData = await response.json();
      if (responseData.success.status === 200) {
        setData(responseData.success.data);
        setLoading(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
      getHtml();
    }, [])
  );

  let result = data?.description?.replace(
    /<div(.*?)>/gi,
    `<div style='color: ${Color.Black};font-family: ${
      Font.Poppins500
    }; font-size: ${"15px"};'>`
  );

  const source = {
    html: result,
  };

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor={Color.Main} barStyle="light-content" />
      <View
        style={{
          marginTop:
            path == "auth" ? StatusBar.currentHeight + verticalScale(10) : 0,
        }}
      >
        <Header
          Text={type !== "term" ? "Privacy Policy" : "Terms and Conditions"}
          TextRestyle={{ color: Color.White }}
          color={Color.White}
          icon_color
        />
      </View>
      <View style={styles.MainView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <View
            style={{
              height: verticalScale(100),
              width: '100%',
              alignSelf: 'center',
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../assets/image/logo.png')}
              style={GlobalStyle.Image}
            />
          </View> */}
          <RenderHtml contentWidth={width} source={source} />

          <CustomButton
            onPress={onSubmit}
            title="Accept and Continue"
            containerStyle={{
              width: "85%",
              alignSelf: "center",
              marginBottom: verticalScale(20),
            }}
          />
          <View style={GlobalStyle.VerticalSpace} />
        </ScrollView>
        <ConnectionModal />
        <Loading isVisible={loading} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainView: {
    width: "90%",
    height: "88%",
    backgroundColor: Color.LightGrey,
    borderRadius: scale(20),
    alignSelf: "center",
    paddingHorizontal: moderateScale(15),
    borderWidth: scale(1),
    borderColor: Color.Main,
  },
  Container: {
    flex: 1,
    backgroundColor: Color.Main,
  },
});
export default TermsAndConditions;
