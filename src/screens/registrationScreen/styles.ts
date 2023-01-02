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
    fontFamily: "IBMPlexSans-Regular",
  },
  companyText: {
    color: "#798787",
    fontSize: 10,
    alignSelf: "center",
    marginTop: 17,
    fontFamily: "IBMPlexSans-Regular",
    letterSpacing: -0.9,
  },
});
