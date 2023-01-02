import { StyleSheet } from "react-native";
import color from "../../constants/colorStyle";

export default StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 16,
  },
  iconBet: {
    transform: [{ rotateY: "180deg" }],
  },
  button: {
    width: "45%",
  },
  textMaxBet: {
    marginBottom: 10,
    marginLeft: 5,
    color: color.grey,
  },
  headerIcon: {
    padding: 10,
    marginRight: 8,
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
  },
  logoText: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 28,
  },
});
