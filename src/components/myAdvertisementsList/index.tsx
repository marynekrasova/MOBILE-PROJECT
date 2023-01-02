import { FlatList, Text, View } from "react-native";
import React, { useEffect, useState, useMemo } from "react";
import styles from "./styles";
import MyAdvertisementsListItem from "../myAdvertisementsListItem";
import ModalForm from "../modal";
import ProfileLink from "../profileLink";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUsersAdvertisements } from "../../app/slices/CategoriesSlice";
import { array } from "yup";

export interface MyAdvertisementsListProps {
  listState: string;
  navigation: any;
  list: Array<object>;
}

function MyAdvertisementsList({
  navigation,
  listState,
  list,
}: MyAdvertisementsListProps) {
  const [page, setPage] = useState(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.app.token);
  const [advertItem, setAdvertItem] = useState({});
  const makeRequest = () => {
    dispatch(getUsersAdvertisements(token));
  };

  const handleLoadMore = () => {
    makeRequest();
    setPage(page + 1);
  };

  useEffect(() => {
    makeRequest();
    setPage(page + 1);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={styles.list}
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={({ item }) => (
          <MyAdvertisementsListItem
            faded={listState === "Pending"}
            expired={listState === "Expired"}
            item={item}
            onManage={setShowModal}
            changePress={setAdvertItem}
            navigation={navigation}
          />
        )}
        onEndReached={() => {
          handleLoadMore();
        }}
        onEndReachedThreshold={0}
        ListEmptyComponent={<Text style={styles.infoText}>Nothing there</Text>}
      />
      {showModal && (
        <ModalForm setShowModal={setShowModal}>
          <View style={styles.modalContainer}>
            {(advertItem.moderationStatus === "rejected" ||
              advertItem.moderationStatus === "unmoderated") && (
              <ProfileLink
                text="Edit"
                name="ri-pencil-line"
                onPressFunc={() => {
                  navigation.navigate("AddAdvertisementScreen", {
                    advertItem,
                    editMode,
                  });
                  setShowModal(false);
                }}
              />
            )}
            <ProfileLink
              text="Deactivate"
              name="ri-shut-down-line"
              color="#D40000"
            />
          </View>
        </ModalForm>
      )}
    </View>
  );
}

export default MyAdvertisementsList;
