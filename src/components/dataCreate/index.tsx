import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export interface DataCreateProps {
  dataTime: string;
  style: object;
}
export default function DataCreate({ dataTime, style }: DataCreateProps) {
  const [dataCreate, setDateCreate] = useState(null);

  useEffect(() => {
    const data = new Date(dataTime);
    let day = data.getDate();
    if (day < 10) day = `0${day}`;
    let month = data.getMonth() + 1;
    if (month < 10) month = `0${month}`;
    let year = data.getFullYear();
    if (year < 10) year = `0${year}`;
    let hour = data.getHours();
    if (hour < 0) hour = 24 + hour;
    if (hour < 10) hour = `0${hour}`;
    let minutes = data.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;
    const dataFull =
      `${day}.` + `${month}.` + `${year}  ` + ` ${hour}:` + `${minutes}.`;
    setDateCreate(dataFull);
  }, []);
  return <Text style={style}>{dataCreate}</Text>;
}
