import React, { useState } from "react";
import { View, Text, ActivityIndicator, Platform } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./styles";
import Input from "../input";
import InputWithEye from "../inputWithEye";
import FilledButton from "../primaryButton";
import Alert from "../alert";
import { logIn } from "../../app/slices/AppSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setRole, signIn } from "../../app/slices/AuthSlice";
import { sendDeviceToken } from "../../app/slices/NotificationsSlice";
import messaging from "@react-native-firebase/messaging";

const DisplayingErrorSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Enter your email"),
  password: Yup.string().required("Please enter your password"),
});

export default function LoginForm({ navigation }) {
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertText, setAlertText] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useAppDispatch();
  const loginData = useAppSelector((state) => state.loginData);

  let deviceToken = "";

  const getDeviceToken = async () => {
    await messaging()
      .getToken()
      .then((fcmToken) => {
        if (fcmToken) {
          deviceToken = fcmToken;
        } else {
          console.warn("[FCMService] user does not have a device token");
        }
      })
      .catch((error) => {
        console.warn("[FCMService] getToken rejected ", error);
      });
  };

  getDeviceToken();

  function loginHandlerForLogin(
    values: { email: string; password: string },
    resetForm: any
  ) {
    setShowLoader(true);
    dispatch(logIn(values)).then((response) => {
      if (response.payload.status >= 200 && response.payload.status < 300) {
        setShowAlert(false);
        setShowLoader(false);
        resetForm();
        dispatch(
          sendDeviceToken({
            deviceToken: deviceToken,
            type: Platform.OS === "ios" ? "iOS" : "android",
            token: response.payload.data.user.token,
          })
        );
        navigation.navigate("CategoriesScreen");
      } else {
        setAlertText(response.payload.data.message);
        setShowAlert(true);
        setShowLoader(false);
      }
    });
  }

  return (
    <View style={styles.formContainer}>
      <Text style={styles.titleText}>Log in</Text>
      {showAlert ? <Alert title={alertTitle} text={alertText} /> : null}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={DisplayingErrorSchema}
        validateOnChange={validateAfterSubmit}
        onSubmit={(values, { resetForm }) => {
          loginHandlerForLogin(values, resetForm);
        }}
      >
        {(props) => (
          <View>
            <Input
              onFocus={() => {
                props.setFieldError("email", undefined);
              }}
              valid={props.errors.email}
              placeholder="Email"
              value={props.values.email}
              onChangeText={props.handleChange("email")}
            />
            <Text style={styles.validError}>{props.errors.email}</Text>
            <InputWithEye
              onFocus={() => {
                props.setFieldError("password", undefined);
              }}
              valid={props.errors.password}
              placeholder="Password"
              value={props.values.password}
              onChangeText={props.handleChange("password")}
            />
            <Text style={styles.validError}>{props.errors.password}</Text>
            <Text style={styles.forgotPassText}>Forgot your password?</Text>
            <FilledButton
              title="Log in"
              onPress={() => {
                setValidateAfterSubmit(true);
                props.handleSubmit();
              }}
            />
          </View>
        )}
      </Formik>
      {showLoader && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#38999B" />
        </View>
      )}
    </View>
  );
}
