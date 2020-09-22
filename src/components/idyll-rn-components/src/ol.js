import React, {useState} from 'react';
import {View, Text} from 'react-native';

const OL = ({children}) => {
  return (
    <View>
      {children.map((child, index) => {
        return React.cloneElement(child, {
          listType: 'ordered',
          position: index + 1,
        });
      })}
    </View>
  );
};

export default OL;
