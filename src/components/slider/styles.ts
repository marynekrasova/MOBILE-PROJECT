import { Dimensions, StyleSheet } from "react-native";
import color from "../../constants/colorStyle";

const { width } = Dimensions.get("window");
const height = width * 0.7;
export default StyleSheet.create({
  container: {
    width,
    height,
  },
  image: {
    width,
    height,
    resizeMode: "contain",
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  paginationText: {
    margin: 3,
    color: "#b1adad",
  },
  paginationActiveText: {
    margin: 3,
    color: color.colorTabButton,
  },
});
