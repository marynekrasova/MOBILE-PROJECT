import { FlatList, Text, View, TouchableOpacity, Button } from "react-native";
import React, { useEffect } from "react";
import { SvgCssUri } from "react-native-svg";
import Icon from "react-native-remix-icon";
import styles from "./styles";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getCategories } from "../../app/slices/CategoriesSlice";
import color from "../../constants/colorStyle";

function CategoryList({ navigation }) {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate("ProductsListScreen", {
                category: item.title,
              });
            }}
          >
            <View style={styles.item_box_svg}>
              <Icon name="ri-seedling-line" size={26} color={color.grey} />
              <Text style={styles.item_text}>{item.title}</Text>
            </View>
            <View style={styles.button}>
              <Icon name="ri-arrow-right-s-line" size={26} color={color.grey} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default CategoryList;
