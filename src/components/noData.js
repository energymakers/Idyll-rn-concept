import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {colors, typeSize, typeface} from '../styles/theme.style';
import common from '../styles/common.style';
const NoData = ({message}) => {
  return (
    <View
      style={{
        height: 150,
        width: 314,
        backgroundColor: colors.LIGHT_GREY,
        display: 'flex',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 14,
      }}>
      <Text
        style={{
          color: colors.GREY,
          fontFamily: typeface.BALLPILL_M,
          textTransform: 'capitalize',
          fontSize: typeSize.BODY_TEXT,
        }}>
        {message}
      </Text>
    </View>
  );
};
export default NoData;
