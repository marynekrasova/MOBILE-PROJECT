import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "../../screens/registrationScreen";
import EmailConfirmScreen from "../../screens/emailConfirmScreen";
import LogInScreen from "../../screens/logInScreen";
import ProductsListScreen from "../../screens/productsListScreen";
import ProfileScreen from "../../screens/profileScreen";
import ProfileStack from "../profileStack";
import { useAppSelector } from "../../app/hooks";
import AddAdvertisementScreen from "../../screens/addAdvertisementScreen";

const AuthStack = createNativeStackNavigator();

function AuthenticationScreenNav() {
  const userInfo = useAppSelector((state) => {
    console.log(state);
    return state.app.loginData.user;
  });

  const token = useAppSelector((state) => {
    return state.app.token;
  });

  return (
    <AuthStack.Navigator initialRouteName={!token ? "LogIn" : "Profile"}>
      {!token ? (
        <AuthStack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{ headerShown: false }}
        />
      ) : null}
      {!token ? (
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
      ) : null}
      {!token ? (
        <AuthStack.Screen
          name="EmailConfirm"
          component={EmailConfirmScreen}
          options={{ headerShown: false }}
        />
      ) : null}
      {token ? (
        <AuthStack.Screen
          name="Profile"
          component={ProfileStack}
          options={{ headerShown: false }}
        />
      ) : null}
    </AuthStack.Navigator>
  );
}

export default AuthenticationScreenNav;
