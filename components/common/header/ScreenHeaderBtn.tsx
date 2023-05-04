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
  handlePress?: () => void;
}

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  handlePress,
}: ScreenHeaderBtnProps) => {
  return (
    <TouchableOpacity
      style={styles({ dimension }).btnContainer}
      onPress={handlePress}
    >
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles({ dimension }).btnImg}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
