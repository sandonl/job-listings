import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../../utils/checkImage";
import getStyles from "./popularjobcard.style";

type Job = {
  job_id: number;
  job_title: string;
  job_country: string;
  employer_logo: string;
  employer_name: string;
};

interface PopularJobCardProps {
  item: Job;
  selectedJob: number;
  handleCardPress: (item: Job) => void;
}

const PopularJobCard = ({
  item,
  selectedJob,
  handleCardPress,
}: PopularJobCardProps) => {
  const styles = getStyles({ item, selectedJob });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
