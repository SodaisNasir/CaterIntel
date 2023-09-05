import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import Modal from "react-native-modal";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import NetInfo from "@react-native-community/netinfo";
import { Font } from "../../utils/Font";
import { Color } from "../../utils/Color";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const ConnectionModal = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log("state", state);
      if (state.isConnected == false) {
        setIsConnected(true);
      } else {
        setIsConnected(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <Modal
      backdropOpacity={0.1}
      isVisible={isConnected}
      onBackdropPress={() => setIsConnected(false)}
      animationIn="fadeInUpBig"
      animationInTiming={400}
      animationOut="fadeOutDownBig"
      animationOutTiming={1500}
      style={styles.ToEnd}
    >
      <View style={styles.MainModalBox}>
        <View style={styles.IconBox}>
          <MaterialIcons
            name="wifi-tethering-error"
            size={scale(30)}
            color={Color.White}
          />
        </View>
        <View style={styles.TextBox}>
          <Text style={styles.text}>No Internet Connection</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  MainModalBox: {
    height: verticalScale(48),
    width: "95%",
    backgroundColor: Color.Main,
    borderRadius: scale(12),
    bottom: scale(20),
    overflow: "hidden",
    flexDirection: "row",
    alignSelf: "center",
  },
  ModalMain: {
    height: verticalScale(70),
    // backgroundColor: '#435CA8',
    backgroundColor: Color.Main,
    borderRadius: 10,
    marginTop: scale(20),
    flexDirection: "row",
  },
  ToEnd: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    color: Color.White,
    fontSize: scale(14),
    fontFamily: Font.Inter500,
  },
  TextBox: { flex: 3, justifyContent: "center" },
  IconBox: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ConnectionModal;
