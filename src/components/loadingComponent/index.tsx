import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export const LoadingComponent: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Loading Users...</Text>
    <ActivityIndicator size="large" color="blue" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  text: {
    paddingRight: 10,
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
