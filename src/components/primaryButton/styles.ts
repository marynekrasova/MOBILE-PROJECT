import { StyleSheet } from "react-native";
import color from "../../constants/colorStyle";

export default StyleSheet.create({
  button: {
    background: color.colorTabButton,
    borderRadius: 2,
    width: 343,
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: "#FFFFFF",
  },
  buttonContainer: {
    elevation: 0,
    backgroundColor: color.colorTabButton,
    borderRadius: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: "IBMPlexSans-Medium",
  },
  disabledBtn: {
    backgroundColor: "grey",
  },
  icon: {
    marginRight: 11,
  },
});
