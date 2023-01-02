import React, { useMemo } from "react";
import { View, Text, ScrollView } from "react-native";
import Icon from "react-native-remix-icon";
import styles from "./styles";
import InfoLine from "../infoLine";
import Timer from "../timer";
import DataCreate from "../dataCreate";
import { useAppSelector } from "../../app/hooks";
import color from "../../constants/colorStyle";
import Slider from "../slider";

export interface PreviewFormProps {
  params: {
    id: string;
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
    userBets: [
      {
        user_id: number;
      }
    ];
    lastBetInfo: object;
  };
}

export default function PreviewForm({ params }: PreviewFormProps) {
  const userId = useAppSelector((state) => state.app.loginData.user?.id);
  const valueUnit = useMemo(() => {
    switch (params.amount) {
      case "kg":
        return 1;
      case "ton":
        return 1000;
      default:
        return 1;
    }
  }, [params.amount]);
  const valueBetCoatPer: string =
    params?.bet &&
    (+(params?.bet / (params.weight * valueUnit)).toFixed(2) < 0.01
      ? "0.01"
      : (params?.bet / (params.weight * valueUnit)).toFixed(2));
  const valuePriceCoatPer: string =
    +(params.price / (params.weight * valueUnit)).toFixed(2) < 0.01
      ? "0.01"
      : (params.price / (params.weight * valueUnit)).toFixed(2);
  const valueCurrency = useMemo(() => {
    switch (params.currency) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      default:
        return `UZS`;
    }
  }, [params.currency]);
  function styleBet() {
    let slyle = {};
    if (params.user_id === userId) {
      slyle = styles.myBet;
    } else {
      slyle = styles.anotherBet;
    }
    return slyle;
  }
  return (
    <ScrollView style={styles.formContainer}>
      <View
        style={
          params.images[0] ? styles.imgContainer : styles.imgContainerBackground
        }
      >
        {params.images[0] ? (
          <Slider images={params.images} />
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
          <Text style={styles.textTitle}>{params.title}</Text>
          {params.author?.id === userId && (
            <Icon name="ri-star-fill" size={20} color={color.colorTabButton} />
          )}
        </View>
        {params.expireAdvert && (
          <View style={styles.timerContainer}>
            <Timer dataTime={params.expireAdvert} />
            <Text style={styles.id}>ID-{params.id}</Text>
          </View>
        )}
        <View style={styles.mainText}>
          <InfoLine
            styleInfo={styles.textBig}
            styleBet={(params?.userBets || params?.lastBetInfo) && styleBet()}
            value={`${valueCurrency}${params.price}`}
            title={params.bet ? `${valueCurrency}${params.bet}` : "No bets"}
          />
        </View>
        <InfoLine
          styleInfo={styles.textSmallS}
          title={params?.bet && `${valueCurrency}${valueBetCoatPer}/kg`}
          value={
            params?.price &&
            params?.weight &&
            +params?.weight !== 0 &&
            `${valueCurrency} ${valuePriceCoatPer}/kg`
          }
        />
        <InfoLine styleInfo={styles.text} value="idared" title="Variety" />
        <InfoLine
          styleInfo={styles.text}
          value={params.weight}
          unit={params.amount}
          title="Quantity"
        />
        <InfoLine styleInfo={styles.text} value="70+" title="Size" />
        <InfoLine styleInfo={styles.text} value="bins" title="Packaging" />
        <InfoLine
          styleInfo={styles.text}
          value={`${params.country}, ${params.location}`}
          title="Location"
        />
        <InfoLine
          styleInfo={styles.text}
          value={
            params.createAt && (
              <DataCreate
                dataTime={params.createAt}
                style={styles.dataCreate}
              />
            )
          }
          title="Created"
        />
      </View>
    </ScrollView>
  );
}
