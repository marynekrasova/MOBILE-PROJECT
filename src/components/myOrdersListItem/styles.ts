import { StyleSheet } from "react-native";
import color from "../../constants/colorStyle";

export default StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    minHeight: 120,
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 16,
  },
  informationContainer: {
    flex: 1,
  },
  icon: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 20,
    borderStyle: "solid",
    width: 70,
    borderWidth: 1,
    marginTop: 4,
    marginBottom: 16,
  },
  colorIcon: {
    backgroundColor: "#EEF7FF",
    borderColor: "#368ACE",
  },
  colorIconText: {
    color: "#368ACE",
  },
  iconText: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
    fontFamily: "IBMPlexSans-Regular",
  },
  title: {
    color: color.colorText,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontFamily: "IBMPlexSans-Regular",
    marginRight: 6,
  },
  informationTitleWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  price: {
    color: color.colorText,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    height: 24,
    marginRight: 8,
    fontFamily: "IBMPlexSans-Regular",
  },
  cont: {
    display: "flex",
    justifyContent: "flex-end",
    minHeight: 20,
  },
  sectionWeight: {
    color: color.grey,
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.2,
    fontFamily: "IBMPlexSans-Regular",
    display: "flex",
    justifyContent: "flex-end",
  },
});
