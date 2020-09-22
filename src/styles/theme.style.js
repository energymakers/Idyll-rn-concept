import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const typeSize = {
  HEADER_TEXT: wp(6),
  TITLE_TEXT: wp(7),
  HEADLINE_TEXT: wp(8),
  LARGEBODY_TEXT: wp(5),
  SECONDARYBODY_TEXT: wp(4),
  BODY_TEXT: wp(4),
};

export const colors = {
  WHITE: '#fffff',
  BLACK: '#000000',
  PURPLE: '#5d4dc4',
  GREEN: '#379c56',
  BLUE: '#19ACFE',
  GREY: '#8e8e8e',
  LIGHT_GREY: '#F5F5F5',
  EMA_DARK_VIOLET: '#463C73',
  EMA_VIOLET: '#5D4DC4',
  LAVENDER: '#CED5CE',
};

export const typeface = {
  BALLPILL_R: 'BallPill-regular',
  BALLPILL_L: 'BallPill-light',
  BALLPILL_T: 'BallPill-thin',
  BALLPILL_M: 'BallPill-medium',
  BALLPILL_B: 'BallPill-bold',
  GELLIX_R: 'Gellix-Regular',
};

export const dimensions = {
  MAX_WIDTH: wp('95%'),
};

export const wPercent = (value) => wp(value);
export const hPercent = (value) => hp(value);
