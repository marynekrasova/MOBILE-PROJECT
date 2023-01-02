import { ScrollView, Text, View, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { WebView } from "react-native-webview";
import Icon from "react-native-remix-icon";
import styles from "./styles";
import PreviewForm from "../../components/previewForm";
import PrimaryButton from "../../components/primaryButton";
import SecondaryButton from "../../components/secondaryButton";
import ModalForm from "../../components/modal";
import BetForm from "../../components/betForm";
import { useAppSelector } from "../../app/hooks";
import HeaderLeft from "../../components/headerLeft";
import arrayValueLocation from "../../constants/location";

export interface InfoAboutProductProps {
  route: {
    params: {
      id: string;
      categoryName: string;
    };
  };
  navigation: any;
}

function InfoAboutProductScreen({ navigation, route }: InfoAboutProductProps) {
  const { categoryName } = route.params;
  const productId = route.params.id;
  const [showModal, setShowModal] = useState(false);
  const userId = useAppSelector((state) => state.app.loginData?.user?.id);
  const user = useAppSelector(
    (state) => state.app.loginData?.user
  );
  const infoProduct = useAppSelector((state) => {
    const { productList } = state.categories;
    const product = productList.find((item) => item.id === productId);
    return {
      ...product,
      user_id: product?.userBets[0] && product?.userBets[0]?.user_id,
      amount: product?.unit,
      imgUri: product?.img,
      weight: product?.quantity,
      bet: product?.userBets[0] && product?.userBets[0]?.betValue,
    };
  });
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderLeft
          title={infoProduct.title}
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
      <PreviewForm params={infoProduct} />
      {+infoProduct.bet === +infoProduct.price - 1 && (
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
              {infoProduct.country}, {infoProduct.location}
            </Text>
          </View>
          <View style={{ width: "100%", height: 220 }}>
            <WebView
              originWhitelist={["*"]}
              source={{
                html: getLocation(infoProduct.location)?.link,
              }}
            />
          </View>
        </View>
      ) : null}
      {infoProduct.author?.id !== userId && (
        <View style={styles.buttonContainer}>
          {+infoProduct.bet !== +infoProduct.price &&
            +infoProduct.bet !== +infoProduct.price - 1 && (
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
                  slug: infoProduct.slug,
                  productId: productId,
                  titleProduct: infoProduct.title,
                  userName: user.name,
                  userUUID: user.uuid,
                  seller: infoProduct.author.name,
                  sellerUUID: infoProduct.author.uuid,
                  location: infoProduct.location,
                  quantity: infoProduct.quantity,
                  unit: infoProduct.unit,
                  price: infoProduct.price,
                  currency: infoProduct.currency,
                  nameScreen: "CategoriesScreen",
                  categoryName: categoryName,
                });
              }}
            />
          </View>
        </View>
      )}
      {showModal && (
        <ModalForm setShowModal={setShowModal}>
          <BetForm
            slug={infoProduct.slug}
            bet={infoProduct.bet}
            price={infoProduct.price}
            currency={infoProduct.currency}
            quantity={infoProduct.quantity}
            unit={infoProduct.unit}
            categoryName={categoryName}
            navigation={navigation}
            setShowModal={setShowModal}
          />
        </ModalForm>
      )}
    </ScrollView>
  );
}

export default InfoAboutProductScreen;
