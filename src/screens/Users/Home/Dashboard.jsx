import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useCallback, useState } from "react";
import { Color } from "../../../utils/Color";
import { useFocusEffect } from "@react-navigation/native";
import { GlobalStyle } from "../../../Constants/GlobalStyle";
import ConnectionModal from "../../../components/Modal/ConnectionModal";
import Header from "../../../components/Header";
import Graph from "../../../components/Cards/Graph";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { scale, verticalScale } from "react-native-size-matters";
import ItemModal from "../../../components/Modal/ItemModal";
const Dashboard = ({ navigation }) => {
  const [SelectItem, setSelectItem] = useState(false);
  const [select, setSelect] = useState(false);
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.showBar,
      });
    }, [])
  );
  return (
    <SafeAreaView style={GlobalStyle.grey_container}>
      <StatusBar barStyle="dark-content" backgroundColor={Color.LightGrey} />
      <Header noBack alert Text="DashBoard" />
      <Graph />
      <Pressable
        android_ripple={GlobalStyle.PurpleRipple}
        style={styles.PlusBox}
        onPress={() => setSelectItem(true)}
      >
        <FontAwesome6 name="plus" size={scale(20)} color={Color.LightGrey} />
      </Pressable>
      <ItemModal
        visible={SelectItem}
        onClose={() => setSelectItem(false)}
        selected={select}
        onPress={() => {
          setSelect(true);
          setTimeout(() => {
            setSelectItem(false);
          }, 500);
        }}
      />
      <ConnectionModal />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  PlusBox: {
    position: "absolute",
    bottom: verticalScale(10),
    right: scale(10),
    backgroundColor: "#0C134F",
    borderRadius: 360,
    width: scale(50),
    aspectRatio: 1 / 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});
