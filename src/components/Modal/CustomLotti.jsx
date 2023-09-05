import { Text, SafeAreaView } from "react-native";
import React from "react";

import Modal from "react-native-modal";
import LottieView from "lottie-react-native";
import { GlobalStyle } from "../../Constants/GlobalStyle";

const CustomLotti = ({ isVisible, Title, source, TextRestyle }) => {
  return (
    <Modal visible={isVisible} style={GlobalStyle.MainModal}>
      <SafeAreaView style={GlobalStyle.ModalContainer}>
        <LottieView autoPlay style={GlobalStyle.LottieView} source={source} />
        <Text style={[GlobalStyle.ModalText, TextRestyle]}>{Title}</Text>
      </SafeAreaView>
    </Modal>
  );
};
export default CustomLotti;
