import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

interface StyleSheetType {
  container: ViewStyle;
  header: ViewStyle;
  headerTitle: TextStyle;
  headerBtn: ViewStyle;
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
    marginTop: SIZES.small,
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
    gap: SIZES.small,
  },
});

export default styles;
