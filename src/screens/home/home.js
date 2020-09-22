import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import NoData from '../../components/noData';

import Power from '../../components/svgComponents/powerbolt';
import CardComp from '../../components/card/card';
import IdyllRenderer from '../../components/idyllRenderer/idyllRenderer';
import common from '../../styles/common.style';
import {colors} from '../../styles/theme.style';
import Query from '../../utils/query';

import LearningModule from './learningModule';
import ARTICLE_QUERY from '../../queries/article';
import MODULES_QUERY from '../../queries/modules';

// import Card from '../../components/card/card';
const Home = ({componentId}) => {
  return (
    <ScrollView style={{backgroundColor: colors.LAVENDER}}>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            ...common.headerText,
            alignSelf: 'flex-start',
            margin: 15,
            color: colors.EMA_DARK_VIOLET,
          }}>
          Ongoing
        </Text>
        {/* <CardComp /> */}
        <NoData message="coming soon" />
      </View>
      {/* TODO : handle network errors */}

      <Query query={MODULES_QUERY}>
        {({data: {modules}}) => {
          return modules.map((module) => {
            return (
              <LearningModule
                key={module.id}
                moduleName={module.name}
                lessons={module.lessons}
                componentId={componentId}
                moduleId={module.id}
              />
            );
          });
        }}
      </Query>

      {/* {renderModule()} */}
    </ScrollView>
  );
};

export default Home;
