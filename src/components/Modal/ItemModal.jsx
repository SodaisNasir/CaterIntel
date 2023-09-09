import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyle } from "../../Constants/GlobalStyle";
import Modal from "react-native-modal";
import CustomButton from "../CustomButton";
import { Color } from "../../utils/Color";
import { moderateScale, scale } from "react-native-size-matters";
import { useForm } from "react-hook-form";
import CustomInput from "../CustomInput";
import Validation from "../Validation";

const ItemModal = ({ visible, onClose, onPress, selected }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  return (
    <>
      <Modal
        testID={"modal"}
        isVisible={visible}
        backdropOpacity={0.8}
        Scrollable
        swipeDirection={"down"}
        onSwipeComplete={onClose}
        onBackdropPress={onClose}
        style={styles.modalStyling}
      >
        <View style={styles.modalView}>
          <View style={GlobalStyle.Line} />
          <CustomInput
            style={styles.InputStyle}
            control={control}
            name="name"
            rules={{
              required: "*Item Name is required",
            }}
            placeholder="Your item's Name"
          />
          {errors.name && <Validation title={errors.name.message} />}
          <CustomInput
            keyboardType={"number-pad"}
            style={styles.InputStyle}
            control={control}
            name="quantity"
            rules={{
              required: "*Please select quantity of your product",
            }}
            placeholder="quantity of your product"
            label="asdfasdf"
          />
          {errors.quantity && <Validation title={errors.quantity.message} />}
          <CustomButton
            Ripple={GlobalStyle.WhiteRipple}
            title="Request Item"
            onPress={onPress}
            selected={selected}
          />
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  modalStyling: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalView: {
    // alignItems: "center",
    backgroundColor: Color.White,
    width: "100%",
    borderTopRightRadius: scale(20),
    borderTopLeftRadius: scale(20),
    flex: 0.5,
    paddingHorizontal: moderateScale(20),
  },
  InputStyle: {
    borderColor: Color.Main,
    // width: "85%",
  },
});

export default ItemModal;
