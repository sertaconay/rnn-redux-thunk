import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import WelcomeScreen from './Welcome';
import LoginScreen from './Login';
import HomeScreen from './Home';
import initialState from '../state/initialState';
import configureStore from '../state/store';

const { store, persistor } = configureStore(initialState);

const ProviderWrapper = (Component: any) => ((props: any) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Component {...props} />
    </PersistGate>
  </Provider>
));

const registerScreens = () => {
  Navigation.registerComponent(
    'WelcomeScreen',
    () => ProviderWrapper(WelcomeScreen),
    () => WelcomeScreen,
  );

  Navigation.registerComponent(
    'LoginScreen',
    () => ProviderWrapper(LoginScreen),
    () => LoginScreen,
  );

  Navigation.registerComponent(
    'HomeScreen',
    () => ProviderWrapper(HomeScreen),
    () => HomeScreen,
  );
};

export default registerScreens;
