import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import BorderedFormContainer from "../../components/borderedFormContainer";
import SecondaryButton from "../../components/secondaryButton";
import LoginForm from "../../components/loginForm";

function LogInScreen({ navigation }) {
  const signinHandlerForLogin = () => {
    navigation.navigate("Registration");
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollBox}>
      <View style={styles.mainContainer}>
        <LoginForm navigation={navigation} />
        <BorderedFormContainer>
          <Text style={styles.noAccountText}>Don't have an account?</Text>
          <SecondaryButton title="Sign up" onPress={signinHandlerForLogin} />
          <Text style={styles.companyText}>© 2022 AGROEX</Text>
        </BorderedFormContainer>
      </View>
    </ScrollView>
  );
}

export default LogInScreen;
