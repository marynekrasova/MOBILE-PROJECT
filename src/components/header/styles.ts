import { StyleSheet } from "react-native";
import color from "../../constants/colorStyle";

export default StyleSheet.create({
  textHeader: {
    color: color.colorHeader,
    fontSize: 18,
    lineHeight: 20,
    marginLeft: 11,
    fontFamily: "IBMPlexSans-Medium",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    lineHeight: 28,
  },
});
