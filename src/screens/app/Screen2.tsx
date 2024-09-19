import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {ScreenProps} from '../../navigation/navigation.types';

const Screen2 = ({}: ScreenProps<'Screen2'>) => {
  return (
    <View>
      <Text>Screen2</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default memo(Screen2);
