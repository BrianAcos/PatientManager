import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../button';

interface props {
  setModalAdd: (state: boolean) => void;
}

export const NoPatientData: React.FC<props> = ({setModalAdd}) => (
  <View style={styles.container}>
    <Text style={styles.text}>No users to display.</Text>
    <Button text="Add" onPress={() => setModalAdd(true)} />
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
});
