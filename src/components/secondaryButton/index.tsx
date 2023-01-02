import { Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import Icon from "react-native-remix-icon";

export interface SecondaryButtonProps {
  title?: string;
  onPress?: void;
  icon?: string;
  width?: number;
  disabled?: boolean;
  styleIcon?: Object;
}

function SecondaryButton({ title, onPress, icon, width, disabled, styleIcon}: SecondaryButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        disabled ? styles.disabledBtn : null,
        width ? { width: `${width}%` } : null,
      ]}
    >
      {icon ? (
        <Icon name={icon} color="#38999B" size={18} style={[styles.icon, styleIcon]} />
      ) : null}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default SecondaryButton;
