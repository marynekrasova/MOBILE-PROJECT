import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogoTitle from "../../components/header/logo";
import styles from "./styles";
import AuctionScreen from "../../screens/auctionScreen";
import color from "../../constants/colorStyle";
import InfoAboutProductBetScreen from "../../screens/infoAboutProductBetScreen";
import SuccessScreen from "../../screens/successScreen";
import BuyConfirmScreen from "../../screens/buyConfirmScreen";

const Stack = createNativeStackNavigator();

function AuctionScreenNav({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="AuctionScreen"
      screenOptions={() => ({
        headerShown: true,
      })}
    >
      <Stack.Screen
        name="AuctionScreen"
        component={AuctionScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerLeft: () => <LogoTitle />,
        }}
      />
      <Stack.Screen
        name="InfoAboutProductBetScreen"
        component={InfoAboutProductBetScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackTitle: "",
          headerTintColor: color.grey,
          headerBackTitleStyle: styles.logoText,
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
    </Stack.Navigator>
  );
}

export default AuctionScreenNav;
