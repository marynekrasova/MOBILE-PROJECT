import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import ProductsListItem from "../productsListItem";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getProductList } from "../../app/slices/CategoriesSlice";
import Divider from "../productsListDivider";

export interface ProductsListProps {
  navigation: any;
  category: string;
}

function ProductsList({ navigation, category }: ProductsListProps) {
  const [page, setPage] = useState(0);
  const categoryName = category.split(" ").join("-").toLowerCase();
  const [showLoader, setShowLoader] = useState(false);
  const listOfProducts = useAppSelector(
    (state) => state.categories.productList
  );
  const dispatch = useAppDispatch();
  const makeRequest = () => {
    dispatch(getProductList({ page, categoryName })).then(() =>
      setShowLoader(false)
    );
  };

  const handleLoadMore = () => {
    makeRequest();
    setPage(page + 1);
  };

  useEffect(() => {
    setShowLoader(true);
    makeRequest();
    setPage(page + 1);
  }, []);

  if (listOfProducts?.length !== 0) {
    return (
      <View style={styles.container}>
        {showLoader && (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#38999B" />
          </View>
        )}
        <FlatList
          style={styles.list}
          keyExtractor={(item) => item.id}
          data={listOfProducts}
          renderItem={({ item }) => (
            <View>
              <ProductsListItem
                product={item}
                navigation={navigation}
                categoryName={categoryName}
              />
              <Divider />
            </View>
          )}
          onEndReached={() => {
            handleLoadMore();
          }}
          onEndReachedThreshold={0}
        />
      </View>
    );
  }
  return (
    <View style={styles.nothingThere}>
      <Text>Nothing there</Text>
    </View>
  );
}

export default ProductsList;
