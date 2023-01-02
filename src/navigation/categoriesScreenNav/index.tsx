import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-remix-icon";
import ProductsListScreen from "../../screens/productsListScreen";
import LogoTitle from "../../components/header/logo";
import CategoriesScreen from "../../screens/categoriesScreen";
import styles from "./styles";
import InfoAboutProductScreen from "../../screens/infoAboutProductScreen";
import color from "../../constants/colorStyle";
import SuccessScreen from "../../screens/successScreen";
import BuyConfirmScreen from "../../screens/buyConfirmScreen";
import GoAuthScreen from "../../screens/goAuthScreen";

const Stack = createNativeStackNavigator();

function CategoriesScreenNav({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="CategoriesScreen"
      screenOptions={({ route }) => ({
        headerShown: true,
      })}
    >
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerLeft: () => <LogoTitle />,
          headerRight: () => (
            <Icon
              name="ri-search-line"
              size={22}
              color="#798787"
              style={styles.headerIcon}
              onPress={() => {}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ProductsListScreen"
        component={ProductsListScreen}
        options={{
          headerBackVisible: false,
          headerShown: true,
          headerTitle: "",
          headerRight: () => (
            <Icon
              name="ri-search-line"
              size={22}
              color="#798787"
              style={styles.headerIcon}
              onPress={() => {}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="InfoAboutProductScreen"
        component={InfoAboutProductScreen}
        options={{
          headerBackVisible: false,
          headerShown: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="BuyConfirmScreen"
        component={BuyConfirmScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GoAuthScreen"
        component={GoAuthScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default CategoriesScreenNav;
