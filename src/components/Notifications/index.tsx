import React, {useEffect, useRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../reducers';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {removeNotification} from '../../actions/notifications';

const close = require('../../assets/close.png');

export const Notifications: React.FC = () => {
  const {show, type, message} = useSelector(
    (state: RootState) => state.notifications,
  );
  const translateY = useRef(new Animated.Value(-50)).current;
  const dispatch = useDispatch();
  const touchStart = useRef<any>(null);
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    if (show) {
      Animated.timing(translateY, {
        toValue: top + 10,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
  }, [show]);

  const closeNotify = () => {
    Animated.timing(translateY, {
      toValue: -50,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
    setTimeout(() => dispatch(removeNotification()), 1000);
  };

  const onTouchEnd = (e: any) => {
    if (e.nativeEvent.locationY < touchStart.current.locationY) {
      closeNotify();
    }
  };

  if (!show) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        type === 'error' && styles.error,
        {transform: [{translateY}]},
      ]}
      onTouchStart={e => (touchStart.current = e.nativeEvent)}
      onTouchEnd={onTouchEnd}>
      <Text style={styles.text}>{message}</Text>
      <TouchableOpacity onPress={closeNotify} style={styles.touchable}>
        <Image source={close} style={styles.image} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#5CDB5C',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: '96%',
    flexDirection: 'row',
    height: 50,
    position: 'absolute',
    top: 0,
  },
  error: {backgroundColor: '#FF2400'},
  text: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  touchable: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: 25, height: 25, resizeMode: 'contain'},
});
