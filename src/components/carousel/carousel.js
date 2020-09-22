import React from 'react';
import {View, ScrollView, Text} from 'react-native';

export const Carousel = (props) => {
  const {items, style} = props;
  const itemsPerInterval =
    props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval;

  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const init = (width) => {
    // initialise width
    setWidth(width);
    // initialise total intervals
    const totalItems = items.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  };

  const getInterval = (offset) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset < (width / intervals) * i) {
        return i;
      }
      if (i == intervals) {
        return i;
      }
    }
  };

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          opacity: interval === i ? 0.5 : 0.1,
        }}>
        &bull;
      </Text>,
    );
  }

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#fbfbfb',
        borderColor: '#ebebeb',
        borderWidth: 1,
        borderRadius: 8,
        shadowColor: '#fcfcfc',
        shadowOpacity: 1,
        marginTop: 10,
      }}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden',
          width: `${100 * intervals}%`,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={(data) => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast">
        {items.map((item, index) => {
          return (
            <View
              style={{width: '100%', height: 500, backgroundColor: '#f23'}}
              key={index}>
              {item.component}
            </View>
          );
        })}
      </ScrollView>
      {/* <View style={styles.bullets}>{bullets}</View> */}
    </View>
  );
};

export default Carousel;
