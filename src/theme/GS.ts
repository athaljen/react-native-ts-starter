import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // flex
  flex1: {flex: 1},
  //Flex Grow
  fg1: {flexGrow: 1},
  fg2: {flexGrow: 2},
  //Flex Shrink
  fs1: {flexShrink: 1},

  //Flex Wrap
  fwWrap: {flexWrap: 'wrap'},
  fwNoWrap: {flexWrap: 'nowrap'},
  fwWrapReverse: {flexWrap: 'wrap-reverse'},
  //Flex Direction
  fdRow: {flexDirection: 'row'},
  fdColumn: {flexDirection: 'column'},

  //Justify Content
  jcCenter: {justifyContent: 'center'},
  jcStart: {justifyContent: 'flex-start'},
  jcEnd: {justifyContent: 'flex-end'},
  jcSpaceBetween: {justifyContent: 'space-between'},
  jcSpaceAround: {justifyContent: 'space-around'},
  jcSpaceEvenly: {justifyContent: 'space-evenly'},
  //Align Items
  aiCenter: {alignItems: 'center'},
  aiStart: {alignItems: 'flex-start'},
  aiEnd: {alignItems: 'flex-end'},
  aiStretch: {alignItems: 'stretch'},
  aiBaseline: {alignItems: 'baseline'},
  //Align Content
  acCenter: {alignContent: 'center'},
  acStart: {alignContent: 'flex-start'},
  acEnd: {alignContent: 'flex-end'},
  acSpaceBetween: {alignContent: 'space-between'},
  acSpaceAround: {alignContent: 'space-around'},
  acStretch: {alignContent: 'stretch'},
  //Align Self
  asCenter: {alignSelf: 'center'},
  asStart: {alignSelf: 'flex-start'},
  asEnd: {alignSelf: 'flex-end'},
  asStretch: {alignSelf: 'stretch'},
  asBaseline: {alignSelf: 'baseline'},

  //Position
  posAbsolute: {position: 'absolute'},
  posRelative: {position: 'relative'},
  posStatic: {position: 'static'},

  ///Height
  h25: {height: '25%'},
  h50: {height: '50%'},
  h75: {height: '75%'},
  h100: {height: '100%'},
  ///Width
  w25: {width: '25%'},
  w50: {width: '50%'},
  w75: {width: '75%'},
  w100: {width: '100%'},

  ///GAPS
  gap5: {gap: 5},
  gap10: {gap: 10},
  rGap5: {rowGap: 5},
  rGap10: {rowGap: 10},
  cGap5: {columnGap: 5},
  cGap10: {columnGap: 10},

  //Background
  bgDark: {backgroundColor: '#000000'},
  bgWhite: {backgroundColor: '#ffffff'},
  bgGray: {backgroundColor: '#808080'},

  ///Icons
  Icon10: {height: 10, width: 10},
  Icon15: {height: 15, width: 15},
  Icon20: {height: 20, width: 20},
  Icon25: {height: 25, width: 25},
  Icon30: {height: 30, width: 30},

  //Text
  textCenter: {textAlign: 'center'},
  textLeft: {textAlign: 'left'},
  textRight: {textAlign: 'right'},
  textJustify: {textAlign: 'justify'},
  textUnderline: {textDecorationLine: 'underline'},
  textLineThrough: {textDecorationLine: 'line-through'},

  //Color
  textWhite: {color: '#ffffff'},
  textBlack: {color: '#000000'},
  textGray: {color: '#808080'},

  ////Font Size
  fs12: {fontSize: 12},
  fs13: {fontSize: 13},
  fs15: {fontSize: 15},
  fs16: {fontSize: 16},
  fs18: {fontSize: 18},
  fs20: {fontSize: 20},
  fs30: {fontSize: 30},

  //Border
  border05: {borderWidth: 0.5},
  border1: {borderWidth: 1},
  border2: {borderWidth: 2},

  //Border Radius
  br5: {borderRadius: 5},
  br10: {borderRadius: 10},
  br15: {borderRadius: 15},
  br20: {borderRadius: 20},

  //Border Color
  borderBlack: {borderColor: '#000000'},
  borderWhite: {borderColor: '#ffffff'},
  borderGray: {borderColor: '#808080'},

  //PADDING
  //padding all
  p5: {padding: 5},
  p10: {padding: 10},
  p15: {padding: 15},
  p20: {padding: 20},
  ///padding start
  ps5: {paddingStart: 5},
  ps10: {paddingStart: 10},
  ps15: {paddingStart: 15},
  ps20: {paddingStart: 20},
  ///padding top
  pt5: {paddingTop: 5},
  pt10: {paddingTop: 10},
  pt15: {paddingTop: 15},
  pt20: {paddingTop: 20},
  ///padding end
  pe5: {paddingEnd: 5},
  pe10: {paddingEnd: 10},
  pe15: {paddingEnd: 15},
  pe20: {paddingEnd: 20},
  ///padding bottom
  pb5: {paddingBottom: 5},
  pb10: {paddingBottom: 10},
  pb15: {paddingBottom: 15},
  pb20: {paddingBottom: 20},
  ///padding horizontal
  ph5: {paddingHorizontal: 5},
  ph10: {paddingHorizontal: 10},
  ph15: {paddingHorizontal: 15},
  ph20: {paddingHorizontal: 20},
  ///padding vertical
  pv5: {paddingVertical: 5},
  pv10: {paddingVertical: 10},
  pv15: {paddingVertical: 15},
  pv20: {paddingVertical: 20},

  //MARGIN
  //margin all
  m5: {margin: 5},
  m10: {margin: 10},
  m15: {margin: 15},
  m20: {margin: 20},
  ///margin start
  ms5: {marginStart: 5},
  ms10: {marginStart: 10},
  ms15: {marginStart: 15},
  ms20: {marginStart: 20},
  ///margin top
  mt5: {marginTop: 5},
  mt10: {marginTop: 10},
  mt15: {marginTop: 15},
  mt20: {marginTop: 20},
  ///margin end
  me5: {marginEnd: 5},
  me10: {marginEnd: 10},
  me15: {marginEnd: 15},
  me20: {marginEnd: 20},
  ///margin bottom
  mb5: {marginBottom: 5},
  mb10: {marginBottom: 10},
  mb15: {marginBottom: 15},
  mb20: {marginBottom: 20},
  ///margin horizontal
  mh5: {marginHorizontal: 5},
  mh10: {marginHorizontal: 10},
  mh15: {marginHorizontal: 15},
  mh20: {marginHorizontal: 20},
  ///margin vertical
  mv5: {marginVertical: 5},
  mv10: {marginVertical: 10},
  mv15: {marginVertical: 15},
  mv20: {marginVertical: 20},

  //Shadow
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  //Rotate
  rotate45: {transform: [{rotate: '45deg'}]},
  rotate90: {transform: [{rotate: '90deg'}]},
  rotate180: {transform: [{rotate: '180deg'}]},
});
