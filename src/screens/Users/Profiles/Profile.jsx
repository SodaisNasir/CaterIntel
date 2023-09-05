import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { GlobalStyle } from "../../../Constants/GlobalStyle";
import React, { useCallback, useState } from "react";
import { Color } from "../../../utils/Color";
import { useFocusEffect } from "@react-navigation/native";
import Header from "../../../components/Header";
import { scale, verticalScale } from "react-native-size-matters";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Zocial from "react-native-vector-icons/Zocial";

import { Font } from "../../../utils/Font";

const Profile = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.showBar,
      });
    }, [])
  );
  return (
    <SafeAreaView style={GlobalStyle.grey_container}>
      <Header
        noBack
        edit
        editText="Edit Profile"
        Text="Profile"
        onEditPress={() => navigation.navigate("edit_profile")}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          resizeMode="contain"
          style={styles.circle}
          source={{
            uri: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
          }}
        />
        <View style={[GlobalStyle.Row, styles.margins]}>
          <FontAwesome5 name="user-alt" size={scale(20)} color={Color.Main} />
          <Text style={styles.Text}>Rayn Gostling</Text>
        </View>
        <View style={[GlobalStyle.Row, styles.margins]}>
          <Zocial name="email" size={scale(20)} color={Color.Main} />
          <Text style={styles.Text}>user@gmail.com</Text>
        </View>
        <View style={[GlobalStyle.Row, styles.margins]}>
          <FontAwesome5 name="phone-alt" size={scale(20)} color={Color.Main} />
          <Text style={styles.Text}>5553335553363</Text>
        </View>
      </ScrollView>
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
  Text: {
    color: Color.Black,
    fontFamily: Font.Gilroy500,
    fontSize: scale(14),
    marginLeft: scale(20),
    marginRight: scale(10),
  },
  margins: {
    marginTop: verticalScale(40),
    marginLeft: scale(20),
    marginRight: scale(60),
  },
});

export default Profile;
