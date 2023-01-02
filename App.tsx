import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { Alert } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import messaging from "@react-native-firebase/messaging";
import Navigation from "./src/navigation";
import { persistor, store } from "./src/app/store";

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

const AgroexTheme = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "rgb(255, 255, 255)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

function App() {
  React.useEffect(() => {
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      if (enabled) {
        messaging()
          .getToken()
          .then((fcmToken) => {
            if (fcmToken) {
              console.warn(fcmToken);
            } else {
              console.warn("[FCMService] user does not have a device token");
            }
          })
          .catch((error) => {
            console.warn("[FCMService] getToken rejected ", error);
          });
      }
    }
    requestUserPermission();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={AgroexTheme}>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
