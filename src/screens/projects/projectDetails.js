import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import NoData from '../../components/noData';
import Carousel from '../../components/carousel/carousel';
import Article from '../learning/article';

const ProjectDetails = () => {
  const noData = <NoData message={'no data'} />;
  return (
    <View>
      <Carousel
        itemsPerInterval={1}
        items={[
          {component: noData},
          {component: noData},
          {component: noData},
          {component: noData},
          {component: noData},
          {component: noData},
          {component: noData},
        ]}
      />
    </View>
  );
};

export default ProjectDetails;
