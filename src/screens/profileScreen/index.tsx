import { View, Text, ScrollView, TouchableOpacity, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-remix-icon";
import styles from "./styles";
import ProfileLink from "../../components/profileLink";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logOut } from "../../app/slices/AppSlice";
import { deleteAllNotifications, setNotification } from "../../app/slices/NotificationsSlice";
import { getUsersAdvertisements } from "../../app/slices/CategoriesSlice";

function ProfileScreen({ navigation }) {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.app.token);
  useEffect(() => {
    dispatch(getUsersAdvertisements(token));
  }, []);
  const notificationList = useAppSelector(
    (state) => state.notification.notificationList
  );
  const userData = useAppSelector((state) => state.app.loginData.user);
  const listOfAdvertisements = useAppSelector(
    (state) => state.categories.myAdvertisements
  );
  const list = listOfAdvertisements.filter((item) => item.isActive);
  return (
    <ScrollView contentContainerStyle={styles.scrollBox}>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.accountContainer}>
          <View style={styles.infoContainer}>
            <Icon
              name="ri-checkbox-blank-circle-fill"
              color={styles.accountIcon.color}
              size={80}
            />
            <View style={styles.accountText}>
              <Text style={styles.title}>{userData.username}</Text>
              <Text style={styles.phone}>{userData.email}</Text>
              <Text style={styles.phone}>{userData.phone}</Text>
            </View>
          </View>
          <Icon name="ri-arrow-right-s-line" color={styles.icon.color} />
        </TouchableOpacity>

        <ProfileLink
          text="My advertisements"
          name="ri-plant-line"
          border
          onPressFunc={() => {
            navigation.navigate("MyAdvertisementsScreen");
          }}
        >
          <Text style={styles.blueText}>{list.length}</Text>
        </ProfileLink>
        <ProfileLink text="Currency" name="ri-currency-line">
          <Text style={styles.blackText}>USD, $</Text>
        </ProfileLink>
        <ProfileLink text="Language" name="ri-global-line">
          <Text style={styles.blackText}>ENG</Text>
        </ProfileLink>
        <ProfileLink
          text="Notifications"
          name="ri-notification-line"
          onPressFunc={() => {
            navigation.navigate("NotificationScreen");
          }}
        >
          <Text style={styles.blueText}>{notificationList.length}</Text>
        </ProfileLink>
        <ProfileLink text="Change Password" name="ri-lock-line" />
        <ProfileLink text="Settings" name="ri-settings-3-line" />
        <ProfileLink text="Help" name="ri-question-line" border />
        <ProfileLink
          text="Log out"
          name="ri-logout-box-r-line"
          onPressFunc={() => {
            dispatch(logOut());
            dispatch(deleteAllNotifications());
          }}
        />
      </View>
    </ScrollView>
  );
}

export default ProfileScreen;
