import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo } from "react";
import Icon from "react-native-remix-icon";
import HorizontalButtonsList from "../horizontalButtonsList";
import SecondaryButton from "../secondaryButton";
import PrimaryButton from "../primaryButton";
import Divider from "../myAdvertisementsListDivider";
import Timer from "../timer";
import DataCreate from "../dataCreate";
import GrayscaledImage from "../grayscaledImage";
import {
  confirmDeal,
  getUsersAdvertisements,
  getUsersOrders,
} from "../../app/slices/CategoriesSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "./styles";

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
  userBets: [
    {
      betValue: string;
    }
  ];
};

export interface MyAdvertisementsListItemProps {
  faded: boolean;
  expired: boolean;
  item: Item;
  onManage: React.Dispatch<React.SetStateAction<boolean>>;
  changePress: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: any;
}

function MyAdvertisementsListItem({
  item,
  faded,
  expired,
  onManage,
  changePress,
  navigation,
}: MyAdvertisementsListItemProps) {
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
  const valueBetCoatPer: string =
    item?.userBets[0] &&
    (+(item.userBets[0].betValue / (item.quantity * valueUnit)).toFixed(2) <
    0.01
      ? "0.01"
      : (item.userBets[0].betValue / (item.quantity * valueUnit)).toFixed(2));
  let valueCurrency: string;
  switch (item.currency) {
    case "USD":
      valueCurrency = "$";
      break;
    case "EUR":
      valueCurrency = "€";
      break;
    default:
      valueCurrency = `UZS`;
  }

  const token = useAppSelector((state) => state.app.token);
  const dispatch = useAppDispatch();
  const bet = item.userBets[0]
    ? `${valueCurrency} ${item.userBets[0].betValue}`
    : "";
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: item.images[0].img }} />
          <View style={styles.wrapTimer}>
            <Text style={styles.title}>{item.title}</Text>
            {faded &&
              (item.moderationStatus === "rejected" ? (
                <View style={styles.rejected}>
                  <Text style={styles.rejectedText}>Rejected</Text>
                </View>
              ) : (
                <View style={styles.moderation}>
                  <Text style={styles.moderationText}>On moderation</Text>
                </View>
              ))}
          </View>
          <View style={styles.wrapTimer}>
            {!faded && !expired ? <Timer dataTime={item.expireAdvert} /> : null}
            <Text style={styles.id}>ID-{item.id}</Text>
          </View>
          <DataCreate dataTime={item.createAt} style={styles.dataCreate} />
          {faded && item.moderationStatus === "rejected" ? (
            <View style={styles.modComment}>
              <View style={styles.wrapComment}>
                <Icon name="ri-error-warning-line" color="#DC3737" size={20} />
                <Text style={styles.modCommentText}>
                  {item.moderationComment
                    ? item.moderationComment
                    : "No comments"}
                </Text>
              </View>
            </View>
          ) : null}
          <View style={styles.textContainer}>
            {!faded ? (
              <View style={styles.section}>
                {bet ? (
                  <>
                    <Text style={styles.bet}>{bet}</Text>
                    <Text style={styles.sectionWeight}>
                      {valueCurrency} {valueBetCoatPer}/kg
                    </Text>
                  </>
                ) : (
                  <Text style={styles.noBet}>No bets</Text>
                )}
              </View>
            ) : (
              <View style={styles.section}>
                <Text style={styles.noBet}>No bets</Text>
              </View>
            )}
            <View>
              <Text style={styles.price}>
                {valueCurrency} {item.price}
              </Text>
              <Text style={styles.sectionWeight}>
                {valueCurrency} {valuePriceCoatPer}/kg
              </Text>
            </View>
          </View>
          {!expired && (
            <HorizontalButtonsList>
              {!faded && bet ? (
                <PrimaryButton
                  title={`Confirm ${bet}`}
                  icon="ri-check-line"
                  width={49}
                  onPress={() => {
                    dispatch(
                      confirmDeal({
                        token: token,
                        slug: item.slug,
                      })
                    ).then(() => {
                      dispatch(getUsersAdvertisements(token));
                      dispatch(getUsersOrders(token));
                      navigation.navigate("SuccessScreen", {
                        text: `You confirmed the bet on the LOT-${item.id}.`,
                        nameScreen: "MyAdvertisementsScreen",
                      });
                    });
                  }}
                />
              ) : null}
              <SecondaryButton
                icon="ri-settings-3-line"
                width={faded ? 100 : 49}
                title="Manage"
                onPress={() => {
                  onManage(true);
                  changePress(item);
                }}
              />
            </HorizontalButtonsList>
          )}
        </View>
      </TouchableOpacity>
      <Divider />
    </View>
  );
}

export default MyAdvertisementsListItem;
