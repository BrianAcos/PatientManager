import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
const add_user = require('../../assets/add_user.png');

interface props {
  onPress: () => void;
}

export const ButtonAddPatient: React.FC<props> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={add_user} style={styles.button} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
