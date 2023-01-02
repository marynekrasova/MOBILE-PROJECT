import { Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import FilledButton from "../../components/primaryButton";
import Icon from "react-native-remix-icon";

function EmailConfirmScreen({ navigation }) {
  const email = "samfoss92@gmail.com";
  const signinHandlerEmail = () => {
    navigation.popToTop();
    navigation.navigate("CategoriesScreenNav");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textHeder}>Confirm your email address</Text>
      <Text style={styles.textBody}>
        We sent an email to <Text style={{ color: "#51ACAE" }}>{email}</Text>.
        Follow the link in the email to complete your registration. If you don't
        find the email, check your spam box.
      </Text>
      <View style={styles.warning}>
        <Icon name="ri-alert-line" size={20} color={"#F87E25"} />
        <Text style={styles.textBodyColor}>
          If you don't find the email, check your spam.
        </Text>
      </View>
      <FilledButton
        color=""
        title="Go to email"
        width={"100%"}
        onPress={signinHandlerEmail}
      />
    </View>
  );
}

export default EmailConfirmScreen;
