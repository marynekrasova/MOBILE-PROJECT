import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  errorComment: {
    marginBottom: 10,
    color: "red",
    fontFamily: "IBMPlexSans-Medium",
    marginLeft: 10,
  },
  errorContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    maxWidth: "100%",
    maxHeight: 200,
  },
  imgContainer: {
    maxWidth: "100%",
    maxHeight: 200,
    alignItems: "center",
    borderBottomColor: "#F2F5F5",
    borderBottomWidth: 1,
  },
  imgContainerBackground: {
    maxWidth: "100%",
    maxHeight: 288,
    alignItems: "center",
    borderBottomColor: "#F2F5F5",
    borderBottomWidth: 1,
    backgroundColor: "#F2F5F5",
  },
  icon: {
    marginTop: 120,
    marginBottom: 120,
    color: "#798787",
  },
  textWrap: {
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    paddingVertical: 16,
    width: "100%",
  },
  title: {
    color: "#798787",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: 0.15,
    fontFamily: "IBMPlexSans-Regular",
  },
  content: {
    color: "#FB6D1D",
    fontSize: 20,
    paddingLeft: 10,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: 0.15,
    fontFamily: "IBMPlexSans-Regular",
  },
  input: {
    marginVertical: 10,
  },
  loader: {
    paddingTop: 20,
  },
});
