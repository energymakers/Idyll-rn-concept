import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import NoData from '../../components/noData';
import Query from '../../utils/query';
import {SINGLE_MODULE_QUERY} from '../../queries/modules';
import common from '../../styles/common.style';
import CardComp from '../../components/card/card';
import {dimensions, hPercent, wPercent, colors} from '../../styles/theme.style';
import {Navigation} from 'react-native-navigation';
import {
  Content,
  Container,
  Header,
  Left,
  Button,
  Icon,
  Right,
} from 'native-base';
const Projects = ({componentId}) => {
  return (
    <Container>
      {/* <Header noShadow style={{backgroundColor: colors.WHITE}}>
        <Left>
          <Button
            transparent
            onPress={() => {
              Navigation.pop(componentId);
            }}>
            <Icon name="arrow-back" style={{color: '#222'}} />
          </Button>
        </Left>
        <Right />
      </Header> */}
      <View style={{margin: wPercent(5)}}>
        <Text style={{...common.titleText, textAlign: 'center'}}>Projects</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <Query query={SINGLE_MODULE_QUERY} id={1}>
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
                        name: 'article',
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
    </Container>
  );
};

export default Projects;
