import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Icon: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 10,
    marginRight: 5.5,
  },
  priceTimeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 4,
    paddingVertical: 4,
    backgroundColor: "#EEF7FF",
    borderRadius: 4,
    width: 66,
  },
  priceTime: {
    color: "#2978B8",
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.2,
    fontFamily: "IBMPlexSans-Medium",
  },
});
