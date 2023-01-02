import { StyleSheet } from "react-native";

export default StyleSheet.create({
  scrollBox: {
    flex: 1,
    marginTop: 30,
  },
  mainContainer: {
    flex: 1,
  },
  mainHeader: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 50,
  },
  icon: {
    color: "#798787",
  },
  iconHeader: {
    color: "#F87E25",
  },
  noAccountText: {
    fontFamily: "IBMPlexSans-Regular",
    alignSelf: "center",
    color: "#4A4853",
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: 0.4,
    marginLeft: 10,
  },
  touchableContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  additionalInfo: {
    fontFamily: "IBMPlexSans-Regular",
    alignSelf: "flex-end",
    color: "#51ACAE",
    fontSize: 20,
    lineHeight: 28,
    weight: 500,
  },
  clear: {
    alignItems: "center",
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  bordered: {
    borderWidth: 1,
    borderColor: "#E6E6E6",
    paddingVertical: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginVertical: 16,
  },
  title:{
    display: "flex",
    flexDirection: "row",
  },
});
