import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "./styles";

export interface DropdownProps {
  placeholder: string;
  value: string;
  options: [];
  setValue: void;
  style: {};
  listMode: string;
}
export default function DropdownMenu({
  placeholder,
  style,
  value,
  setValue,
  options,
  listMode,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(options);
  return (
    <View>
      <DropDownPicker
        textStyle={styles.text}
        style={[styles.formContainer, style]}
        placeholder={placeholder}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        listMode={listMode}
      />
    </View>
  );
}
