import React, {memo} from 'react';
import {Pressable, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import colors from '../../theme/colors';
import {isIos} from '../../constants';

type buttonProps = {
  title: string;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
  onPress?: () => void;
};

const Button: React.FC<buttonProps> = props => {
  const {title, buttonStyle, titleStyle, onPress} = props;

  return (
    <Pressable
      style={({pressed}) => [
        styles.Button,
        buttonStyle,
        {opacity: pressed && isIos ? 0.4 : 1},
      ]}
      android_ripple={styles.ripple}
      onPress={onPress}>
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Button: {
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 1,
    paddingVertical: 12,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    elevation: 6,
  },
  ripple: {
    color: colors.backdrop,
  },
  text: {
    color: colors.white,
    flexShrink: 1,
  },
});

export default memo(Button);
