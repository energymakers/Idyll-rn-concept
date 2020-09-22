import React from 'react';
import {View, Text} from 'react-native';

import CardComp from '../../components/card/card';
import common from '../../styles/common.style';
import {colors, wPercent, hPercent} from '../../styles/theme.style';
import {Navigation} from 'react-native-navigation';

const LearningModule = ({
  moduleName,
  lessons,
  componentId,
  moduleId,
  moduleDescription,
}) => {
  const handleSeeAllPress = () => {
    Navigation.push(componentId, {
      component: {
        name: 'lessonList',
        passProps: {
          moduleId: moduleId,
          moduleName: moduleName,
          moduleDescription: moduleDescription,
        },
      },
    });
  };
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          margin: 15,
          // backgroundColor: colors.BLUE,
        }}>
        <Text style={{...common.headerText, color: colors.EMA_DARK_VIOLET}}>
          {moduleName}
        </Text>
        {/* <Text
          onPress={handleSeeAllPress}
          style={{
            ...common.secondaryBodyText,
            color: colors.PURPLE,
            flex: 1,
            textAlign: 'right',
            fontWeight: '700',
          }}>
          See all
        </Text> */}
      </View>
      {/* TODO: LIMIT NUMBER OF CARDS */}
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
        {lessons.map((lesson) => {
          return (
            <CardComp
              key={lesson.id}
              width={wPercent(100)}
              height={hPercent(20)}
              orientation={'landscape'}
              title={lesson.title}
              image={lesson.image}
              excerpt={lesson.excerpt}
              // componentId={componentId}
              // lessonId={lesson.id}
              onCardPressed={() => {
                Navigation.push(componentId, {
                  component: {
                    name: 'article',
                    passProps: {
                      title: lesson.title,
                      lessonId: lesson.id,
                      moduleName: moduleName,
                    },
                  },
                });
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default LearningModule;
