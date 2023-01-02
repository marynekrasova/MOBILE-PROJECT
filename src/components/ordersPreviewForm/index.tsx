import React, { useMemo } from "react";
import { View, Text, ScrollView, Image, Platform } from "react-native";
import Icon from "react-native-remix-icon";
import { WebView } from "react-native-webview";
import styles from "./styles";
import InfoLine from "../infoLine";
import Timer from "../timer";
import DataCreate from "../dataCreate";
import arrayValueLocation from "../../constants/location";
import { useAppSelector } from "../../app/hooks";
import color from "../../constants/colorStyle";
import Slider from "../slider";

export interface ordersPreviewFormProps {
  params: {
    currency: string;
    images: Array<object>;
    title: string;
    location: string;
    country: string;
    createAt: string;
    price: string;
    expireAdvert: string;
    weight: string;
    bet: string;
    amount: string;
    user_id: number;
    author: {
      id: number;
    };
    orderInfo: {
      bet_id: number;
      totalPrice: string;
    };
  };
}

export default function ordersPreviewForm(props: ordersPreviewFormProps) {
  const userId = useAppSelector((state) => state.app.loginData.user.id);
  let valueCurrency = "";

  useMemo(() => {
    switch (props.params.currency) {
      case "USD":
        valueCurrency = "$";
        break;
      case "EUR":
        valueCurrency = "€";
        break;
      default:
        valueCurrency = `UZS`;
    }
  }, [props.params.currency]);

  return (
    <ScrollView style={styles.formContainer}>
      <View style={styles.imgContainer}>
        {props.params.images[0] ? (
          <Slider images={props.params.images} />
        ) : (
          <Icon
            style={styles.icon}
            name="ri-image-line"
            color={styles.icon.color}
            size={30}
          />
        )}
      </View>
      <View style={styles.marginContainer}>
        <View style={styles.textTitleWrap}>
          <Text style={styles.textTitle}>{props.params.title}</Text>
          {props.params.author?.id === userId && (
            <Icon name="ri-star-fill" size={20} color={color.colorTabButton} />
          )}
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>In Transit</Text>
        </View>
        <InfoLine
          styleInfo={styles.text}
          value={`${valueCurrency}${props.params.orderInfo.totalPrice}`}
          title="Price"
        />
        <InfoLine
          styleInfo={styles.text}
          value="VISA · 3259   12/25"
          title="Payment method"
        />
        <InfoLine styleInfo={styles.text} value="idared" title="Variety" />
        <InfoLine
          styleInfo={styles.text}
          value={props.params.weight}
          unit={props.params.amount}
          title="Quantity"
        />
        <InfoLine styleInfo={styles.text} value="70+" title="Size" />
        <InfoLine styleInfo={styles.text} value="bins" title="Packaging" />
        <InfoLine
          styleInfo={styles.text}
          value={`${props.params.country}, ${props.params.location}`}
          title="Location"
        />
        <InfoLine
          styleInfo={styles.text}
          value={`${props.params.country}, ${props.params.location}`}
          title="Destination"
        />
      </View>
    </ScrollView>
  );
}
