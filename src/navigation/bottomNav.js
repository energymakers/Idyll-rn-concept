import {Navigation} from 'react-native-navigation';
import {typeSize, colors} from '../styles/theme.style';
import iconHome from '../images/Learning.png';
import iconProjects from '../images/Technology.png';

const bottomNavigation = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'home',
                },
              },
            ],
            options: {
              bottomTab: {
                text: 'Learning',
                fontSize: typeSize.LARGEBODY_TEXT,
                selectedIconColor: colors.BLUE,
                selectedTextColor: colors.BLUE,
                icon: iconHome,
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'projects',
                },
              },
            ],
            options: {
              bottomTab: {
                text: 'Projects',
                fontSize: typeSize.LARGEBODY_TEXT,
                selectedIconColor: colors.BLUE,
                selectedTextColor: colors.BLUE,
                icon: iconProjects,
              },
            },
          },
        },
      ],
    },
  },
};
export default bottomNavigation;
