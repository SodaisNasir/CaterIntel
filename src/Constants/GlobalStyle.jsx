import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import { Color } from "../utils/Color";
import { Font } from "../utils/Font";
import { StyleSheet } from "react-native";

export const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  grey_container: {
    flex: 1,
    backgroundColor: Color.LightGrey,
  },
  Heading: {
    textAlign: "center",
    color: Color.Black,
    fontSize: scale(16),
    fontFamily: Font.Poppins500,
  },
  subHeading: {
    color: Color.MidGrey,
    fontSize: scale(15),
    fontFamily: Font.Poppins400,
  },
  ReverseBtn: {
    backgroundColor: Color.white,
    borderColor: Color.Main,
  },
  ErrorBtn: {
    backgroundColor: Color.white,
    borderColor: Color.red,
  },
  InputHeading: {
    color: Color.Grey,
    fontSize: scale(14),
    marginTop: verticalScale(15),
    fontFamily: Font.Inter500,
  },
  Row: {
    flexDirection: "row",
    alignItems: "center",
  },
  showBar: {
    display: "flex",
    backgroundColor: Color.white,
    height: verticalScale(60),
    borderTopColor: "#F4F4F5",
    borderTopWidth: scale(1),
  },
  HideBar: {
    display: "none",
  },
  ModalText: {
    fontSize: scale(16),
    textAlign: "center",
    padding: moderateScale(20),
    fontFamily: Font.Gilroy600,
    color: Color.Main,
  },
  ModalContainer: {
    justifyContent: "center",
    width: "95%",
    borderRadius: scale(10),
    backgroundColor: Color.white,
    alignSelf: "center",
    marginTop: verticalScale(15),
    paddingVertical: moderateVerticalScale(15),
  },
  MainModal: {
    justifyContent: "center",
    margin: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  ModalLine: {
    width: "20%",
    height: verticalScale(4),
    backgroundColor: Color.Grey,
    alignSelf: "center",
    borderRadius: scale(10),
    marginVertical: verticalScale(15),
  },
  SocialSignInButton: {
    borderRadius: scale(20),
    borderWidth: 1,
    borderColor: Color.white,
    alignItems: "center",
    marginTop: verticalScale(20),
    paddingVertical: moderateVerticalScale(12),
  },
  LottieView: {
    height: verticalScale(150),
    alignSelf: "center",
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  noGap: {
    paddingHorizontal: 0,
  },
  Padding: {
    paddingHorizontal: moderateScale(20),
  },
  PurpleRipple: {
    color: Color.Main,
    foreground: true,
    borderless: true,
  },
  WhiteRipple: {
    color: "#fff",
    borderless: true,
    foreground: true,
  },
  BlueRipple: {
    color: Color.DarkBlue,
    foreground: true,
    // borderless: true,
  },
  Space: {
    width: scale(20),
  },
  HomeCountHeading: {
    color: Color.DarkBlue,
    paddingHorizontal: moderateScale(20),
    marginVertical: verticalScale(10),
  },
  EndBtnBox: {
    backgroundColor: Color.White,
    paddingHorizontal: scale(1),
    paddingVertical: scale(15),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Line: {
    backgroundColor: Color.DarkBlue,
    width: scale(80),
    height: verticalScale(6),
    alignSelf: "center",
    borderRadius: 100,
    marginVertical: verticalScale(10),
  },
  parent: {
    borderWidth: scale(1),
    borderRadius: scale(100),
    height: verticalScale(10),
    aspectRatio: 1 / 1,
  },
  child: {
    backgroundColor: Color.Main,
    borderRadius: scale(100),
    flex: 1,
    margin: scale(1),
  },

  BigImage: {
    width: "100%",
    overflow: "hidden",
  },
  RowContrainer: {
    paddingVertical: moderateVerticalScale(10),
  },
  BarBox: {
    backgroundColor: Color.White,
    paddingVertical: moderateVerticalScale(15),
    paddingHorizontal: moderateScale(10),
    borderRadius: scale(10),
    borderWidth: scale(1),
    borderColor: Color.border,
  },
  BarText: {
    color: Color.Black,
    fontFamily: Font.Inter500,
    fontSize: scale(16.5),
  },
  DateBoX: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(15),
    height: verticalScale(50),
    backgroundColor: Color.White,
    overflow: "hidden",
    borderRadius: scale(10),
    borderWidth: scale(1),
    borderColor: Color.border,
    marginTop: verticalScale(10),
  },
  PlusBox: {
    position: "absolute",
    bottom: verticalScale(10),
    right: scale(10),
    backgroundColor: "#CFD0D4",
    borderRadius: 360,
    width: scale(60),
    aspectRatio: 1 / 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  SmallBtn: {
    backgroundColor: Color.Non,
    borderColor: Color.White,
    borderRadius: scale(30),
    marginTop: verticalScale(30),
    width: "85%",
    height: verticalScale(50),
  },
});
