import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  errorComment: {
    marginBottom: 10,
    color: "red",
    fontFamily: "IBMPlexSans-Medium",
    marginLeft: 10,
  },
  errorContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    height: 160,
    marginBottom: 8,
  },
  section: {
    width: "50%",
  },
  title: {
    color: "#131314",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  subtitles: {
    color: "#798787",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.2,
    marginTop: 4,
  },
  title: {
    color: "#131314",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 16,
    width: "100%",
  },
  sectionTitle: {
    color: "#798787",
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
  },
  bet: {
    color: "#FB6D1D",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.15,
    marginTop: 8,
    marginBottom: 4,
  },
  price: {
    color: "#131314",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.15,
    marginTop: 8,
    marginBottom: 4,
  },
  sectionWeight: {
    color: "#798787",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
  },
  betTimeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 4,
    paddingVertical: 8,
    backgroundColor: "#F87E25",
    borderRadius: 4,
    width: 75,
    marginTop: 8,
  },
  betTime: {
    color: "white",
    fontWeight: "500",
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.2,
  },
  icon: {
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
    paddingVertical: 8,
    backgroundColor: "#EEF7FF",
    borderRadius: 4,
    width: 75,
    marginTop: 8,
  },
  priceTime: {
    color: "#2978B8",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.2,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 4,
  },
  buttonTextGreen: {
    color: "#38999B",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.3,
    marginLeft: 11,
  },
  buttonTextWhite: {
    color: "white",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.3,
    marginLeft: 11,
  },
  input: {
    marginVertical: 10,
  },
  loader: {
   paddingTop: 20,
  },
});
