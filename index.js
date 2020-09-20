import { Navigation } from 'react-native-navigation';
import registerScreens from './src/screens';

registerScreens();

const defaultOptions = {
  animations: {
    from: 0,
    to: 1,
    duration: 300,
    startDelay: 0,
    interpolation: 'accelerate',
  },
};

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    animations: {
      setRoot: {
        waitForRender: true,
        alpha: {
          ...defaultOptions.animations,
        },
      },
      push: {
        waitForRender: true,
        alpha: {
          ...defaultOptions.animations,
        },
      },
      showModal: {
        waitForRender: true,
        alpha: {
          ...defaultOptions.animations,
        },
      },
    },
  });

  Navigation.setRoot({
    root: {
      component: {
        name: 'WelcomeScreen',
      },
    },
  }).then();
});
