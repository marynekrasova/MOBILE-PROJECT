import { SafeAreaView } from "react-native";
import React from "react";
import styles from "./styles";
import PreviewForm from "../../components/previewForm";

export interface PreviewAdProps {
  props?: Object;
}

function PreviewAdScreen(props: PreviewAdProps) {
  return <PreviewForm params={props.route.params} />;
}

export default PreviewAdScreen;
