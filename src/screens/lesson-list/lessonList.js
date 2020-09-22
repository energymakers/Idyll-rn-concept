import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import NoData from '../../components/noData';
import {
  hPercent,
  wPercent,
  typeface,
  typeSize,
  dimensions,
} from '../../styles/theme.style';
import common from '../../styles/common.style';
import CardComp from '../../components/card/card';
import Query from '../../utils/query';
import {SINGLE_MODULE_QUERY} from '../../queries/modules';
import {Navigation} from 'react-native-navigation';

const LessonList = ({moduleId, componentId, moduleName, moduleDescription}) => {
  return (
    <View>
      <Image
        style={{
          height: hPercent(30),
          width: undefined,
          backgroundColor: '#f3f',
        }}
        resizeMode={'cover'}
        source={require('../../images/Off-grid-power.jpg')}
      />
      <View
        style={{
          // zIndex: 5,
          height: 500,
          position: 'relative',
        }}>
        <ScrollView
          fadingEdgeLength={0}
          style={{marginTop: wPercent(25)}}
          contentContainerStyle={{
            backgroundColor: '#fff',
            alignItems: 'center',
          }}>
          <Query query={SINGLE_MODULE_QUERY} id={moduleId}>
            {({data: {module}}) => {
              return module.lessons.map((lesson) => {
                return (
                  <CardComp
                    key={lesson.id}
                    componentId={componentId}
                    width={dimensions.MAX_WIDTH}
                    height={hPercent(19)}
                    lessonId={lesson.id}
                    title={lesson.title}
                    excerpt={lesson.excerpt}
                    onCardPressed={() => {
                      Navigation.push(componentId, {
                        component: {
                          name: 'learning',
                          passProps: {
                            title: lesson.title,
                            lessonId: lesson.id,
                          },
                        },
                      });
                    }}
                  />
                );
              });
            }}
          </Query>
        </ScrollView>
        {/* Title overlaping other elements */}
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#fff',
            width: wPercent(100),
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            top: -15,
            padding: 10,
            height: hPercent(14),
            alignItems: 'center',
          }}>
          <Text style={{...common.titleText, textAlign: 'center'}}>
            {moduleName}
          </Text>
          <Text
            style={{
              fontFamily: typeface.GELLIX_R,
              fontSize: wPercent(4.5),
              textAlign: 'center',
              color: '#97999b',
              margin: 5,
            }}>
            {moduleDescription}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LessonList;
