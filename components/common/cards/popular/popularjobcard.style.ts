import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

interface Item {
  job_id: number;
}

interface StylesProps {
  selectedJob: number;
  item: Item;
}

interface StyleSheetType {
  container: ViewStyle;
  logoContainer: ViewStyle;
  logoImage: ImageStyle;
  companyName: TextStyle;
  infoContainer: ViewStyle;
  jobName: TextStyle;
  infoWrapper: ViewStyle;
  publisher: TextStyle;
  location: TextStyle;
}

type StylesFunctionProps = (props: StylesProps) => StyleSheetType;

const styles: StylesFunctionProps = ({ selectedJob, item }) =>
  StyleSheet.create<StyleSheetType>({
    container: {
      width: 250,
      padding: SIZES.xLarge,
      backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
      borderRadius: SIZES.medium,
      justifyContent: "space-between",
      ...SHADOWS.medium,
      shadowColor: COLORS.white,
    },
    logoContainer: {
      width: 50,
      height: 50,
      backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
      borderRadius: SIZES.medium,
      justifyContent: "center",
      alignItems: "center",
    },
    logoImage: {
      width: "70%",
      height: "70%",
    },
    companyName: {
      fontSize: SIZES.medium,
      fontFamily: FONT.regular,
      color: "#B3AEC6",
      marginTop: SIZES.small / 1.5,
    },
    infoContainer: {
      marginTop: SIZES.large,
    },
    jobName: {
      fontSize: SIZES.large,
      fontFamily: FONT.medium,
      color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
    },
    infoWrapper: {
      flexDirection: "row",
      marginTop: 5,
      justifyContent: "flex-start",
      alignItems: "center",
    },
    publisher: {
      fontSize: SIZES.medium - 2,
      fontFamily: FONT.bold,
      color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
    },
    location: {
      fontSize: SIZES.medium - 2,
      fontFamily: FONT.regular,
      color: "#B3AEC6",
    },
  });

export default styles;
