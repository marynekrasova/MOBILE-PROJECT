import { Text, View, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import BorderedFormContainer from "../../components/borderedFormContainer";
import SecondaryButton from "../../components/secondaryButton";
import RegistrationForm from "../../components/registrationForm";

function RegistrationScreen({ navigation }) {
  const loginHandlerForSigh = () => {
    navigation.navigate("LogIn");
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollBox}>
      <View style={styles.mainContainer}>
        <RegistrationForm navigation={navigation} />
        <BorderedFormContainer>
          <Text style={styles.noAccountText}>Already have an account?</Text>
          <SecondaryButton title="Log in" onPress={loginHandlerForSigh} />
          <Text style={styles.companyText}>© 2022 AGROEX</Text>
        </BorderedFormContainer>
      </View>
    </ScrollView>
  );
}

export default RegistrationScreen;
