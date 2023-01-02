import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styles from "./styles";
import MyAdvertisementsList from "../../components/myAdvertisementsList";
import { useAppSelector } from "../../app/hooks";

function SecondRoute() {
  return <Text>Inactive</Text>;
}

function MyAdvertisementsScreen({ navigation }) {
  const Tab = createMaterialTopTabNavigator();
  const listOfAdvertisements = useAppSelector(
    (state) => state.categories.myAdvertisements
  );
  const listActive = listOfAdvertisements.filter((item) => item.isActive);
  const listPending = listOfAdvertisements.filter(
    (item) => !item.isModerated || item.moderationStatus === "rejected"
  );
  const listExpired = listOfAdvertisements.filter((item) => item.isConfirmed);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarIndicatorStyle: styles.tabBarIdicatorStyle,
        tabBarLabelStyle: styles.tabBarStyle,
      }}
      sceneContainerStyle={{ overflow: "visible" }}
    >
      <Tab.Screen
        name="Active"
        children={() => (
          <MyAdvertisementsList
            listState="Active"
            navigation={navigation}
            list={listActive}
          />
        )}
      />
      <Tab.Screen
        name="Pending"
        children={() => (
          <MyAdvertisementsList
            listState="Pending"
            navigation={navigation}
            list={listPending}
          />
        )}
      />
      <Tab.Screen
        name="Expired"
        children={() => (
          <MyAdvertisementsList
            listState="Expired"
            navigation={navigation}
            list={listExpired}
          />
        )}
      />
    </Tab.Navigator>
  );
}

export default MyAdvertisementsScreen;
