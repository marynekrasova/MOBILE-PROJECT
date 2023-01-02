import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-remix-icon";
import styles from "./styles";
import color from "../../constants/colorStyle";

export interface HeaderLeftProps {
  onPress: any;
  title: string;
}
function HeaderLeft({ onPress, title }: HeaderLeftProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.logoContainer}>
      <Icon
        name="ri-arrow-left-s-line"
        size={30}
        color={color.grey}
        style={styles.headerIcon}
      />
      <Text style={styles.logoText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default HeaderLeft;
