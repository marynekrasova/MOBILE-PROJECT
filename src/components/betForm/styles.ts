import { StyleSheet } from "react-native";
import color from "../../constants/colorStyle";

export default StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "#131314",
    borderStyle: "solid",
    borderRadius: 2,
    width: "100%",
    height: 44,
    alignItems: "center",
  },
  textInput: {
    height: "100%",
    paddingHorizontal: 120,
  },
  inputCurrency: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  validError: {
    paddingVertical: 5,
  },
  alertContainer: {
    width: "90%",
    position: "absolute",
    top: -200,
    left: 16,
  },
  inputContainer: {
    width: "80%",
    height: 150,
  },
  textBetPerKg: {
    fontSize: 16,
    color: color.colorTabButton,
    marginBottom: 8,
  },
});
