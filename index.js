/**
 * @format
 */

import { AppRegistry } from "react-native";
import messaging from "@react-native-firebase/messaging";
import { LogBox } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log("Message handled in the background!", remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
