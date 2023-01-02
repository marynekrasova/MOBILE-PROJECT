import { ScrollView, Text, View, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-remix-icon";
import { WebView } from "react-native-webview";
import styles from "./styles";
import PreviewForm from "../../components/previewForm";
import PrimaryButton from "../../components/primaryButton";
import SecondaryButton from "../../components/secondaryButton";
import ModalForm from "../../components/modal";
import BetForm from "../../components/betForm";
import { useAppSelector } from "../../app/hooks";
import HeaderLeft from "../../components/headerLeft";
import arrayValueLocation from "../../constants/location";

export interface InfoAboutProductBetProps {
  route: {
    params: {
      id: string;
    };
  };
  navigation: any;
}

function InfoAboutProductBetScreen({
  navigation,
  route,
}: InfoAboutProductBetProps) {
  const productId = route.params.id;
  const [showModal, setShowModal] = useState(false);
  const user = useAppSelector((state) => state.app.loginData?.user);
  const infoProductBet = useAppSelector((state) => {
    const { auctionList } = state.categories;
    const product = auctionList.find((item) => item.id === productId);
    return {
      ...product,
      user_id: product?.lastBetInfo && product?.lastBetInfo?.user_id,
      amount: product?.unit,
      imgUri: product?.img,
      weight: product?.quantity,
      bet: product?.lastBetInfo && product?.lastBetInfo?.betValue,
    };
  });
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderLeft
          title={infoProductBet.title}
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
  }, []);
  const token = useAppSelector((state) => state.app.token);
  const getLocation = (location) => {
    const item = arrayValueLocation.find((item) => item?.label === location);
    return item;
  };
  return (
    <ScrollView>
      <PreviewForm params={infoProductBet} />
      {+infoProductBet.bet === +infoProductBet.price - 1 && (
        <Text style={styles.textMaxBet}>
          The maximum bet for this product has already been made.
        </Text>
      )}
      {Platform.OS === "ios" ? (
        <View>
          <View style={styles.locationContainer}>
            <Icon
              style={styles.iconLocation}
              name="ri-map-pin-line"
              color="#798787"
              size={20}
            />
            <Text style={styles.locationText}>
              {infoProductBet?.country}, {infoProductBet?.location}
            </Text>
          </View>
          <View style={{ width: "100%", height: 220 }}>
            <WebView
              originWhitelist={["*"]}
              source={{
                html: getLocation(infoProductBet?.location)?.link,
              }}
            />
          </View>
        </View>
      ) : null}
      <View style={styles.buttonContainer}>
        {+infoProductBet.bet !== +infoProductBet.price &&
          +infoProductBet.bet !== +infoProductBet.price - 1 && (
            <View style={styles.button}>
              <SecondaryButton
                title="Place a bet"
                icon="ri-auction-line"
                styleIcon={styles.iconBet}
                onPress={() => setShowModal(true)}
              />
            </View>
          )}
        <View style={styles.button}>
          <PrimaryButton
            title="Buy now"
            icon="ri-shopping-cart-line"
            onPress={() => {
              navigation.navigate("BuyConfirmScreen", {
                slug: infoProductBet.slug,
                productId: productId,
                titleProduct: infoProductBet.title,
                userName: user.name,
                userUUID: user.uuid,
                seller: infoProductBet.author.name,
                sellerUUID: infoProductBet.author.uuid,
                location: infoProductBet.location,
                quantity: infoProductBet.quantity,
                unit: infoProductBet.unit,
                price: infoProductBet.price,
                currency: infoProductBet.currency,
                nameScreen: "AuctionScreen",
                categoryName: infoProductBet.category,
              });
            }}
          />
        </View>
      </View>
      {showModal && (
        <ModalForm setShowModal={setShowModal}>
          <BetForm
            slug={infoProductBet.slug}
            bet={infoProductBet.bet}
            price={infoProductBet.price}
            currency={infoProductBet.currency}
            quantity={infoProductBet.quantity}
            unit={infoProductBet.unit}
            categoryName={infoProductBet.category}
            navigation={navigation}
            setShowModal={setShowModal}
          />
        </ModalForm>
      )}
    </ScrollView>
  );
}

export default InfoAboutProductBetScreen;
