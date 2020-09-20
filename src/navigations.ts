import { Navigation } from 'react-native-navigation';

export const navigationLogin = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'Login',
      options: {
        topBar: {
          visible: false,
        },
      },
      children: [
        {
          component: {
            id: 'LoginScreen',
            name: 'LoginScreen',
          },
        },
      ],
    },
  },
});

export const navigationHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'Home',
      options: {
        topBar: {
          visible: false,
        },
      },
      children: [
        {
          component: {
            id: 'HomeScreen',
            name: 'HomeScreen',
          },
        },
      ],
    },
  },
});
