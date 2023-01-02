import { FlatList, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import NotificationItem from "../../components/notificationItem";

export interface NotificationScreenProps {
  navigation?: any;
}

function NotificationScreen(props: NotificationScreenProps) {
  const notificationList = useAppSelector(
    (state) => state.notification.notificationList
  );
  return (
    <View style={{ flex: 1 }}>
      <>
        <FlatList
          style={styles.list}
          keyExtractor={(item) => item.title}
          data={notificationList}
          renderItem={({ item }) => (
            <NotificationItem
              settings={{
                type: item?.data?.type,
                buttons: [
                  {
                    type: "primary",
                  },
                ],
              }}
              navigation={props.navigation}
              item={item}
            />
          )}
          ListEmptyComponent={
            <Text style={styles.infoText}>Nothing there</Text>
          }
        />
      </>
    </View>
  );
}

export default NotificationScreen;
