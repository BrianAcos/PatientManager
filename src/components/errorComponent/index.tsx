import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../button';

interface props {
  onPressRetry: () => void;
  onPressBackup: () => void;
}

export const ErrorComponent: React.FC<props> = ({
  onPressRetry,
  onPressBackup,
}) => (
  <View style={styles.container}>
    <Text style={styles.text}>We are sorry</Text>
    <Text style={styles.text}>There was an error loading users.</Text>
    <Button text="Try again" onPress={onPressRetry} style={styles.button} />
    <Button text="Set backup data" onPress={onPressBackup} />
  </View>
);

const styles = StyleSheet.create({
  container: {justifyContent: 'center', paddingTop: 40, paddingHorizontal: 20},
  text: {
    paddingBottom: 5,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {marginBottom: 10},
});
