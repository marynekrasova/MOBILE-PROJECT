import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerModerator: {
    flex: 1,
    marginBottom: 50,
  },
  list: {
    padding: 16,
  },
  nothingThere: {
    flex: 1,
    fontSize: 26,
    marginLeft: "30%",
    marginTop: "60%",
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.15,
    color: "#131314",
    fontFamily: "IBMPlexSans-Regular",
  },
  textTitleModerator: {
    fontSize: 24,
    marginTop: 8,
    paddingLeft: "20%",
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: 0.15,
    color: "#131314",
    fontFamily: "IBMPlexSans-Regular",
  },
  loader: {
    width: "100%",
    height: "100%",
    zIndex: 100,
    backgroundColor: "#ffffff",
    position: "absolute",
    justifyContent: "center",
  },
});
