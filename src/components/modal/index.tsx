import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-remix-icon";
import styles from "./styles";

export interface ModalFormContainerProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}
function ModalForm({ setShowModal, children }: ModalFormContainerProps) {
  return (
    <Modal animationType="slide" transparent visible>
      <View style={styles.formContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.content}>
            {children}
            <TouchableOpacity
              style={styles.close}
              onPress={() => setShowModal(false)}
            >
              <Icon
                name="ri-close-line"
                size={20}
                color={styles.colorIcon.color}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

export default ModalForm;
