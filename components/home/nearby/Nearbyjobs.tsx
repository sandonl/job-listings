import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

import { useRouter } from "expo-router";
import { COLORS } from "../../../constants";
import useFetch from "../../../hooks/useFetch";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import styles from "./nearbyjobs.style";

const Nearbyjobs = () => {
  const nearbyJobSearch = "React Developer";

  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: nearbyJobSearch,
    num_pages: 1,
    radius: "2",
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Nearby Jobs </Text>
        <TouchableOpacity>
          <Text
            style={styles.headerBtn}
            onPress={() => {
              router.push(`/search/${nearbyJobSearch}`);
            }}
          >
            Show All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text> Something went wrong </Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
