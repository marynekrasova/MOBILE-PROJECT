import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-remix-icon";
import styles from "./styles";

function LogoTitle() {
  return (
    <View style={styles.logoContainer}>
      <Icon name="ri-leaf-fill" color={styles.textHeader.color} size={20} />
      <Text style={styles.textHeader}>AGROEX</Text>
    </View>
  );
}

export default LogoTitle;
