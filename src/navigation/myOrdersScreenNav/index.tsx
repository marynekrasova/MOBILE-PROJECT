import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-remix-icon";
import MyOrdersScreen from "../../screens/myOrdersScreen";
import SuccessScreen from "../../screens/successScreen";
import LogoTitle from "../../components/header/logo";
import InfoAboutOrderScreen from "../../screens/infoAboutOrderScreen";
import styles from "../categoriesScreenNav/styles";

const Stack = createNativeStackNavigator();

function MyOrdersScreenNav({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="MyOrdersScreen"
      screenOptions={({ route }) => ({
        headerShown: true,
      })}
    >
      <Stack.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
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
        name="InfoAboutOrderScreen"
        component={InfoAboutOrderScreen}
        options={{
          headerBackVisible: false,
          headerShown: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyOrdersScreenNav;
