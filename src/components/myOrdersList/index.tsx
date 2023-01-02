import { FlatList, Button, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { REACT_APP_DEV_LINK } from "@env";
import styles from "./styles";
import MyOrdersListItem from "../myOrdersListItem";
import ModalForm from "../modal";
import ProfileLink from "../profileLink";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getUsersOrders } from "../../app/slices/CategoriesSlice";
import MyAdvertisementsList from "../myAdvertisementsList";
import ProductsListDivider from "../productsListDivider";

export interface MyOrdersListProps {
  listState: string;
  navigation: any;
}

function MyOrdersList({ navigation, listState }: MyOrdersListProps) {
  const listOfAdvertisements = useAppSelector(
    (state) => state.categories.myOrders
  );
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.app.token);
  const makeRequest = () => {
    dispatch(getUsersOrders(token));
  };
  useEffect(() => {
    makeRequest();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={styles.list}
        keyExtractor={(item) => item.id}
        data={listOfAdvertisements}
        renderItem={({ item }) => (
          <View>
            <MyOrdersListItem item={item} navigation={navigation} />
            <ProductsListDivider />
          </View>
        )}
        ListEmptyComponent={<Text style={styles.infoText}>Nothing there</Text>}
      />
    </View>
  );
}

export default MyOrdersList;
