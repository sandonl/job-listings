import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

interface StylesProps {
  name?: string;
  activeTab: string;
}

interface StyleSheetType {
  container: ViewStyle;
  btn: ViewStyle;
  btnText: TextStyle;
}

type StylesFunctionProps = (props: StylesProps) => StyleSheetType;

const getStyles: StylesFunctionProps = ({ name, activeTab }) =>
  StyleSheet.create<StyleSheetType>({
    container: {
      marginTop: SIZES.small,
      marginBottom: SIZES.small / 2,
    },
    btn: {
      paddingVertical: SIZES.medium,
      paddingHorizontal: SIZES.xLarge,
      backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
      borderRadius: SIZES.medium,
      marginLeft: 2,
      ...SHADOWS.medium,
      shadowColor: COLORS.white,
    },
    btnText: {
      fontFamily: "DMMedium",
      fontSize: SIZES.small,
      color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
    },
  });

export default getStyles;
