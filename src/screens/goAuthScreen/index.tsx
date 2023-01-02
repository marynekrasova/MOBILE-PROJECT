import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { red } from "react-native-reanimated/lib/types/lib/reanimated2";
import PrimaryButton from "../../components/primaryButton";
import styles from "./styles";

export interface GoAuthProps {
  route: object;
  navigation: any;
}
function GoAuthScreen({ navigation, route }: GoAuthProps) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.close}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.textClose}>X</Text>
      </TouchableOpacity>
      <View style={styles.contantContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Hi!</Text>
          <Text style={styles.textTitle}>You are not an authorized user</Text>
          <Text style={styles.textContent}>
            Please Sign in before you Bet or Buy.
          </Text>
          <Text style={styles.textContent}>
            Do not have an account yet? Register.
          </Text>
        </View>
        <View style={styles.button}>
          <PrimaryButton
            title="Proceed"
            onPress={() => {
              navigation.popToTop();
              navigation.navigate("AuthenticationScreen");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default GoAuthScreen;
