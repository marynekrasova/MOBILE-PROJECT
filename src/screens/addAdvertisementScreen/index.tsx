import { SafeAreaView, Text } from "react-native";
import React from "react";
import styles from "./styles";
import AdvertForm from "../../components/addFormAdvertisement";

export interface AddScreenProps {
  route: {
    params: {
      editMode: boolean;
      advertItem: object;
    };
  };
  navigation: any;
}
function AddAdvertisementScreen({ navigation, route }: AddScreenProps) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.titleText}>
        {route?.params?.editMode ? "Change" : "New"} advertisement
      </Text>
      <AdvertForm
        navigation={navigation}
        params={route?.params?.advertItem}
        editMode={route?.params?.editMode}
      />
    </SafeAreaView>
  );
}

export default AddAdvertisementScreen;
