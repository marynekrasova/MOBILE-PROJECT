import { FlatList, View } from "react-native";
import React from "react";
import FilterButton from "../filterButton";
import styles from "./styles";

export interface HorizontalFilterListProps {
  filters: string[];
}

function HorizontalFilterList(props: HorizontalFilterListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.horizontalFilterList}
        horizontal
        data={props.filters}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <FilterButton filter={item} />}
      />
    </View>
  );
}

export default HorizontalFilterList;
