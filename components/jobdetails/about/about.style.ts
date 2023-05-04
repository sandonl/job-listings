import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

interface StyleSheetType {
  container: ViewStyle;
  headText: TextStyle;
  contentBox: ViewStyle;
  contentText: TextStyle;
}

const styles = StyleSheet.create<StyleSheetType>({
  container: {
    marginTop: SIZES.large,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
  headText: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  contentBox: {
    marginVertical: SIZES.small,
  },
  contentText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small / 1.25,
  },
});

export default styles;
