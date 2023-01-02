import { StyleSheet } from "react-native";
import color from "../../constants/colorStyle";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 16,
  },
  close: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  contantContainer: {
    flex: 1,
    justifyContent: "space-around",
  },
  textClose: {
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.15,
    fontWeight: "500",
    color: color.colorText,
    fontFamily: "IBMPlexSans-Regular",
    marginTop: 10,
  },
  textContainer: {
    justifyContent: "space-between",
    marginTop: 40,
    marginLeft: 20,
  },
  textTitle: {
    fontSize: 28,
    lineHeight: 28,
    letterSpacing: 0.15,
    fontWeight: "500",
    color: color.colorText,
    fontFamily: "IBMPlexSans-Regular",
    marginBottom: 15,
  },
  textContent: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontWeight: "500",
    color: color.grey,
    fontFamily: "IBMPlexSans-Regular",
    marginTop: 10,
  },
  button: {
    width: "100%",
    marginBottom: 100,
  },
});
