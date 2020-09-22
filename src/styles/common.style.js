import {StyleSheet} from 'react-native';
import {typeSize, typeface, colors} from './theme.style';

const common = StyleSheet.create({
  cardProperties: {
    elevation: 2,
    shadowColor: colors.BLACK,
    borderRadius: 14,
  },
  titleText: {
    fontFamily: typeface.BALLPILL_R,
    fontSize: typeSize.TITLE_TEXT,
  },
  headerText: {
    fontFamily: typeface.BALLPILL_R,
    fontSize: typeSize.HEADER_TEXT,
  },
  bodyText: {
    fontFamily: typeface.GELLIX_R,
    fontSize: typeSize.BODY_TEXT,
  },
  secondaryBodyText: {
    fontFamily: typeface.GELLIX_R,
    fontSize: typeSize.SECONDARYBODY_TEXT,
  },
});

export default common;
