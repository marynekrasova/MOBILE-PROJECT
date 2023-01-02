import { StyleSheet } from "react-native";
import color from "../../constants/colorStyle";

export default StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  header: {
    fontSize: 24,
    lineHeight: 32,
    color: color.colorHeader,
    padding: 20,
    marginTop: 5,
    fontFamily: "IBMPlexSans-Regular",
  },
  item: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderBottomColor: "#E6E6E6",
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item_box_svg: {
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  item_text: {
    fontSize: 18,
    lineHeight: 28,
    padding: 10,
    color: color.colorText,
    fontFamily: "IBMPlexSans-Medium",
  },
  button: {
    width: 40,
    height: "100%",
    padding: 10,
  },
});
