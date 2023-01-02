import { Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-remix-icon";
import styles from "./styles";

export interface PrimaryButtonProps {
  title?: string;
  border?: boolean;
  borderColor?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  icon?: string;
  width?: number;
}

function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      style={[
        styles.buttonContainer,
        props.disabled ? styles.disabledBtn : null,
        props.width ? { width: `${props.width}%` } : null,
      ]}
    >
      {props.icon ? (
        <Icon name={props.icon} color="white" size={18} style={styles.icon} />
      ) : null}
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default PrimaryButton;
