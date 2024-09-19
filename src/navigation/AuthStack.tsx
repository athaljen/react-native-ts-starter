import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {memo} from 'react';
import {AppScreens} from '../constants';
import {AuthStackParamList} from './navigation.types';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppScreens.Login} component={Login} />
      <Stack.Screen name={AppScreens.SignUp} component={SignUp} />
    </Stack.Navigator>
  );
};

export default memo(AuthStack);
