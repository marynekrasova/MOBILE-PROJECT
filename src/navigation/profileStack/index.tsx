import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-remix-icon";
import { Text, TouchableOpacity, View } from "react-native";
import RegistrationScreen from "../../screens/registrationScreen";
import EmailConfirmScreen from "../../screens/emailConfirmScreen";
import LogInScreen from "../../screens/logInScreen";
import ProductsListScreen from "../../screens/productsListScreen";
import ProfileScreen from "../../screens/profileScreen";
import MyAdvertisementsScreen from "../../screens/myAdvertisementsScreen";
import MyOrdersScreen from "../../screens/myOrdersScreen";
import LogoTitle from "../../components/header/logo";
import styles from "./styles";
import AddAdvertisementScreen from "../../screens/addAdvertisementScreen";
import SuccessScreen from "../../screens/successScreen";
import NotificationScreen from "../../screens/notificationScreen";

const Stack = createNativeStackNavigator();

function ProfileStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyAdvertisementsScreen"
        component={MyAdvertisementsScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              style={styles.headerContainer}
              onPress={() => {
                navigation.navigate("ProfileScreen");
              }}
            >
              <Icon
                name="ri-arrow-left-s-line"
                size={30}
                color="#798787"
                style={styles.headerIcon}
              />
              <Text style={styles.textCategory}>My advertisements</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              style={styles.headerContainer}
              onPress={() => {
                navigation.navigate("ProfileScreen");
              }}
            >
              <Icon
                name="ri-arrow-left-s-line"
                size={30}
                color="#798787"
                style={styles.headerIcon}
              />
              <Text style={styles.textCategory}>Notifications</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="AddAdvertisementScreen"
        component={AddAdvertisementScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;
