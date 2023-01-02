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
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 28,
    paddingVertical: 6,
    marginBottom: 8,
    marginTop: 16,
    alignItems: "center",
    marginHorizontal: 16,
  },
  iconLocation: {
    marginRight: 10,
  },
  locationText:{
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
    color: "#131314",
    fontFamily: "IBMPlexSans-Regular",
  },
});
