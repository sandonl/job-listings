import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

interface StyleSheetType {
  container: ViewStyle;
  header: ViewStyle;
  headerTitle: TextStyle;
  headerBtn: TextStyle;
  cardsContainer: ViewStyle;
}

const styles = StyleSheet.create<StyleSheetType>({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
