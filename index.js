/**
 * @format
 */

import {Navigation} from 'react-native-navigation';

// register screens before app launch
import './src/screens/registerScreens';

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#19ACFE',
  },
  topBar: {
    visible: false,
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#fff',
    },
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'initialize',
            },
          },
        ],
      },
    },
  });
});
