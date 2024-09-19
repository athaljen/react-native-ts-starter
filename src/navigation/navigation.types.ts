import {NavigationProp, RouteProp} from '@react-navigation/native';
import {AppScreens} from '../constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
// import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';

export type AuthStackParamList = {
  [AppScreens.Login]: undefined;
  [AppScreens.SignUp]: undefined;
};

export type AppStackParamList = {
  [AppScreens.Screen1]: undefined;
  [AppScreens.Screen2]: undefined;
};

export type BottomTabParamList = {};

export type TopTabParamList = {};

/// RootNavigations is a union of all navigations
export type RootNavigations = NativeStackNavigationProp<
  AppStackParamList & AuthStackParamList
>;
//  &
//   BottomTabNavigationProp<BottomTabParamList> &
//   MaterialTopTabNavigationProp<TopTabParamList>;

type CombinedParamList = AuthStackParamList &
  AppStackParamList &
  BottomTabParamList &
  TopTabParamList;

export type ScreenProps<
  S extends keyof CombinedParamList = keyof CombinedParamList,
> = {
  navigation: RootNavigations;
  route: RouteProp<CombinedParamList, S>;
};

///for hooks
export type useNavigationType = NavigationProp<CombinedParamList>;
