import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import PrimaryButton from "../../components/primaryButton";
import styles from "./styles";
import SecondaryButton from "../../components/secondaryButton";
import {
  buyNow,
  getAuctionList,
  getProductList,
  getUsersOrders,
} from "../../app/slices/CategoriesSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export interface BuyConfirmProps {
  route: {
    params: {
      slug: string;
      productId: string;
      titleProduct: string;
      userName: string;
      userUUID: string;
      seller: string;
      sellerUUID: string;
      nameScreen: string;
      location: string;
      quantity: string;
      unit: string;
      price: string;
      currency: string;
      categoryName: string;
    };
  };
  navigation: any;
}
function BuyConfirmScreen({ navigation, route }: BuyConfirmProps) {
  const token = useAppSelector((state) => state.app.token);
  const dispatch = useAppDispatch();
  function buyNowHandler() {
    const { slug } = route.params;
    const { categoryName } = route.params;
    const page = 0;
    dispatch(buyNow({ token, slug })).then(() => {
      dispatch(getAuctionList(token));
      dispatch(getProductList({ page, categoryName }));
      dispatch(getUsersOrders(token));
    });
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{route.params.userName},</Text>
        <Text style={styles.textCode}>
          Your unique code: {route.params.userUUID}
        </Text>
        <Text style={styles.textLot}>
          You are buying lot №{route.params.productId}
        </Text>
        <View style={styles.containerInfo}>
          <Text style={styles.textName}>Title: </Text>
          <Text style={styles.textContent}>{route.params.titleProduct}</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.textName}>Seller: </Text>
          <Text style={styles.textContent}>{route.params.seller} </Text>
          <Text style={styles.textName}>({route.params.sellerUUID})</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.textName}>Location: </Text>
          <Text style={styles.textContent}>{route.params.location}</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.textName}>Quantity: </Text>
          <Text style={styles.textContent}>
            {route.params.quantity} {route.params.unit}
          </Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.textName}>Total price: </Text>
          <Text style={styles.textContent}>
            {route.params.price} {route.params.currency}
          </Text>
        </View>
        <Text style={styles.textConfirm}>Please confirm your decision.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <SecondaryButton
            title="Not now"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.button}>
          <PrimaryButton
            title="Buy"
            onPress={() => {
              buyNowHandler();
              navigation.navigate("SuccessScreen", {
                text: `You bought LOT-${route.params.productId} "${route.params.titleProduct}" at original price.`,
                nameScreen: route.params.nameScreen,
              });
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default BuyConfirmScreen;
