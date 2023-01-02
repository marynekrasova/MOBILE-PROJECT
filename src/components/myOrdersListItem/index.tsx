import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo } from "react";
import Icon from "react-native-remix-icon";
import styles from "./styles";
import color from "../../constants/colorStyle";
import { useAppSelector } from "../../app/hooks";

type Item = {
  id: number;
  title: string;
  country: string;
  location: string;
  slug: string;
  category: string;
  subCategory: string;
  isModerated: boolean;
  isActive: boolean;
  expireAdvert: string;
  moderationComment: string;
  price: string;
  currency: string;
  images: [{ img: string }];
  quantity: string;
  unit: string;
  createAt: string;
  updatedAt: string;
  moderationStatus: string;
  author: {
    id: string;
  };
  userBets: [
    {
      betValue: string;
    }
  ];
};

export interface MyOrdersListItemProps {
  navigation: any;
  item: Item;
}

function MyOrdersListItem({ item, navigation }: MyOrdersListItemProps) {
  const userId = useAppSelector((state) => state.app.loginData?.user?.id);
  const valueUnit = useMemo(() => {
    switch (item.unit) {
      case "kg":
        return 1;
      case "ton":
        return 1000;
      default:
        return 1;
    }
  }, [item.unit]);
  const valuePriceCoatPer: string =
    +(+item.price / (+item.quantity * valueUnit)).toFixed(2) < 0.01
      ? "0.01"
      : (+item.price / (+item.quantity * valueUnit)).toFixed(2);
  const valueCurrency = useMemo(() => {
    switch (item.currency) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      default:
        return `USZ`;
    }
  }, [item.currency]);
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => {
        navigation.navigate("InfoAboutOrderScreen", {
          id: item.id,
        });
      }}
    >
      <Image style={styles.image} source={{ uri: item.images[0].img }} />
      <View style={styles.informationContainer}>
        <View>
          <View style={styles.informationTitleWrap}>
            <Text style={styles.title}>{item.title}</Text>
            {item.author.id === userId && (
              <Icon
                name="ri-star-fill"
                size={15}
                color={color.colorTabButton}
              />
            )}
          </View>
          <View style={[styles.icon, styles.colorIcon]}>
            <Text style={[styles.iconText, styles.colorIconText]}>
              In Transit
            </Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.price}>
            {valueCurrency} {item.price}
          </Text>
          <View style={styles.cont}>
            <Text style={styles.sectionWeight}>
              {valueCurrency} {valuePriceCoatPer}/kg
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default MyOrdersListItem;
