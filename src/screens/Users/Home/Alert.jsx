import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useCallback, useState } from "react";
import { GlobalStyle } from "../../../Constants/GlobalStyle";
import Header from "../../../components/Header";
import LinearGradient from "react-native-linear-gradient";
import { SwipeListView } from "react-native-swipe-list-view";
import Feather from "react-native-vector-icons/Feather";
import { Color } from "../../../utils/Color";
import { Font } from "../../../utils/Font";
import { notification } from "../../../Constants/Data";
import ConnectionModal from "../../../components/Modal/ConnectionModal";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import AlertLoader from "../../../components/Modal/AlertLoader";
import { useFocusEffect } from "@react-navigation/native";
import moment from "moment";

const Alert = ({ navigation }) => {
  // const [notification, setNotification] = useState('');
  const [load, setLoad] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const Read = (item) => {
    // ReadNotification(item);
    // Notification(setNotification, setLoad);
  };

  const onRefresh = () => {
    // setRefreshing(true);
    // Notification(setNotification, setLoad);
    // setRefreshing(false);
  };

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
      //   Notification(setNotification, setLoad);
    }, [])
  );
  return (
    <SafeAreaView style={GlobalStyle.grey_container}>
      <Header Text="Notification" />
      <View
        style={{
          marginBottom: scale(70),
        }}
      >
        {load ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <AlertLoader />
            <AlertLoader />
            <AlertLoader />
            <AlertLoader />
            <AlertLoader />
            <AlertLoader />
            <AlertLoader />
            <AlertLoader />
            <AlertLoader />
            <AlertLoader />
            <AlertLoader />
            <AlertLoader />
          </ScrollView>
        ) : (
          <SwipeListView
            onRefresh={onRefresh}
            refreshing={refreshing}
            data={notification}
            ListEmptyComponent={() => {
              return <EmptyCard />;
            }}
            scrollEnabled
            showsVerticalScrollIndicator={false}
            style={{ height: "100%" }}
            renderItem={({ item }) => {
              return (
                <View data={item} style={[styles.Main, GlobalStyle.Row]}>
                  <View style={styles.ImageBox}>
                    <Image
                      style={[GlobalStyle.Image, { borderRadius: 100 }]}
                      resizeMode="cover"
                      source={{ uri: item.image }}
                    />
                  </View>
                  <View style={{ marginHorizontal: scale(15) }}>
                    <View style={GlobalStyle.Row}>
                      <Text style={styles.Name}>{item.name}</Text>
                      <Text style={styles.About}>{item.notification}</Text>
                    </View>
                    <Text style={styles.Time}>
                      {moment(item.updated_at).startOf("hour").fromNow()}
                    </Text>
                  </View>
                </View>
              );
            }}
            renderHiddenItem={({ item }) => (
              <View style={styles.rowBack}>
                <LinearGradient
                  colors={[Color.DarkBlue, Color.Sky, Color.Main]}
                  style={{ borderRadius: scale(10) }}
                >
                  <TouchableOpacity
                    onPress={() => Read(item)}
                    style={styles.IconBox}
                  >
                    <Feather
                      name="check"
                      size={scale(22)}
                      color={Color.White}
                    />
                    <Text style={styles.Read}>Read</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            )}
            swipeDirection={"right"}
            disableRightSwipe
            rightOpenValue={scale(-95)}
          />
        )}
      </View>
      <ConnectionModal />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Main: {
    paddingHorizontal: moderateScale(10),
    height: scale(80),
    backgroundColor: "#fff",
    marginBottom: verticalScale(20),
    borderRadius: scale(10),
    width: "90%",
    alignSelf: "center",
    borderWidth: scale(1),
    borderColor: Color.Main,
  },
  rowBack: {
    alignItems: "flex-end",
    justifyContent: "center",
    marginRight: "7%",
  },
  IconBox: {
    width: scale(80),
    height: scale(80),
    justifyContent: "center",
    alignItems: "center",
  },
  ImageBox: {
    width: scale(45),
    height: scale(45),
    borderRadius: 100,
  },
  Name: {
    fontFamily: Font.Poppins500,
    fontSize: scale(12),
    color: "#1A1B23",
  },
  About: {
    fontFamily: Font.Poppins400,
    fontSize: scale(12),
    color: "#676767",
    marginLeft: scale(5),
  },
  Time: {
    fontFamily: Font.Poppins400,
    fontSize: scale(11),
    color: "#919191",
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  Read: {
    fontFamily: Font.Poppins400,
    fontSize: scale(11),
    color: Color.White,
  },
});

export default Alert;
