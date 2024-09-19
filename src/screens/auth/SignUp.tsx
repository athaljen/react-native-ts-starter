'use strict';
import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScreenProps} from '../../navigation/navigation.types';

const SignUp = (props: ScreenProps<'SignUp'>) => {
  return <View style={styles.SignUp}></View>;
};

const styles = StyleSheet.create({
  SignUp: {flex: 1},
});

export default memo(SignUp);
