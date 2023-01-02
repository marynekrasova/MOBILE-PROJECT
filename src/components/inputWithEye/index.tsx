import { TouchableOpacity, TextInput, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-remix-icon";
import styles from "./styles";

export interface InputWithEyeProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (value: string) => void;
  valid?: string;
  onFocus?: () => void;
}

function InputWithEye(props: InputWithEyeProps) {
  const [passwordVisible, setPasswordVisible] = useState(true);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onFocus={props.onFocus}
        style={[styles.input, props.valid ? { borderColor: "red" } : null]}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={passwordVisible}
      />
      <TouchableOpacity
        onPress={() => setPasswordVisible(!passwordVisible)}
        style={styles.pres}
      >
        <Icon name={passwordVisible ? "ri-eye-off-line" : "ri-eye-off-fill"} />
      </TouchableOpacity>
    </View>
  );
}

export default InputWithEye;
