import React from "react";
import { View, Text } from "react-native";

import styles from "./popularjobcard.style";

type Job = {
  job_id: number;
};

interface PopularJobCardProps {
  item: Job;
}

const PopularJobCard = ({ item }: PopularJobCardProps) => {
  return (
    <View>
      <Text>{item.job_id}</Text>
    </View>
  );
};

export default PopularJobCard;
