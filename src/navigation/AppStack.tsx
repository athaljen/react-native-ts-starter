import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {memo} from 'react';
import Screen1 from '../screens/app/Screen1';
import Screen2 from '../screens/app/Screen2';
import {AppScreens} from '../constants';
import {AppStackParamList} from './navigation.types';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppScreens.Screen1} component={Screen1} />
      <Stack.Screen name={AppScreens.Screen2} component={Screen2} />
    </Stack.Navigator>
  );
};

export default memo(AppStack);
