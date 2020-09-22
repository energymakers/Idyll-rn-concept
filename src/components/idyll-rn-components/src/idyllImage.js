import React, {useState} from 'react';
import {Image, View} from 'react-native';

const IdyllImage = ({src}) => {
  const [width, setWidth] = useState(0);
  const onLayout = (obj) => setWidth(obj.nativeEvent.layout.width);
  const aspectRatio = 4 / 3;

  return (
    <View style={{flex: 1}} onLayout={onLayout}>
      <Image
        style={{height: width / aspectRatio, width: width}}
        source={{uri: src}}
        resizeMode="contain"
      />
    </View>
  );
};

export default IdyllImage;
