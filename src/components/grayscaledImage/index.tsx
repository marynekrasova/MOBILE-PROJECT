import { Image } from "react-native";
import React from "react";
import { Grayscale } from "react-native-color-matrix-image-filters";
import styles from "./styles";

export interface GrayscaledImageProps {
  link: {
    uri: string;
  };
}

function GrayscaledImage({ link }: GrayscaledImageProps) {
  return (
    <Grayscale>
      <Image style={styles.image} source={link} />
    </Grayscale>
  );
}

export default GrayscaledImage;
