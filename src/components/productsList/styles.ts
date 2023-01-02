import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerModerator: {
    flex: 1,
    marginBottom: 50,
  },
  headerIcon: {
    padding: 10,
    marginRight: 8,
  },
  listContainer: {
    padding: 16,
  },
  scrollBox: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  list: {
    padding: 16,
  },
  nothingThere: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  textTitle: {
    fontSize: 24,
    marginTop: 8,
  },
  textTitleModerator: {
    fontSize: 24,
    marginTop: 8,
    paddingLeft: 90,
  },
  loader: {
    width: "100%",
    height: "100%",
    zIndex: 100,
    backgroundColor: "#ffffff",
    position: "absolute",
    justifyContent: "center",
  },
});
