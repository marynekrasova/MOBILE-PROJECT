import { FlatList, View } from "react-native";
import React from "react";
import FilterButton from "../filterButton";
import styles from "./styles";

export interface HorizontalButtonsListProps {
  children?: React.ReactNode;
}

function HorizontalButtonsList({children}: HorizontalButtonsListProps) {
  return (
  <View style={styles.container}>
    {children}
  </View>
)
}

export default HorizontalButtonsList;
