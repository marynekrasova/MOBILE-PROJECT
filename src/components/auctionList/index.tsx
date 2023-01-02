import { FlatList, Text, View } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAuctionList } from "../../app/slices/CategoriesSlice";
import AuctionListItem from "../auctionListItem";
import ProductsListDivider from "../productsListDivider";
import { useIsFocused } from '@react-navigation/native';

export interface AuctionListProps {
  navigation: any;
}

function AuctionList({ navigation }: AuctionListProps) {
  const isFocused = useIsFocused();
  const listOfAuction = useAppSelector((state) => state.categories.auctionList);
  const token = useAppSelector((state) => state.app.token);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAuctionList(token));
  }, [isFocused]);

  return (
    <FlatList
      style={styles.list}
      keyExtractor={(item) => item.id}
      data={listOfAuction}
      renderItem={({ item }) => (
        <View>
          <AuctionListItem product={item} navigation={navigation} />
          <ProductsListDivider></ProductsListDivider>
        </View>
      )}
      ListEmptyComponent={
        <View style={styles.container}>
          <Text style={styles.infoText}>Nothing there</Text>
        </View>
      }
    />
  );
}

export default AuctionList;
