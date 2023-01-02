import { StyleSheet } from "react-native";

export default StyleSheet.create({
  alertContainer: {
    backgroundColor: "#FDECE9",
    borderRadius: 2,
    padding: 20,
    borderWidth: 1,
    borderColor: "#EB3D26",
    marginVertical: 24,
    flexDirection: "column",
    display: "flex",
  },
  alertTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },
  alertIcon: {
    fontSize: 25,
    marginRight: 12,
  },
  iconTitleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 37,
  },
  text: {
    paddingVertical: 2,
    width: "100%",
  },
});
