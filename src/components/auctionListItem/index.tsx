import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useMemo } from "react";
import styles from "./styles";
import { useAppSelector } from "../../app/hooks";
import Timer from "../timer";
import DataCreate from "../dataCreate";
import color from "../../constants/colorStyle";

export interface AuctionListItemProps {
  product: {
    currency: string;
    images: [{ img: string }];
    title: string;
    country: string;
    createAt: string;
    price: string;
    quantity: string;
    expireAdvert: string;
    location: string;
    lastBetInfo: {
      betValue: string;
      user_id: number;
    };
    unit: string;
    id: number;
  };
  navigation: any;
}

function AuctionListItem({ product, navigation }: AuctionListItemProps) {
  const userInfo = useAppSelector((state) => state.app.loginData.user);
  const token = useAppSelector((state) => state.app.token);
  const userId = useAppSelector((state) => state.app.loginData.user?.id);
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
    product.lastBetInfo &&
    (+(product.lastBetInfo.betValue / (product.quantity * valueUnit)).toFixed(
      2
    ) < 0.01
      ? "0.01"
      : (product.lastBetInfo.betValue / (product.quantity * valueUnit)).toFixed(
          2
        ));
  const valuePriceCoatPer: string =
    +(product.price / (product.quantity * valueUnit)).toFixed(2) < 0.01
      ? "0.01"
      : (product.price / (product.quantity * valueUnit)).toFixed(2);
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
          token &&
            navigation.navigate("InfoAboutProductBetScreen", {
              id: product.id,
            });
        }
      }}
    >
      <Image style={styles.image} source={{ uri: product.images[0].img }} />
      <View style={styles.informationContainer}>
        <View style={styles.informationTitleWrap}>
          <Text style={styles.informationTitle}>{product.title}</Text>
        </View>
        <View style={styles.dataCreateWrap}>
          <Timer dataTime={product.expireAdvert} />
          <Text style={styles.id}>ID-{product.id}</Text>
        </View>
        <View style={styles.informationPriceAndBatContainer}>
          <View style={styles.betContainer}>
            <Text
              style={[
                styles.bet,
                product?.lastBetInfo?.user_id === userId
                  ? styles.myBet
                  : styles.anotherBet,
              ]}
            >
              {product.lastBetInfo
                ? `${valueCurrency}${product.lastBetInfo.betValue}`
                : `No bets`}
            </Text>
            <Text style={styles.bet}>
              {valueCurrency} {product.price}
            </Text>
          </View>
          <View style={styles.priceContainer}>
            <View style={styles.cont}>
              <View style={styles.secCont}>
                <Text style={styles.informationLocation}>
                  {product.lastBetInfo &&
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

export default AuctionListItem;
