import React, {useRef} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../reducers';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {removeNotification} from '../../actions/notifications';

const close = require('../../assets/close.png');

export const Notifications: React.FC = () => {
  const {show, type, message} = useSelector(
    (state: RootState) => state.notifications,
  );
  const dispatch = useDispatch();
  const touchStart = useRef<any>(null);
  const {top} = useSafeAreaInsets();

  const closeNotify = () => {
    dispatch(removeNotification());
  };

  const onTouchEnd = (e: any) => {
    if (e.nativeEvent.locationY < touchStart.current.locationY) {
      closeNotify();
    }
  };

  if (!show) return null;

  return (
    <View
      style={[
        styles.container,
        type === 'error' && styles.error,
        {top: top + 10},
      ]}
      onTouchStart={e => (touchStart.current = e.nativeEvent)}
      onTouchEnd={onTouchEnd}>
      <Text style={styles.text}>{message}</Text>
      <TouchableOpacity onPress={closeNotify} style={styles.touchable}>
        <Image source={close} style={styles.image} />
      </TouchableOpacity>
    </View>
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
    width: '90%',
    flexDirection: 'row',
    height: 50,
    position: 'absolute',
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
