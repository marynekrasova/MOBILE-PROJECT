import React from "react";
import { View } from "react-native";
import styles from "./styles";
import AuctionList from "../../components/auctionList";

function AuctionScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <AuctionList navigation={navigation} />
    </View>
  );
}

export default AuctionScreen;
