import React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleProp,
} from "react-native";

import styles from "./screenheader.style";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType;
  dimension: string;
}

const ScreenHeaderBtn = ({ iconUrl, dimension }: ScreenHeaderBtnProps) => {
  return (
    <TouchableOpacity style={styles({ dimension }).btnContainer}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles({ dimension }).btnImg}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
