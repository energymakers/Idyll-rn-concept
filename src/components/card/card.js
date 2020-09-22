import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import common from '../../styles/common.style';
import {Card} from 'native-base';
import Power from '../svgComponents/powerbolt';
import {
  colors,
  typeSize,
  typeface,
  wPercent,
  hPercent,
  dimensions,
} from '../../styles/theme.style';

const CardComp = (props) => {
  const landscapeImage = () => {
    return (
      <View
        style={{
          backgroundColor: colors.LIGHT_GREY,
          width: props.height - 10,
          height: props.height - 10,
          margin: 5,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 2,
        }}>
        <Power />
      </View>
    );
  };

  const portrait = () => {
    return (
      <View
        style={{
          backgroundColor: colors.LIGHT_GREY,
          width: props.width - 10,
          margin: 5,
          // padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
        }}>
        <Power />
      </View>
    );
  };

  const direction = props.orientation === 'landscape' ? 'row' : 'column';

  return (
    <TouchableOpacity
      onPress={() => {
        props.onCardPressed();
      }}>
      <Card
        noShadow={true}
        style={{
          maxWidth: props.width,
          height: props.height,
          borderRadius: 8,
          alignItems: 'center',
          // justifyContent: 'center',
          // backgroundColor: colors.BLUE,
          flexDirection: direction,
          width: dimensions.MAX_WIDTH,
        }}>
        {props.orientation === 'landscape' ? landscapeImage() : portrait()}
        <View style={{padding: 5, flexShrink: 1, flex: 1}}>
          <Text
            numberOfLines={2}
            style={{
              fontSize: typeSize.SECONDARYBODY_TEXT,
              fontFamily: typeface.BALLPILL_M,
              color: colors.EMA_VIOLET,
            }}>
            {props.title}
          </Text>
          <Text
            numberOfLines={4}
            style={{...common.bodyText, color: colors.EMA_DARK_VIOLET}}>
            {props.excerpt}
          </Text>
          {props.orientation === 'portrait' ? (
            <Text
              style={{
                margin: hPercent(1.2),
                fontSize: wPercent(3.3),
                textAlign: 'right',
                color: '#bcbec0',
                fontFamily: typeface.GELLIX_R,
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}>
              Length 10 min
            </Text>
          ) : null}
        </View>
      </Card>
    </TouchableOpacity>
  );
};

CardComp.defaultProps = {
  width: 300,
  height: 150,
  title: 'Title',
  excerpt: 'Description',
  orientation: 'landscape',
  image: '',
};

export default CardComp;
