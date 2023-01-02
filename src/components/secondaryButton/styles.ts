import { StyleSheet } from "react-native";

export default StyleSheet.create({
  buttonContainer: {
    elevation: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#38999B",
    paddingVertical: 8,
    paddingHorizontal: 16,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#38999B",
    fontFamily: "IBMPlexSans-Medium",
  },
  icon: {
    marginRight: 11,
  },
});
