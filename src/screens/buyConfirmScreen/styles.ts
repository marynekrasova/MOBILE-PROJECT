import { StyleSheet } from "react-native";
import color from "../../constants/colorStyle";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    margin: 16,
  },
  textContainer: {
    justifyContent: "space-between",
    marginTop: 20,
  },
  textTitle: {
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.15,
    fontWeight: "500",
    color: "#131314",
    fontFamily: "IBMPlexSans-Regular",
    marginTop: 10,
  },
  textCode: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontWeight: "400",
    color: color.grey,
    fontFamily: "IBMPlexSans-Regular",
    marginTop: 5,
    marginBottom: 40,
  },
  textConfirm: {
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.15,
    fontWeight: "500",
    color: "#131314",
    fontFamily: "IBMPlexSans-Regular",
    marginTop: 50,
  },
  textLot: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontWeight: "500",
    color: color.colorTabButton,
    fontFamily: "IBMPlexSans-Regular",
    marginBottom: 40,
  },
  containerInfo: {
    flexDirection: "row",
  },
  textName: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontWeight: "500",
    color: color.grey,
    fontFamily: "IBMPlexSans-Regular",
    marginTop: 10,
  },
  textContent: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontWeight: "500",
    color: color.colorText,
    fontFamily: "IBMPlexSans-Regular",
    marginTop: 10,
  },
  button: {
    width: "45%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 30,
  },
});
