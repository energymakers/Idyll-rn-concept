import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LI = ({children, position}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text>{position ? position : '\u2022'}</Text>
      <Text style={{flex: 1, paddingLeft: 5}}>{children}</Text>
    </View>
  );
};

export default LI;

const styles = StyleSheet.create({});
