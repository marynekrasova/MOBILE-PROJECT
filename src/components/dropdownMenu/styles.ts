import { StyleSheet } from "react-native";
import color from "../../constants/colorStyle";

export default StyleSheet.create({
  formContainer: {
    minWidth: "25%",
    minHeight: 44,
    borderWidth: 1,
    borderColor: "#BCC3C3",
    borderStyle: "solid",
    borderRadius: 2,
    paddingHorizontal: 12,
  },
  text: {
    fontFamily: "IBMPlexSans-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.2,
    color: color.colorText,
  },
});
