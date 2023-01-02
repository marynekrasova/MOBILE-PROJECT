import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useMemo } from "react";
import Icon from "react-native-remix-icon";
import styles from "./styles";
import { useAppSelector } from "../../app/hooks";
import Timer from "../timer";
import DataCreate from "../dataCreate";
import color from "../../constants/colorStyle";
import PrimaryButton from "../primaryButton";
import SecondaryButton from "../secondaryButton";

export interface NotificationItemProps {
  item: any;
  settings: {
    type: string;
    buttons: [
      {
        type: string;
        title: string;
      }
    ];
  };
  navigation: any;
}

function NotificationItem(props: NotificationItemProps) {
  const findIcon = () => {
    switch (props.item.data.type) {
      case "moderationApproved":
        return (
          <Icon name="ri-customer-service-line" size={20} color={"#368ACE"} />
        );
        break;
      case "moderationRejected":
        return (
          <Icon name="ri-customer-service-line" size={20} color={"#368ACE"} />
        );
        break;
      case "outbidding":
        return <Icon name="ri-alert-line" size={20} color={"#F87E25"} />;
        break;
      case "purchase":
        return <Icon name="ri-currency-line" size={20} color={"#368ACE"} />;
        break;
      case "confirmation":
        return <Icon name="ri-currency-line" size={20} color={"#368ACE"} />;
        break;
      case "newBet":
        return <Icon name="ri-auction-line" size={20} color={"#368ACE"} />;
        break;
      default:
        return <Icon name="ri-mail-line" size={20} color={"#F87E25"} />;
    }
  };

  const processLinkTo = () => {
    switch (props.item.data.linkTo) {
      case "myAdvertisements":
        return "MyAdvertisementsScreen";
        break;
      case "betting":
        return "AuctionScreen";
        break;
      case "myOrders":
        return "MyOrdersScreen";
        break;
      case "myAccount":
        return "ProfileScreen";
        break;
      default:
        return "ProfileScreen";
    }
  };

  const renderedButtons = props.settings.buttons.map((button, index) => {
    if (props.item.data.linkTo) {
      if (button.type === "primary") {
        return (
          <PrimaryButton
            key={index}
            title={`Go to ${props.item.data.linkTo}`}
            width={Math.round(100 / props.settings.buttons.length - 1)}
            onPress={() => {
              props.navigation.navigate(processLinkTo());
            }}
          />
        );
      } else {
        return (
          <SecondaryButton
            key={index}
            title={`Go to ${props.item.data.linkTo}`}
            onPress={() => {
              props.navigation.navigate(processLinkTo());
            }}
            width={Math.round(100 / props.settings.buttons.length - 1)}
          />
        );
      }
    }
  });

  return (
    <View
      style={[
        styles.container,
        (!props.item.data.type ||
          props.item.data.type === "moderationApproved" ||
          props.item.data.type === "moderationRejected") &&
          styles.whiteBack,
      ]}
    >
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          {findIcon()}
          <Text style={styles.title}>{props.item.notification.title}</Text>
        </View>
        <Icon name="ri-more-2-line" size={20} color={"#798787"} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.item.notification.body}</Text>
      </View>
      <View style={styles.btnContainer}>{renderedButtons}</View>
    </View>
  );
}

export default NotificationItem;
