import React from 'react';
import {Text} from 'react-native';
import Query from '../../utils/query';
import Markdown, {PluginContainer} from 'react-native-markdown-display';
import html5media from '@gerhobbelt/markdown-it-html5-media';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import ARTICLE_QUERY from '../../queries/article';
import Video from 'react-native-video';
import IdyllRenderer from '../../components/idyllRenderer/idyllRenderer';

const Article = ({lessonId}) => {
  return (
    <Query query={ARTICLE_QUERY} id={lessonId}>
      {({data: {lesson}}) => {
        return (
          <ScrollView
            style={
              {
                // margin: 3,
              }
            }>
            <IdyllRenderer markup={lesson.content} />
            {/* <Markdown
              rules={{
                video: (node, children, parent, styles) => {
                  const {src} = node.attributes;
                  console.log(src);
                  const videoProps = {
                    key: node.key,
                    style: {width: 360, height: 240},
                    source: {
                      uri: src,
                    },
                    controls: true,
                    resizeMode: 'contain',
                  };
                  return <Video {...videoProps} />;
                },
              }}
              plugins={[new PluginContainer(html5media.html5Media)]}
              style={{
                body: {
                  fontFamily: 'BallPill-regular',
                },
                paragraph: {
                  fontFamily: 'Gellix-Regular',
                },
                image: {
                  width: 360,
                  height: 240,
                  borderRadius: 8,
                  overflow: 'hidden',
                },
                video: {
                  width: 360,
                  height: 240,
                  borderBottomColor: 'red',
                  borderBottomWidth: 10,
                },
              }}>
              {lesson.content}
            </Markdown> */}
          </ScrollView>
        );
      }}
    </Query>
  );
};
export default Article;
