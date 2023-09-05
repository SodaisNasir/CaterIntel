import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import LottieView from "lottie-react-native";
import { Color } from "../../utils/Color";
import { scale } from "react-native-size-matters";
import ReactNativeModal from "react-native-modal";
import { GlobalStyle } from "../../Constants/GlobalStyle";

const Loading = ({ isVisible, bar, value }) => {
  return (
    <SafeAreaView style={{ justifyContent: "center" }}>
      <ReactNativeModal
        isVisible={isVisible}
        style={[styles.modal, styles.container]}
      >
        <View style={styles.buttons}>
          <LottieView
            autoPlay
            style={GlobalStyle.LottieView}
            source={require("../../assets/lotti/loader.json")}
          />
          <Text style={GlobalStyle.ModalText}>Please Wait...</Text>
        </View>
      </ReactNativeModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  buttons: {
    backgroundColor: Color.ThemeCream,
    width: "60%",
    alignSelf: "center",
    borderRadius: scale(20),
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
});
export default Loading;
