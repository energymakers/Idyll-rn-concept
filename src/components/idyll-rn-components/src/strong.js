import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Strong = ({children}) => {
  return <Text style={styles.strong}>{children}</Text>;
};

export default Strong;

const styles = StyleSheet.create({
  strong: {
    fontWeight: 'bold',
  },
});
