import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";
import { GlobalStyle } from "../../Constants/GlobalStyle";
import { Color } from "../../utils/Color";
import { scale } from "react-native-size-matters";
import ReactNativeModal from "react-native-modal";

const IndicatorModal = ({ isVisible }) => {
  return (
    <View style={styles.container}>
      <ReactNativeModal isVisible={isVisible} style={GlobalStyle.MainModal}>
        <ActivityIndicator size={scale(50)} color={Color.White} />
      </ReactNativeModal>
    </View>
  );
};

export default IndicatorModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.Non,
  },
});
