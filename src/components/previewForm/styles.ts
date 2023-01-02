import { StyleSheet } from "react-native";
import color from "../../constants/colorStyle";

export default StyleSheet.create({
  formContainer: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 16,
  },
  textTitle: {
    fontSize: 20,
    lineHeight: 28,
    color: "#131314",
    fontFamily: "IBMPlexSans-Medium",
    marginVertical: 8,
  },
  textTitleWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainText: {
    marginTop: 8,
  },
  text: {
    fontSize: 16,
    marginTop: 16,
  },
  dataCreate: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: color.colorText,
    marginVertical: 5,
    marginRight: 20,
  },
  textSmallF: {
    fontSize: 10,
    color: "#798787",
  },
  textSmallS: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "IBMPlexSans-Regular",
    color: "#798787",
  },
  textBig: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: "IBMPlexSans-Medium",
  },
  myBet: {
    color: color.myBet,
  },
  anotherBet: {
    color: color.anotherBet,
  },
  imgContainer: {
    maxWidth: "100%",
    maxHeight: 288,
    alignItems: "center",
    borderBottomColor: "#F2F5F5",
    borderBottomWidth: 1,
  },
  imgContainerBackground: {
    maxWidth: "100%",
    maxHeight: 288,
    alignItems: "center",
    borderBottomColor: "#F2F5F5",
    borderBottomWidth: 1,
    backgroundColor: "#F2F5F5",
  },
  icon: {
    marginTop: 120,
    marginBottom: 120,
    color: "#798787",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  timerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  id: {
    alignSelf: "center",
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.2,
    color: "#798787",
    fontFamily: "IBMPlexSans-Regular",
    marginLeft: 6,
  },
});
