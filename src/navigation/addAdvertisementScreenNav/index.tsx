import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddAdvertisementScreen from "../../screens/addAdvertisementScreen";
import PreviewAdScreen from "../../screens/previewAdScreen";
import SuccessScreen from "../../screens/successScreen";
import styles from "./styles";

const AdvertisementStack = createNativeStackNavigator();

function AdvertisementScreenNav() {
  return (
    <AdvertisementStack.Navigator initialRouteName="AddAdvertisementScreen">
      <AdvertisementStack.Screen
        name="AddAdvertisementScreen"
        component={AddAdvertisementScreen}
        options={{ headerShown: false }}
      />
      <AdvertisementStack.Screen
        name="PreviewAdScreen"
        component={PreviewAdScreen}
        options={{
          headerBackTitle: "Preview ad",
          headerBackTitleStyle: styles.headerText,
          headerTintColor: "#131314",
          headerTitle: "",
        }}
      />
      <AdvertisementStack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{ headerShown: false }}
      />
    </AdvertisementStack.Navigator>
  );
}

export default AdvertisementScreenNav;
