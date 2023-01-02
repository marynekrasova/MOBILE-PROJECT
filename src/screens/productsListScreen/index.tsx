import { View } from "react-native";
import React, { useEffect } from "react";
import HorizontalFilterList from "../../components/horizontalFilterList";
import ProductsList from "../../components/productsList";
import styles from "./styles";
import HeaderLeft from "../../components/headerLeft";

const filters = ["Popular lots", "Best price", "New lots"];
export interface ProductsListProps {
  route: {
    params: {
      category: string;
    };
  };
  navigation: any;
}
function ProductsListScreen({ route, navigation }: ProductsListProps) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderLeft
          title={route.params.category}
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
  }, []);
  return (
    <View style={styles.screenContainer}>
      <HorizontalFilterList filters={filters} />
      <ProductsList navigation={navigation} category={route.params.category} />
    </View>
  );
}

export default ProductsListScreen;
