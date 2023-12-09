import React, {useState} from 'react';
import styles from './styles';
import {PatientData} from '../../types/types';
import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import {Button} from '../button';
const ArrowDown = require('../../assets/arrow_down.png');
const DefaultUser = require('../../assets/default_user.png');

interface props {
  patientData: PatientData;
  setModalAdd: (status: boolean) => void;
  setPatient: (patient: PatientData) => void;
}

export const UserCard: React.FC<props> = ({
  patientData,
  setModalAdd,
  setPatient,
}) => {
  const [expand, setExpand] = useState(false);
  const dateOfADmission = new Date(patientData.createdAt);

  const onPressEdit = () => {
    setPatient(patientData);
    setModalAdd(true);
  };

  const getDOB = () => {
    if (patientData.DOB) {
      const [month, day, year] = patientData.DOB.split('/');
      const date = new Date(Number(year), Number(month) - 1, Number(day));
      return date.toLocaleDateString();
    }
    
    return ''
  };

  return (
    <View style={styles.userContainer}>
      <View style={styles.dataContainer}>
        <Image
          source={{uri: patientData.avatar}}
          style={styles.avatar}
          defaultSource={DefaultUser}
        />
        <View>
          <Text style={styles.name}>{patientData.name}</Text>
          <Text>Admission: {dateOfADmission.toLocaleDateString('en-US')}</Text>
          <Text>Patient Number: {patientData.id}</Text>
        </View>
        <TouchableOpacity onPress={() => setExpand(!expand)}>
          <Image
            source={ArrowDown}
            resizeMode="contain"
            style={expand && {transform: [{rotate: '180deg'}]}}
          />
        </TouchableOpacity>
      </View>
      {expand && (
        <View style={styles.extraDataContainer}>
          <Text style={styles.description}>{patientData.description}</Text>
          <Text style={styles.moreInfo}>
            Website:{' '}
            <Text onPress={() => Linking.openURL(patientData.website)}>
              {patientData.website}
            </Text>
          </Text>
          {patientData.DOB && (
            <Text style={styles.moreInfo}>Date of birth: {getDOB()}</Text>
          )}
          {patientData.gender && (
            <Text style={styles.moreInfo}>Gender: {patientData.gender}</Text>
          )}
          {patientData.weight && (
            <Text style={styles.moreInfo}>Weight: {patientData.weight}</Text>
          )}
          {patientData.height && (
            <Text style={styles.moreInfo}>Height: {patientData.height}</Text>
          )}
          <Button text="Edit information" onPress={onPressEdit} />
        </View>
      )}
    </View>
  );
};
