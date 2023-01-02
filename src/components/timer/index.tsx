import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-remix-icon";
import styles from "./styles";

export interface TimerProps {
  dataTime?: string;
}
export default function Timer(dataTime: TimerProps) {
  const [date, setDate] = useState(null);
  useEffect(() => {
    setInterval(() => {
      const duration = Date.parse(dataTime.dataTime) - Date.now();
      const seconds = parseInt((duration / 1000) % 60);
      const minutes = parseInt((duration / (1000 * 60)) % 60);
      const hours = parseInt((duration / (1000 * 60 * 60)) % 24);
      const days = parseInt(duration / (1000 * 60 * 60 * 24));
      if (hours > 0) {
        setDate(`${days}d` + ` ${hours}h`) ? duration > 0 : null;
      } else {
        setDate(`${minutes}m` + ` ${seconds}s`) ? duration > 0 : null;
      }
    }, 1000);
  });
  return (
    <View style={styles.priceTimeContainer}>
      <View>
        <Icon
          name="ri-time-line"
          size={10}
          color="#2978B8"
          style={styles.Icon}
        />
      </View>
      <View>
        <Text style={styles.priceTime}>{date}</Text>
      </View>
    </View>
  );
}
