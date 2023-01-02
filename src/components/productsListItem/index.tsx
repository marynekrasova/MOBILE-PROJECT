import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useMemo } from "react";
import Icon from "react-native-remix-icon";
import styles from "./styles";
import { useAppSelector } from "../../app/hooks";
import Timer from "../timer";
import color from "../../constants/colorStyle";

export interface ProductsListItemProps {
  product: {
    currency: string;
    author: {
      id: number;
    };
    images: [{ img: string }];
    title: string;
    country: string;
    createAt: string;
    price: string;
    quantity: string;
    expireAdvert: string;
    location: string;
    userBets: [
      {
        user_id: number;
        betValue: string;
      }
    ];
    unit: string;
    id: number;
  };
  navigation: any;
  categoryName: string;
}

function ProductsListItem({
  product,
  navigation,
  categoryName,
}: ProductsListItemProps) {
  const token = useAppSelector((state) => state.app.token);
  const userInfo = useAppSelector((state) => state.app.loginData.user);
  const userId = useAppSelector((state) => state.app.loginData?.user?.id);
  const valueUnit = useMemo(() => {
    switch (product.unit) {
      case "kg":
        return 1;
      case "ton":
        return 1000;
      default:
        return 1;
    }
  }, [product.unit]);
  const valueBetCoatPer: string =
    product.userBets[0] &&
    (+(product.userBets[0].betValue / (product.quantity * valueUnit)).toFixed(
      2
    ) < 0.01
      ? "0.01"
      : (product.userBets[0].betValue / (product.quantity * valueUnit)).toFixed(
          2
        ));
  const valuePriceCoatPer: string =
    +(product.price / (product.quantity * valueUnit)).toFixed(2) < 0.01
      ? "0.01"
      : (product.price / (product.quantity * valueUnit)).toFixed(2);
  const findStyle = () => {
    if (token) {
      if (product?.userBets[0]?.user_id === userId) {
        return styles.myBet;
      }
      if (product.userBets[0]) {
        return styles.anotherBet;
      }
      return styles.noBets;
    }
    if (product.userBets[0]) {
      return styles.bet;
    }
    return styles.noBets;
  };
  const valueCurrency = useMemo(() => {
    switch (product.currency) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      default:
        return `UZS`;
    }
  }, [product.currency]);
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => {
        {
          token
            ? navigation.navigate("InfoAboutProductScreen", {
                id: product.id,
                categoryName: categoryName,
              })
            : navigation.navigate("GoAuthScreen");
        }
      }}
    >
      <Image style={styles.image} source={{ uri: product.images[0]?.img }} />
      <View style={styles.informationContainer}>
        <View style={styles.informationTitleWrap}>
          <Text style={styles.informationTitle}>{product.title}</Text>
          {product.author.id === userId && (
            <Icon name="ri-star-fill" size={15} color={color.colorTabButton} />
          )}
        </View>
        <View style={styles.dataCreateWrap}>
          <Timer dataTime={product.expireAdvert} />
          <Text style={styles.id}>ID-{product.id}</Text>
        </View>
        <View style={styles.informationPriceAndBatContainer}>
          <View style={styles.betContainer}>
            <Text style={[styles.bet, findStyle()]}>
              {product.userBets[0]
                ? `${valueCurrency}${product.userBets[0].betValue}`
                : `No bets`}
            </Text>
            <Text style={styles.bet}>
              {product && valueCurrency}
              {product && product.price}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <View style={styles.cont}>
              <View style={styles.secCont}>
                <Text style={styles.informationLocation}>
                  {product.userBets[0] &&
                    `${valueCurrency}${valueBetCoatPer}/kg`}
                </Text>
              </View>
              <View style={styles.secCont}>
                <Text style={styles.informationLocation}>
                  {valueCurrency}
                  {valuePriceCoatPer}/kg
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ProductsListItem;
