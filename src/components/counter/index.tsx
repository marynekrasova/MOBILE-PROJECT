import { Button, Text, View } from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { increment, decrement } from "../../app/slices/AppSlice";
import styles from "./styles";

function CountFood() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.value);
  return (
    <View style={styles.block}>
      <Button title="-" onPress={() => dispatch(decrement())} />
      <Text style={styles.block_text}>{count}</Text>
      <Button title="+" onPress={() => dispatch(increment())} />
    </View>
  );
}

export default CountFood;
