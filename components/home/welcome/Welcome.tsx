import React, { Dispatch, SetStateAction, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from "expo-router";
import { SIZES } from "../../../constants";
import icons from "../../../constants/icons";
import getStyles from "./welcome.style";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

interface WelcomeProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  handleClick: () => void;
}

const Welcome = ({ searchTerm, setSearchTerm, handleClick }: WelcomeProps) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState<string>("Full-time");

  const styles = getStyles({ activeJobType });

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}> Hello Sandon! </Text>
        <Text style={styles.welcomeMessage}> Start browsing Jobs! </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.nativeEvent.text)}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={getStyles({ activeJobType, item }).tab}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={getStyles({ activeJobType, item }).tabText}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
