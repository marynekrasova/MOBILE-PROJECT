import { TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

export interface InputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: string;
  valid?: string;
  onFocus?: () => void;
}

function Input(props: InputProps) {
  return (
    <TextInput
      placeholder={props.placeholder}
      onFocus={props.onFocus}
      style={[styles.input, props.valid ? { borderColor: "red" } : null]}
      value={props.value}
      autoCapitalize="none"
      onChangeText={props.onChangeText}
    />
  );
}

export default Input;
