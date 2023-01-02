import { Text, Image, ScrollView, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

export interface SliderProps {
  images: Array<object>;
}

function Slider({ images }: SliderProps) {
  const [active, setActive] = useState(0);
  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {images.map((item: object, index: number) => (
          <Image
            key={index}
            source={{ uri: item.path ? item.path : item.img }}
            style={styles.image}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((item: object, index: number) => (
          <Text
            key={index}
            style={
              index === active
                ? styles.paginationActiveText
                : styles.paginationText
            }
          >
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
}

export default Slider;
