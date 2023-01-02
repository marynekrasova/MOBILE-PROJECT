import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import PreviewForm from "../../components/previewForm";
import PrimaryButton from "../../components/primaryButton";
import SecondaryButton from "../../components/secondaryButton";
import ModalForm from "../../components/modal";
import BetForm from "../../components/betForm";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addBet,
  buyNow,
  getAuctionList,
  getProductList,
  getUsersOrders,
} from "../../app/slices/CategoriesSlice";
import HeaderLeft from "../../components/headerLeft";
import OrdersPreviewFormProps from "../../components/ordersPreviewForm";

export interface InfoAboutOrderScreenProps {
  route: {
    params: {
      id: string;
    };
  };
  navigation: any;
}
function InfoAboutOrderScreen({
  navigation,
  route,
}: InfoAboutOrderScreenProps) {
  const productId = route.params.id;
  const infoProduct = useAppSelector((state) => {
    const { myOrders } = state.categories;
    const product = myOrders.find((item) => item.id === productId);
    return {
      ...product,
      amount: product.unit,
      imgUri: product.img,
      weight: product.quantity,
    };
  });
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderLeft
          title={infoProduct.title}
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
  }, []);
  return (
    <ScrollView>
      <OrdersPreviewFormProps params={infoProduct} />
    </ScrollView>
  );
}

export default InfoAboutOrderScreen;
