import {NavigationContainer} from '@react-navigation/native';
import React, {memo} from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Root = () => {
  const isLogin = false;
  return (
    <NavigationContainer>
      {isLogin ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default memo(Root);
