import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { logUserOut } from '../state/actions';
import { navigationLogin } from '../navigations';

const HomeScreen: FC = () => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logUserOut());
    AsyncStorage.clear().then();
  };

  useEffect(() => {
    if (!user.data.token) {
      navigationLogin();
    }
  });

  return (
    <SafeAreaView>
      <Text>
        Home Screen
      </Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
