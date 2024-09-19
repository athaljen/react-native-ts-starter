import React, {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  ActivityIndicator,
  Animated,
  Modal,
  StyleSheet,
  View,
} from 'react-native';
import colors from '../../theme/colors';

type loaderProps = {};

export type LoaderRef = {
  start: () => void;
  stop: () => void;
};

const Loader = forwardRef<LoaderRef, loaderProps>((props, ref) => {
  const [Visible, setVisible] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(animation, {
        useNativeDriver: true,
        toValue: 1,
        duration: 1000,
      }).start();
    }, 4000);

    return () => {
      animation.resetAnimation();
    };
  }, [Visible]);

  useImperativeHandle(
    ref,
    () => ({
      start: () => {
        setVisible(true);
      },
      stop: () => {
        setVisible(false);
      },
    }),
    [],
  );

  return (
    <Modal transparent statusBarTranslucent visible={Visible}>
      <View style={styles.loaderBackdrop}>
        <View style={styles.loader}>
          <ActivityIndicator size={'large'} />
          <Animated.Text style={[styles.text, {opacity: animation}]}>
            {'Please wait...'}
          </Animated.Text>
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  loader: {
    height: 90,
    width: 90,
    backgroundColor: colors.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderBackdrop: {
    flex: 1,
    backgroundColor: colors.backdrop,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: '#000000', position: 'absolute', bottom: 10, fontSize: 13},
});

export default memo(Loader);
