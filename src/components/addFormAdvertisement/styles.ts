import { StyleSheet } from "react-native";
import color from "../../constants/colorStyle";

export default StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 15,
    zIndex: -2,
  },
  flexContainer: {
    flex: 1,
  },
  loader: {
    width: "100%",
    height: "100%",
    zIndex: 100,
    backgroundColor: "rgba(0,0,0,0.0)",
    position: "absolute",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 30.2222,
    lineHeight: 43,
    alignSelf: "center",
    color: "#4A4853",
    paddingBottom: 15,
  },
  inputTitle: {
    fontFamily: "IBMPlexSans-Regular",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: 0.4,
    color: color.colorText,
    marginTop: 10,
  },
  inputWrap: {
    width: "60%",
  },
  validError: {
    color: "red",
    marginBottom: 5,
    marginTop: 5,
  },
  inputFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  imgUpload: {
    width: "30%",
    height: 100,
    borderWidth: 1,
    borderColor: "#BCC3C3",
    borderStyle: "solid",
    borderRadius: 2,
    marginBottom: 15,
    alignItems: "center",
  },
  imgTouchableOpacity: {
    alignItems: "center",
  },
  imgText: {
    color: "#798787",
    fontFamily: "IBMPlexSans-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 16,
  },
  textMarginTop: {
    marginTop: 16,
  },
  country: {
    color: "#798787",
    fontFamily: "IBMPlexSans-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    backgroundColor: "#F2F5F5",
    borderWidth: 1,
    borderColor: "#BCC3C3",
    borderStyle: "solid",
    borderRadius: 2,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: "100%",
    height: 44,
  },
  imgTextTouch: {
    color: "#51ACAE",
    fontSize: 40,
    padding: 25,
  },
  imgContainer: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  margin: {
    marginTop: 10,
    marginBottom: 25,
  },
  icon: {
    marginTop: 30,
    marginBottom: 30,
    color: "#798787",
  },
  dropWidth: {
    maxWidth: "100%",
  },
  dropStyle: {
    marginBottom: 10,
  },
});
