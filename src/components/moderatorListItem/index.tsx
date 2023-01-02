import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useMemo } from "react";
import Icon from "react-native-remix-icon";
import axios from "axios";
import styles from "./styles";
import HorizontalButtonsList from "../horizontalButtonsList";
import SecondaryButton from "../secondaryButton";
import PrimaryButton from "../primaryButton";
import Divider from "../myAdvertisementsListDivider";
import Input from "../input";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getModerationList,
  moderationOnApprove,
  moderationOnReject,
} from "../../app/slices/ModerationSlice";
import Slider from "../slider";

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
    uuid: string;
    banned: string;
    email: string;
    name: string;
  };
};
export interface ModeratorListItemProps {
  item: Item;
  onManage: () => void;
}

function ModeratorListItem({ item, onManage }: ModeratorListItemProps) {
  const [comment, setComment] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [showError, setShowError] = useState(false);
  let valueCurrency = "";
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

  const onApprove = () => {
    setShowError(false);
    setShowLoader(true);
    dispatch(
      moderationOnApprove({
        token: token,
        comment: comment,
        slug: item.slug,
      })
    ).then(() => {
      dispatch(getModerationList(token)).then(() => {
        setShowLoader(false);
      });
    });
  };

  const onReject = () => {
    if (comment) {
      setShowError(false);
      setShowLoader(true);
      dispatch(
        moderationOnReject({
          token: token,
          comment: comment,
          slug: item.slug,
        })
      ).then(() => {
        dispatch(getModerationList(token)).then(() => {
          setShowLoader(false);
        });
      });
    } else {
      setShowError(true);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Slider images={item.images} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitles}>
          {item.country}, {item.location}
        </Text>
        <Text style={styles.subtitles}>{item.createAt}</Text>
        <View style={styles.textContainer}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Author</Text>
            <Text style={styles.bet}>
              {item.author.name}
            </Text>
            <Text style={styles.subtitles}>Email:</Text>
            <Text style={styles.bet}>{item.author.email}</Text>
            <Text style={styles.subtitles}>Banned:</Text>
            <Text style={styles.bet}>{item.author.banned.toString()}</Text>
          </View>
          <View>
            <Text style={styles.sectionTitle}>Total price</Text>
            <Text style={styles.price}>
              {valueCurrency} {item.price}
            </Text>
            <Text style={styles.sectionWeight}>
              {item.quantity} {item.unit}
            </Text>
          </View>
        </View>
        <View style={styles.input}>
          <Input value={comment} onChangeText={setComment} />
        </View>
        {showError && (
          <View style={styles.errorContainer}>
            <Icon name="ri-alert-fill" size={20} color="red" />
            <Text style={styles.errorComment}>
              Please, leave a comment to reject
            </Text>
          </View>
        )}
        <HorizontalButtonsList>
          <PrimaryButton
            title="Approve"
            icon="ri-check-line"
            width={49}
            onPress={onApprove}
          />
          <SecondaryButton
            icon="ri-close-line"
            width={49}
            title="Reject"
            onPress={onReject}
          />
        </HorizontalButtonsList>
        {showLoader && (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#38999B" />
          </View>
        )}
      </View>
      <Divider />
    </View>
  );
}

export default ModeratorListItem;
