import { StyleSheet } from "react-native";

export default StyleSheet.create({
  scrollBox: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 1,
    borderColor: "#BCC3C3",
    borderStyle: "solid",
    borderRadius: 2,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: 343,
    height: 44,
  },
  mainContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    flex: 1,
    justifyContent: "space-between",
  },
  noAccountText: {
    marginTop: 24,
    alignSelf: "center",
    color: "#4A4853",
    fontSize: 14,
    marginBottom: 17,
  },
  companyText: {
    color: "#798787",
    fontSize: 10,
    alignSelf: "center",
    fontFamily: "IBMPlexSans-Regular",
    letterSpacing: -0.9,
    marginTop: 17,
  },
  forgotText: {
    alignSelf: "center",
    paddingVertical: 24,
    color: "#38999B",
  },
  titleText: {
    fontSize: 30.2222,
    lineHeight: 43,
    alignSelf: "center",
    color: "#4A4853",
    paddingBottom: 24,
  },
});
