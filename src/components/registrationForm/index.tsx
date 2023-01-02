import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import { Formik } from "formik";
import PhoneInput from "react-native-phone-number-input";
import * as Yup from "yup";
import { RadioButton } from "react-native-paper";
import DocumentPicker from "react-native-document-picker";
import WebView from "react-native-webview";
import styles from "./styles";
import Input from "../input";
import InputWithEye from "../inputWithEye";
import FilledButton from "../primaryButton";
import Alert from "../alert";
import PrivacyPolicy from "../privacyPolicy";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { signUp, signUpCompany } from "../../app/slices/AppSlice";

const DisplayingErrorSchema = Yup.object().shape({
  username: Yup.string().required("Enter your Name"),
  surname: Yup.string().required("Enter your Surname"),
  email: Yup.string().email("Invalid email").required("Enter your email"),
  phoneValue: Yup.number()
    .required("Enter your phone number")
    .typeError("You must specify a number"),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
      "Password must contain at least 8 characters, one uppercase, one number"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please re-type your password"),
  privacyPolicyAccepted: Yup.boolean().oneOf(
    [true],
    "Must Accept Terms and Conditions"
  ),
  companyName: Yup.string(),
  companyINN: Yup.number().typeError("Enter your Name"),
  companyAccount: Yup.string(),
});

