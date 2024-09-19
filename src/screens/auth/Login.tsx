'use strict';
import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScreenProps} from '../../navigation/navigation.types';

const Login = (props: ScreenProps<'Login'>) => {
  return <View style={styles.Login}></View>;
};

const styles = StyleSheet.create({
  Login: {flex: 1},
});

export default memo(Login);
