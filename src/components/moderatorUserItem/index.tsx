import { ActivityIndicator, Image, Text, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-remix-icon";
import styles from "./styles";
import HorizontalButtonsList from "../horizontalButtonsList";
import SecondaryButton from "../secondaryButton";
import PrimaryButton from "../primaryButton";
import Divider from "../myAdvertisementsListDivider";
import Input from "../input";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getModerationUserList,
  moderationUserOnApprove,
  moderationUserOnReject,
} from "../../app/slices/ModerationSlice";

type Item = {
  id: number;
  name: string;
  surname: string;
  bankAccount: string;
  certificateImage: string;
  companyName: string;
  companyTaxNumber: string;
  email: string;
  image: string;
  phone: string;
  type: string;
  uuid: string;
};
export interface ModeratorListItemProps {
  item: Item;
  onManage: () => void;
}

function ModeratorUserItem({ item, onManage }: ModeratorListItemProps) {
  const [comment, setComment] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [showError, setShowError] = useState(false);
  const token = useAppSelector((state) => state.app.token);
  const dispatch = useAppDispatch();
  const onApprove = () => {
    setShowError(false);
    setShowLoader(true);
    dispatch(
      moderationUserOnApprove({
        token: token,
        comment: comment,
        userId: item.id,
      })
    ).then(() => {
      dispatch(getModerationUserList(token)).then(() => {
        setShowLoader(false);
      });
    });
  };

  const onReject = () => {
    if (comment) {
      setShowError(false);
      setShowLoader(true);
      dispatch(
        moderationUserOnReject({
          token: token,
          comment: comment,
          userId: item.id,
        })
      ).then(() => {
        dispatch(getModerationUserList(token)).then(() => {
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
        <View
          style={
            item.certificateImage
              ? styles.imgContainer
              : styles.imgContainerBackground
          }
        >
          {item.certificateImage ? (
            <Image
              style={styles.image}
              source={{ uri: item.certificateImage }}
            />
          ) : (
            <Icon
              style={styles.icon}
              name="ri-image-line"
              color={styles.icon.color}
              size={30}
            />
          )}
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>Type:</Text>
            <Text style={styles.content}>{item.type}</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.title}>User:</Text>
            <Text style={styles.content}>{item.name}</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.title}>Surname:</Text>
            <Text style={styles.content}>{item.surname}</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.title}>Email:</Text>
            <Text style={styles.content}>{item.email}</Text>
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.title}>Phone:</Text>
            <Text style={styles.content}>{item.phone}</Text>
          </View>
          {item.type === "legalEntity" && (
            <View style={styles.textWrap}>
              <Text style={styles.title}>Company Name:</Text>
              <Text style={styles.content}>{item.companyName}</Text>
            </View>
          )}
          {item.type === "legalEntity" && (
            <View style={styles.textWrap}>
              <Text style={styles.title}>CompanyTaxNumber:</Text>
              <Text style={styles.content}>{item.companyTaxNumber}</Text>
            </View>
          )}
          {item.type === "legalEntity" && (
            <View style={styles.textWrap}>
              <Text style={styles.title}>Bank account:</Text>
              <Text style={styles.content}>{item.bankAccount}</Text>
            </View>
          )}
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

export default ModeratorUserItem;
