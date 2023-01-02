import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 48,
    paddingLeft: 16,
    paddingRight: 16,
  },
  warning: {
    display: "flex",
    flexDirection: "row",
  },
  textHeder: {
    fontFamily: "IBMPlexSans-Regular",
    color: "#4A4853",
    fontSize: 30,
    paddingBottom: 24,
    maxWidth: 300,
    textAlign: "center",
  },
  textBody: {
    fontFamily: "IBMPlexSans-Regular",
    textAlign: "center",
    fontSize: 16,
    paddingBottom: 24,
  },
  textBodyColor: {
    fontFamily: "IBMPlexSans-Regular",
    fontSize: 16,
    color: "#F87E25",
    paddingBottom: 24,
    marginLeft: 10,
  },
});
