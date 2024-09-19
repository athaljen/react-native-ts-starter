'use strict';
import {Dimensions, PixelRatio, Platform} from 'react-native';

export const AppDimensions = Object.freeze({
  screenHeight: Dimensions.get('screen').height,
  screenWidth: Dimensions.get('screen').width,
  windowHeight: Dimensions.get('window').height,
  windowWidth: Dimensions.get('window').width,
  pixelRatio: PixelRatio.get(),
});

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'ios';

export enum AuthScreens {}

export const AppScreens = Object.freeze({
  Login: 'Login',
  SignUp: 'SignUp',
  Screen1: 'Screen1',
  Screen2: 'Screen2',
});
