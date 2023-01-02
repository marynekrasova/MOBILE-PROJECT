import { StyleSheet } from "react-native";

export default StyleSheet.create({
  formContainer: {
    paddingTop: 24,
  },
  titleText: {
    fontSize: 30,
    lineHeight: 43,
    fontFamily: "IBMPlexSans-Regular",
    alignSelf: "center",
    color: "#4A4853",
    paddingBottom: 25,
  },
  phoneInput: {
    borderWidth: 1,
    borderColor: "#BCC3C3",
    borderStyle: "solid",
    borderRadius: 2,
    width: "100%",
  },
  phoneInputBtn: {
    padding: 0,
    borderRightWidth: 1,
    borderColor: "#BCC3C3",
    backgroundColor: "#f1f1f1",
  },
  inputPadding: {
    padding: 0,
  },
  forgotPassText: {
    alignSelf: "center",
    color: "#38999B",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.3,
    fontFamily: "IBMPlexSans-Medium",
    marginBottom: 24,
  },
  validError: {
    color: "red",
    marginBottom: 10,
    marginTop: 5,
    fontFamily: "IBMPlexSans-Regular",
  },
  loader: {
    marginTop: 30,
  },
});
