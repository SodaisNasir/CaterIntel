import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, Image } from "react-native";
import { Color } from "../utils/Color";

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar translucent backgroundColor="transparent" />
      {/* <Image
        style={{width: '50%', height: '50%'}}
        resizeMode="contain"
        source={require('../Assets/Images/whitelogo.png')}
      /> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.Main,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SplashScreen;
