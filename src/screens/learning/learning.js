import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Icon,
  Left,
  Button,
  Body,
  Title,
} from 'native-base';
import NoData from '../../components/noData';
import Article from './article';
import {Navigation} from 'react-native-navigation';
const Learning = ({lessonId, moduleName, componentId}) => {
  return (
    <Container>
      <Header hasTabs>
        <Left>
          <Button
            onPress={() => {
              Navigation.pop(componentId);
            }}
            transparent>
            <Icon name="arrow-back" color={'#000'} />
          </Button>
        </Left>
        <Body>
          <Title style={{color: '#fff', textAlign: 'center'}}>
            {moduleName}
          </Title>
        </Body>
      </Header>
      <Tabs>
        <Tab heading="Lesson">
          <Article lessonId={lessonId} />
        </Tab>
        <Tab heading="Quiz">
          <NoData message={'Quiz coming soon'} />
        </Tab>
        <Tab heading="Practice">
          <NoData message={'Practice Platform coming soon'} />
        </Tab>
      </Tabs>
    </Container>
  );
};
export default Learning;
