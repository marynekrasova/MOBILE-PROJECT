import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
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
  screenContainer: {
    flex: 1,
  },
  textCategory: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 28,
  },
});
