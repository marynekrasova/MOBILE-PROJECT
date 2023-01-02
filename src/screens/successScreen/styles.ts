import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 16,
  },
  img: {
    width: 343,
    height: 257,
  },
  textContainer: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.15,
    fontWeight: "500",
    color: "#131314",
    fontFamily: "IBMPlexSans-Regular",
    marginTop: 10,
    marginBottom: 10,
  },
  textBody: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontWeight: "400",
    color: "#131314",
    fontFamily: "IBMPlexSans-Regular",
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    width: "100%",
  },
});
