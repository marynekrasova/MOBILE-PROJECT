import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./styles";
import ModeratorListItem from "../../components/moderatorListItem";
import LogoTitle from "../../components/header/logo";
import { getModerationList } from "../../app/slices/ModerationSlice";
import PrimaryButton from "../../components/primaryButton";

export interface ModeratorScreenProps {
  navigation: any;
}

const Stack = createNativeStackNavigator();

function ModeratorScreen({ navigation }: ModeratorScreenProps) {
  const [showLoader, setShowLoader] = useState(false);
  const listOfProducts = useAppSelector(
    (state) => state.moderation.moderationList
  );

  const token = useAppSelector((state) => state.app.token);

  const dispatch = useAppDispatch();
  const makeRequest = () => {
    setShowLoader(true);
    dispatch(getModerationList(token)).then(() => setShowLoader(false));
  };

  useEffect(() => {
    makeRequest();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Moderator"
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen
        name="Moderator"
        children={() => (
          <View style={styles.containerModerator}>
            {showLoader && (
              <View style={styles.loader}>
                <ActivityIndicator size="large" color="#38999B" />
              </View>
            )}
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "position" : "height"}
              keyboardVerticalOffset={150}
            >
              <Text style={styles.textTitleModerator}>Moderator's screen</Text>
              <FlatList
                style={styles.list}
                keyExtractor={(item) => item.id}
                data={listOfProducts}
                renderItem={({ item }) => (
                  <ModeratorListItem item={item} navigation={navigation} />
                )}
                ListEmptyComponent={
                  <Text style={styles.nothingThere}>Nothing there</Text>
                }
              />
            </KeyboardAvoidingView>
          </View>
        )}
        options={{
          headerShown: true, // set to false
          headerTitle: " ",
          headerLeft: () => <LogoTitle />,
          headerRight: () => (
            <PrimaryButton
              title="Update advertisements"
              onPress={() => {
                makeRequest();
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default ModeratorScreen;