export default function SignupForm({ navigation }) {
  const [singleFile, setSingleFile] = useState([]);
  const phoneInput = useRef<PhoneInput>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertText, setAlertText] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [checked, setChecked] = useState("first");
  const [colorFirst, setColorFirst] = useState("#38999B");
  const [colorSecond, setColorSecond] = useState("grey");
  const dispatch = useAppDispatch();
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  useMemo(() => {
    if (checked !== "first") {
      setColorFirst("grey");
      setColorSecond("#38999B");
    } else {
      setColorFirst("#38999B");
      setColorSecond("grey");
    }
  }, [checked]);
  const selectOneFile = async () => {
    // Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSingleFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        console.log("Canceled from single doc picker");
      } else {
        // For Unknown Error
        console.log(`Unknown Error: ${JSON.stringify(err)}`);
        throw err;
      }
    }
  };
  function signupHandlerForSign(
    values: {
      username: string;
      surname: string;
      email: string;
      password: string;
      confirmPassword: string;
      phoneValue: number;
      companyName: string;
      companyINN: string;
      companyAccount: string;
    },
    resetForm: any
  ) {
    const countryPhone = phoneInput?.current?.state?.code;
    if (!countryPhone) {
      return;
    }
    setShowLoader(true);
    (checked === "first"
      ? dispatch(signUp({ ...values, countryPhone }))
      : dispatch(signUpCompany({ ...values, countryPhone, singleFile }))
    ).then((response) => {
      if (response.payload.status >= 200 && response.payload.status < 300) {
        setShowAlert(false);
        resetForm();
        navigation.navigate("EmailConfirm");
        setShowLoader(false);
      } else {
        setShowLoader(false);
        setAlertText(response.payload.data.message);
        setShowAlert(true);
      }
    });
  }
  return (
    <View style={styles.formContainer}>
      <Text style={styles.titleText}>Sign up</Text>
      {showAlert ? <Alert title={alertTitle} text={alertText} /> : null}
      <Formik
        initialValues={{
          username: "",
          surname: "",
          email: "",
          password: "",
          confirmPassword: "",
          phoneValue: "",
          privacyPolicyAccepted: false,
          companyName: "",
          companyINN: "",
          companyAccount: "",
        }}
        validationSchema={DisplayingErrorSchema}
        validateOnChange={validateAfterSubmit}
        onSubmit={(values, { resetForm }) => {
          signupHandlerForSign(values, resetForm);
        }}
      >
        {(props) => (
          <View>
            <View style={styles.radioButtonContainer}>
              <View style={styles.radioButtonContainer}>
                <View
                  style={
                    Platform.OS === "ios"
                      ? [styles.radioButtonWrap, { borderColor: colorFirst }]
                      : null
                  }
                >
                  <RadioButton
                    color="#38999B"
                    value="first"
                    status={checked === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked("first")}
                  />
                </View>
                <Text style={styles.titleRadioButton}>Person</Text>
              </View>
              <View style={styles.radioButtonContainer}>
                <View
                  style={
                    Platform.OS === "ios"
                      ? [styles.radioButtonWrap, { borderColor: colorSecond }]
                      : null
                  }
                >
                  <RadioButton
                    color="#38999B"
                    value="second"
                    status={checked === "second" ? "checked" : "unchecked"}
                    onPress={() => setChecked("second")}
                  />
                </View>
                <Text style={styles.titleRadioButton}>Legal entity</Text>
              </View>
            </View>
            <Input
              onFocus={() => {
                props.setFieldError("username", undefined);
              }}
              valid={props.errors.username}
              placeholder="Name"
              value={props.values.username}
              onChangeText={props.handleChange("username")}
            />
            <Text style={styles.validError}>{props.errors.username}</Text>
            <Input
              onFocus={() => {
                props.setFieldError("surname", undefined);
              }}
              valid={props.errors.surname}
              placeholder="Surname"
              value={props.values.surname}
              onChangeText={props.handleChange("surname")}
            />
            <Text style={styles.validError}>{props.errors.surname}</Text>
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
            <PhoneInput
              onChangeFormattedText={() => {
                props.setFieldError("phoneValue", undefined);
              }}
              ref={phoneInput}
              defaultValue={props.values.phoneValue}
              defaultCode="BY"
              layout="first"
              onChangeText={props.handleChange("phoneValue")}
              containerStyle={styles.phoneInput}
              codeTextStyle={styles.inputPadding}
              textInputStyle={styles.inputPadding}
              flagButtonStyle={styles.phoneInputBtn}
            />
            <Text style={styles.validError}>{props.errors.phoneValue}</Text>
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
            <InputWithEye
              onFocus={() => {
                props.setFieldError("confirmPassword", undefined);
              }}
              valid={props.errors.confirmPassword}
              placeholder="Confirm password"
              value={props.values.confirmPassword}
              onChangeText={props.handleChange("confirmPassword")}
            />
            <Text style={styles.validError}>
              {props.errors.confirmPassword}
            </Text>
            {checked === "second" && (
              <View>
                <Input
                  onFocus={() => {
                    props.setFieldError("companyName", undefined);
                  }}
                  valid={props.errors.companyName}
                  placeholder="Company Name"
                  value={props.values.companyName}
                  onChangeText={props.handleChange("companyName")}
                />
                <Text style={styles.validError}>
                  {props.errors.companyName}
                </Text>
                <Input
                  onFocus={() => {
                    props.setFieldError("companyINN", undefined);
                  }}
                  valid={props.errors.companyINN}
                  placeholder="Company tax number (INN)"
                  value={props.values.companyINN}
                  onChangeText={props.handleChange("companyINN")}
                />
                <Text style={styles.validError}>{props.errors.companyINN}</Text>
                <Input
                  onFocus={() => {
                    props.setFieldError("companyAccount", undefined);
                  }}
                  valid={props.errors.companyAccount}
                  placeholder="Bank account"
                  value={props.values.companyAccount}
                  onChangeText={props.handleChange("companyAccount")}
                />
                <Text style={styles.validError}>
                  {props.errors.companyAccount}
                </Text>
                <View>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.buttonStyle}
                    onPress={selectOneFile}
                  >
                    {!singleFile[0] && (
                      <Text style={styles.textDownLoad}>
                        Add your registration certificate
                      </Text>
                    )}
                    {singleFile[0]?.type.includes("image") ? (
                      <Image
                        style={styles.img}
                        source={{
                          uri: `${singleFile[0]?.uri}`,
                        }}
                      />
                    ) : (
                      singleFile[0] && (
                          <Text style={styles.textUpLoad}>File {singleFile[0]?.name} uploaded</Text>
                      )
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <PrivacyPolicy
              value={props.values.privacyPolicyAccepted}
              onValueChange={(checked) => {
                props.setFieldValue("privacyPolicyAccepted", checked);
              }}
            />
            <FilledButton
              disabled={!props.isValid}
              type="submit"
              title="Sign up"
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
