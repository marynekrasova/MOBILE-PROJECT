import { FlatList, Button, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styles from "./styles";
import MyOrdersList from "../../components/myOrdersList";

function MyOrdersScreen({ navigation }) {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}
      sceneContainerStyle={styles.sceneContainerStyle}
    >
      <Tab.Screen name="Active" component={MyOrdersList} />
      <Tab.Screen
        name="Delivered"
        children={() => (
          <View style={styles.containerStyle}>
            <Text style={styles.infoText}>Nothing there</Text>
          </View>
        )}
      />
    </Tab.Navigator>
  );
}

export default MyOrdersScreen;
