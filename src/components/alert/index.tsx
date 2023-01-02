import { Text, View, FlatList, ScrollView } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

export interface AlertProps {
  title?: string;
  text?: string[] | string;
}

function Alert(props: AlertProps) {

  return (
    <View style={styles.alertContainer}>
      <View style={styles.iconTitleContainer}>
        <Ionicons
          name="information-circle-outline"
          color="#EB3D26"
          style={styles.alertIcon}
        />
        <Text style={styles.alertTitle}>Error</Text>
      </View>
      {typeof props.text === "string" ? (
        <Text style={styles.textContainer}>{props.text}</Text>
      ) : (
        <ScrollView horizontal style={styles.textContainer}>
          <FlatList
            data={props.text}
            renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
          />
        </ScrollView>
      )}
    </View>
  );
}

export default Alert;
