import { View } from "react-native";
import React from "react";
import styles from "./styles";

export interface BorderedFormContainerProps {
  placeholder?: string;
  children?: React.ReactNode;
}

function BorderedFormContainer(props: BorderedFormContainerProps) {
  return <View style={styles.borderedContainer}>{props.children}</View>;
}

export default BorderedFormContainer;
