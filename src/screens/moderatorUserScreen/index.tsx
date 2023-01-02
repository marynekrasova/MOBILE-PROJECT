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
import LogoTitle from "../../components/header/logo";
import { getModerationUserList } from "../../app/slices/ModerationSlice";
import PrimaryButton from "../../components/primaryButton";
import ModeratorUserItem from "../../components/moderatorUserItem";

export interface ModeratorUserScreenProps {
  navigation: any;
}

const Stack = createNativeStackNavigator();

function ModeratorUserScreen({ navigation }: ModeratorUserScreenProps) {
  const [showLoader, setShowLoader] = useState(false);
  const listOfUsers = useAppSelector(
    (state) => state.moderation.moderationUserList
  );
  const token = useAppSelector((state) => state.app.token);

  const dispatch = useAppDispatch();
  const makeRequest = () => {
    setShowLoader(true);
    dispatch(getModerationUserList(token)).then(() => setShowLoader(false));
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
              <Text style={styles.textTitleModerator}>
                User moderation screen
              </Text>
              <FlatList
                style={styles.list}
                keyExtractor={(item) => item.id}
                data={listOfUsers}
                renderItem={({ item }) => (
                  <ModeratorUserItem item={item} navigation={navigation} />
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
              title="Update users"
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

export default ModeratorUserScreen;
