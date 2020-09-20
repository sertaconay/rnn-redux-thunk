import React, { FC, useEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { navigationLogin, navigationHome } from '../navigations';

const WelcomeScreen: FC = () => {
  const { user } = useSelector((state: any) => ({
    user: state.user,
  }), shallowEqual);

  useEffect(() => {
    const redirectUser = () => {
      if (isEmpty(user.data)) {
        return navigationLogin();
      }
      return navigationHome();
    };

    const timer = setTimeout(async () => {
      await redirectUser();
    }, 1000);
    return () => clearTimeout(timer);
  }, [user.data]);

  return (
    <SafeAreaView>
      <Text>
        Welcome Screen
      </Text>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
