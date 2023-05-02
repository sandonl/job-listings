import { ImageStyle, StyleSheet, ViewStyle } from "react-native";

import { COLORS, SIZES } from "../../../constants";

interface StylesProps {
  dimension: string;
}

interface StyleSheetType {
  btnContainer: ViewStyle;
  btnImg: ImageStyle;
}

type StylesFunctionProps = (props: StylesProps) => StyleSheetType;

const styles: StylesFunctionProps = ({ dimension }) =>
  StyleSheet.create<StyleSheetType>({
    btnContainer: {
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      borderRadius: SIZES.small / 1.25,
      justifyContent: "center",
      alignItems: "center",
    },
    btnImg: {
      width: dimension,
      height: dimension,
      borderRadius: SIZES.small / 1.25,
    },
  });

export default styles;
