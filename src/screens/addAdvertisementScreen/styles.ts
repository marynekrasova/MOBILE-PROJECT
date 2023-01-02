import { StyleSheet } from "react-native";
import color from "../../constants/colorStyle";

export default StyleSheet.create({
  scrollBox: {
    flex: 1,
    justifyContent: "space-between",
  },
  mainContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "IBMPlexSans-Regular",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.15,
    color: color.colorText,
    marginTop: 10,
    marginBottom: 10,
  },
});
