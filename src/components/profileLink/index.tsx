import { Modal, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-remix-icon";
import styles from "./styles";

export interface ProfileLinkProps {
  text: string;
  name: string;
  border?: boolean;
  onPressFunc?: () => void;
  children?: React.ReactNode;
  color?: string;
}

function ProfileLink({
  text,
  name,
  border,
  onPressFunc,
  children,
  color,
}: ProfileLinkProps) {
  return (
    <TouchableOpacity
      style={border ? styles.bordered : styles.clear}
      onPress={onPressFunc}
    >
      <View style={styles.title}>
        <Icon name={name} color={color ? color : styles.icon.color} />
        <Text style={[styles.noAccountText, color ? { color: color } : null]}>
          {text}
        </Text>
      </View>
      {children}
    </TouchableOpacity>
  );
}

export default ProfileLink;
