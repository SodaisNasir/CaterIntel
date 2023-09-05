import React, { useCallback, useState } from "react";
import { ScrollView, SafeAreaView, View, Switch } from "react-native";
import { GlobalStyle } from "../../../Constants/GlobalStyle";
import SettingItem from "../../../components/SettingItem";
import CustomButton from "../../../components/CustomButton";
import { useFocusEffect } from "@react-navigation/native";
import DeleteModal from "../../../components/Modal/DeleteModal";
import ConnectionModal from "../../../components/Modal/ConnectionModal";
import Loading from "../../../components/Modal/Loading";
import { useDispatch } from "react-redux";
import { IS_SIGN_IN } from "../../../redux/reducer/Holder";
import { verticalScale, moderateScale } from "react-native-size-matters";
import Header from "../../../components/Header";

const Setting = ({ navigation }) => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [DeleteModalVisible, setDeleteModalVisible] = useState(false);

  const logOut = async () => {
    // dispatch(Logout(setLoad))
    dispatch({ type: IS_SIGN_IN, payload: null });
  };

  const Delete = () => {
    // dispatch(Delete_Account());
    setDeleteModalVisible(false);
  };

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.showBar,
      });
    }, [])
  );
  return (
    <SafeAreaView style={GlobalStyle.grey_container}>
      <Header noBack Text="Setting" alert />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SettingItem
          onPress={() =>
            navigation.navigate("TermsAndConditions", {
              path: "user",
              type: "term",
            })
          }
          Title="Terms and conditions"
        />
        <SettingItem
          onPress={() =>
            navigation.navigate("TermsAndConditions", {
              path: "user",
              type: "privacy",
            })
          }
          Title="Privacy Policy"
        />
        {/* {userDetails?.social_id ? null : (
          <SettingItem
            onPress={() => navigation.navigate('ChangePassword')}
            Title="Change Password"
          />
        )} */}
        <SettingItem
          onPress={() => navigation.navigate("ChangePassword")}
          Title="Change Password"
        />
        <SettingItem
          onPress={() => setDeleteModalVisible(true)}
          Title="Delete account"
          Delete
        />
        <View style={{ paddingRight: moderateScale(12) }}>
          <View style={GlobalStyle.VerticalSpace} />
          <CustomButton
            onPress={() => logOut()}
            title="Log Out"
            containerStyle={{ marginTop: verticalScale(25) }}
          />
        </View>
        <View style={{ height: verticalScale(10) }} />
      </ScrollView>
      <DeleteModal
        visible={DeleteModalVisible}
        OnClose={() => setDeleteModalVisible(false)}
        DeletePress={Delete}
        value="this account"
        account
      />
      <ConnectionModal />
      <Loading isVisible={load} />
    </SafeAreaView>
  );
};

export default Setting;
