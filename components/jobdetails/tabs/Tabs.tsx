import React, { Dispatch, SetStateAction } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Touchable,
} from "react-native";

import getStyles from "./tabs.style";
import { SIZES } from "../../../constants";

interface TabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const TabButton = ({ name, activeTab, onHandleSearchType }) => {
  const styles = getStyles({ name, activeTab });

  return (
    <TouchableOpacity style={styles.btn} onPress={onHandleSearchType}>
      <Text style={styles.btnText}> {name} </Text>
    </TouchableOpacity>
  );
};

const Tabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
  const styles = getStyles({ activeTab });

  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
