import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export interface InfoLineProps {
  title?: string;
  styleInfo?: Object;
  value?: string;
  unit?: string;
  styleBet?: Object;
}
export default function InfoLine({
  title,
  styleInfo,
  styleBet,
  value,
  unit,
}: InfoLineProps) {
  return (
    <View style={styles.textContainer}>
      <Text style={[styles.textBody, styles.textColor, styleInfo, styleBet]}>
        {title}
      </Text>
      <Text style={[styles.textBody, styleInfo]}>
        {value} {unit}
      </Text>
    </View>
  );
}
