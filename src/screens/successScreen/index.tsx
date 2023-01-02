import { Image, SafeAreaView, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import PrimaryButton from "../../components/primaryButton";

export interface SuccessProps {
  route: {
    params: {
      text: string;
      nameScreen: string;
    };
  };
  navigation: any;
}
function SuccessScreen({ navigation, route }: SuccessProps) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={require("../../img/pic.png")} style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Success!</Text>
        <Text style={styles.textBody}>{route.params.text}</Text>
      </View>
      <View style={styles.button}>
        <PrimaryButton
          title="Okay"
          onPress={() => {
            navigation.popToTop();
            navigation.navigate(route.params.nameScreen);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default SuccessScreen;
