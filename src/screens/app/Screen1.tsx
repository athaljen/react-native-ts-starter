import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {ScreenProps} from '../../navigation/navigation.types';

const Screen1 = ({}: ScreenProps<'Screen1'>) => {
  return (
    <View>
      <Text>Screen1</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default memo(Screen1);
