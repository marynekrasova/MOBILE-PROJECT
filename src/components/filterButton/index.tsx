import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

export interface FilterButtonProps {
  filter?: string;
}

function FilterButton(props: FilterButtonProps) {
  return (
    <TouchableOpacity style={styles.filterButton}>
      <Text style={styles.filterText}>{props.filter}</Text>
    </TouchableOpacity>
  );
}

export default FilterButton;
