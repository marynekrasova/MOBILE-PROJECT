import { StyleSheet } from "react-native";
import color from "../../constants/colorStyle";

export default StyleSheet.create({
  formContainer: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 16,
  },
  textTitle: {
    fontSize: 20,
    lineHeight: 28,
    color: "#131314",
    fontFamily: "IBMPlexSans-Medium",
    marginVertical: 8,
    marginRight: 8,
  },
  statusContainer: {
    backgroundColor: "#EEF7FF",
    borderColor: "#368ACE",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 6,
    paddingVertical: 2,
    width: 80,
  },
  status: {
    color: "#368ACE",
    fontFamily: "IBMPlexSans-Regular",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
  },
  textTitleWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainText: {
    marginTop: 8,
  },
  text: {
    fontSize: 16,
    marginTop: 16,
  },
  textSmallF: {
    fontSize: 10,
    color: "#798787",
  },
  textSmallS: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "IBMPlexSans-Regular",
    color: "#798787",
    marginBottom: 16,
  },
  textBig: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: "IBMPlexSans-Medium",
  },
  myBet: {
    color: color.myBet,
  },
  anotherBet: {
    color: color.anotherBet,
  },
  imgContainer: {
    maxWidth: "100%",
    maxHeight: 288,
    alignItems: "center",
    backgroundColor: "#F2F5F5",
  },
  icon: {
    marginTop: 120,
    marginBottom: 120,
    color: "#798787",
  },
  img: {
    width: "100%",
    height: "100%",
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
  },
  iconLocation: {
    marginRight: 10,
  },
  timerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  locationText: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
    color: "#131314",
    fontFamily: "IBMPlexSans-Regular",
  },
  id: {
    alignSelf: "center",
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.2,
    color: "#798787",
    fontFamily: "IBMPlexSans-Regular",
    marginLeft: 6,
  },
});
