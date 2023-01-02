import { StyleSheet } from "react-native";
import color from "../../constants/colorStyle";

export default StyleSheet.create({
  formContainer: {
    paddingTop: 24,
  },
  titleText: {
    fontSize: 30,
    lineHeight: 43,
    alignSelf: "center",
    color: "#4A4853",
    paddingBottom: 24,
    fontFamily: "IBMPlexSans-Regular",
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
  validError: {
    color: "red",
    marginBottom: 10,
    marginTop: 5,
  },
  loader: {
    marginTop: 30,
  },
  radioButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  radioButtonWrap: {
    borderRadius: 50,
    borderWidth: 2,
  },
  titleRadioButton: {
    marginLeft: 8,
    fontSize: 18,
    lineHeight: 24,
    alignSelf: "center",
    color: "#4A4853",
    fontFamily: "IBMPlexSans-Regular",
  },
  buttonStyle: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    height: 200,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: color.grey,
    marginBottom: 20,
    borderStyle: "dotted",
  },
  textUpLoad: {
    marginLeft: 8,
    fontSize: 18,
    lineHeight: 24,
    alignSelf: "center",
    color: "#4A4853",
    fontFamily: "IBMPlexSans-Regular",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
