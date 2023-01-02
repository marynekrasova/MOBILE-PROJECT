import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-remix-icon";
import messaging from "@react-native-firebase/messaging";
import { Alert } from "react-native";
import { useEffect } from "react";
import AuthenticationScreen from "../screens/authenticationScreen";
import LogoTitle from "../components/header/logo";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import CategoriesScreenNav from "./categoriesScreenNav";
import styles from "./styles";
import AdvertisementStack from "./addAdvertisementScreenNav";
import ModeratorScreen from "../screens/moderatorScreen";
import AuctionScreenNav from "./auctionScreenNav";
import color from "../constants/colorStyle";
import { setNotification } from "../app/slices/NotificationsSlice";
import MyOrdersScreenNav from "./myOrdersScreenNav";
import ModeratorUserScreen from "../screens/moderatorUserScreen";

const Tab = createBottomTabNavigator();

function Navigation() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      if (remoteMessage) {
        Alert.alert(
          remoteMessage?.notification?.title,
          remoteMessage?.notification?.body
        );
        dispatch(setNotification(remoteMessage));
      }
    });
    return unsubscribe;
  }, []);

  const userInfo = useAppSelector((state) => state.app.loginData.user);
  const token = useAppSelector((state) => state.app.token);

  function checkRole(role: number): boolean {
    for (let i: number = 0; i < userInfo.userRoles.length; i++) {
      if (userInfo.userRoles[i].role_id === role) {
        return true;
      }
    }
    return false;
  }

  function changeIcon(route, focused, color, size) {
    let iconName;
    if (route.name === "CategoriesScreenNav") {
      iconName = focused ? "ri-home-4-fill" : "ri-home-4-line";
    } else if (route.name === "AuthenticationScreen") {
      iconName = focused ? "ri-account-circle-fill" : "ri-account-circle-line";
    } else if (route.name === "AdvertisementStack") {
      iconName = focused ? "ri-add-box-fill" : "ri-add-box-line";
    } else if (route.name === "AuctionScreenNav") {
      if (token && checkRole(3)) {
        iconName = focused ? "ri-group-fill" : "ri-group-line";
      } else {
        iconName = focused ? "ri-auction-fill" : "ri-auction-line";
      }
    } else if (route.name === "MyOrdersScreenNav") {
      iconName = focused ? "ri-truck-fill" : "ri-truck-line";
    }
    return <Icon name={iconName} size={size} color={color} />;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          changeIcon(route, focused, color, size),
        tabBarActiveTintColor: color.colorTabButton,
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        headerShown: true, // set to false
        headerLeft: () => <LogoTitle />,
        headerRight: () => (
          <Icon
            name="ri-search-line"
            size={22}
            color="#798787"
            style={styles.headerIcon}
            onPress={() => {
              console.log("clicked");
            }}
          />
        ),
      })}
    >
      <Tab.Screen
        name="CategoriesScreenNav"
        component={
          token && checkRole(3) ? ModeratorScreen : CategoriesScreenNav
        }
        options={{ headerShown: false }}
      />
      {token && checkRole(1) ? (
        <Tab.Screen
          name="AuctionScreenNav"
          component={token && checkRole(3) ? ModeratorUserScreen : AuctionScreenNav}
          options={{ headerShown: false }}
        />
      ) : null}
      {token && checkRole(1) ? (
        <Tab.Screen
          name="AdvertisementStack"
          component={AdvertisementStack}
          options={{ headerShown: false }}
        />
      ) : null}
      {token && checkRole(1) ? (
        <Tab.Screen
          name="MyOrdersScreenNav"
          component={MyOrdersScreenNav}
          options={{ headerShown: false }}
        />
      ) : null}
      <Tab.Screen
        name="AuthenticationScreen"
        component={AuthenticationScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;
