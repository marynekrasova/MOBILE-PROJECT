import { Text, View } from "react-native";
import React from "react";
import CheckBox from "@react-native-community/checkbox";
import styles from "./styles";

function PrivacyPolicy(props) {
  return (
    <View style={styles.privacyBox}>
      <CheckBox
        style={styles.check}
        boxType="square"
        lineWidth={2}
        tintColor="red"
        onCheckColor="#6F763F"
        disabled={false}
        value={props.value}
        onValueChange={props.onValueChange}
      />
      <Text style={styles.text}>
        I am familiar with the{" "}
        <Text style={styles.text_color}>Privacy Policy</Text> and{" "}
        <Text style={styles.text_color}>User Agreement</Text>. I consent to the
        processing of my personal data.
      </Text>
    </View>
  );
}

export default PrivacyPolicy;
