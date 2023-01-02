import React, { useMemo, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./styles";
import FilledButton from "../primaryButton";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addBet,
  getAuctionList,
  getProductList,
} from "../../app/slices/CategoriesSlice";
import Alert from "../alert";

export interface BetProps {
  price: string;
  currency: string;
  setShowModal: any;
  slug: string;
  bet: string;
  navigation: any;
  quantity: string;
  unit: string;
  categoryName: string;
}

export default function BetForm({
  slug,
  price,
  bet,
  currency,
  quantity,
  unit,
  setShowModal,
  categoryName,
  navigation,
}: BetProps) {
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState([]);
  const DisplayingErrorSchema = Yup.object().shape({
    bet: Yup.number()
      .min(bet ? bet + 1 : 1, "Too small bet.")
      .max(price - 1, "Too big bet.")
      .required("You must enter a number.")
      .typeError("You must enter a number."),
  });
  const valueCurrency = useMemo(() => {
    switch (currency) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      default:
        return `UZS`;
    }
  }, [currency]);
  const valueUnit = useMemo(() => {
    switch (unit) {
      case "kg":
        return 1;
      case "ton":
        return 1000;
      default:
        return 1;
    }
  }, [unit]);
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.app.token);
  function betHandler(
    values: {
      bet: string;
      slug: string;
    },
    resetForm: any
  ) {
    dispatch(addBet({ ...values, token })).then((response) => {
      const page = 0;
      if (response.payload.status >= 200 && response.payload.status < 300) {
        dispatch(getProductList({ page, categoryName }));
        dispatch(getAuctionList(token));
        setShowAlert(false);
        resetForm();
        setShowModal(false);
      } else {
        setAlertText(response.payload.data.message);
        setShowAlert(true);
        dispatch(getProductList({ page, categoryName }));
        dispatch(getAuctionList(token));
      }
    });
  }
  return (
    <View style={styles.formContainer}>
      {showAlert ? (
        <View style={styles.alertContainer}>
          <Alert title="Error" text={alertText} />
        </View>
      ) : null}
      <Formik
        initialValues={{
          bet: "",
          slug: "",
        }}
        validationSchema={DisplayingErrorSchema}
        onSubmit={(values, { resetForm }) => {
          betHandler(values, resetForm);
        }}
      >
        {(props) => (
          <View style={styles.inputContainer}>
            <View
              style={[
                styles.input,
                props.errors.bet ? { borderColor: "red" } : null,
              ]}
            >
              <Text style={styles.inputCurrency}>{valueCurrency}</Text>
              <TextInput
                style={styles.textInput}
                maxLength={11}
                autoFocus
                placeholder="Bet"
                value={props.values.bet}
                onChangeText={props.handleChange("bet")}
                keyboardType="phone-pad"
              />
            </View>
            <Text style={styles.validError}>
              {props.errors.bet} Price from {bet ? +bet + 1 : "1"} to{" "}
              {price - 1}
            </Text>
            <Text style={styles.textBetPerKg}>
              {` ${
                +(props.values.bet / (quantity * valueUnit)).toFixed(2) < 0.01
                  ? "0.01"
                  : (props.values.bet / (quantity * valueUnit)).toFixed(2)
              }${valueCurrency}/`}
              {unit === "pcs" ? "pcs" : "kg"}
            </Text>
            <FilledButton
              disabled={!props.isValid}
              type="submit"
              title={`Bet  ${valueCurrency}${props.values.bet}`}
              onPress={() => {
                props.values.slug = slug;
                props.handleSubmit();
              }}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
