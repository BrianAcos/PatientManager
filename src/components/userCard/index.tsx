import React, {useState, useEffect, memo} from 'react';
import styles from './styles';
import {PatientData} from '../../types/types';
import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import {Button} from '../button';
import FastImage from 'react-native-fast-image';
const ArrowDown = require('../../assets/arrow_down.png');
const DefaultUser = require('../../assets/default_user.png');
const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

interface props {
  patientData: PatientData;
  setModalAdd: () => void;
  setPatient: (patient: PatientData) => void;
  expanded: boolean;
  setExpanded: (state: any) => void;
}

const UserCard: React.FC<props> = ({patientData, setModalAdd, setPatient, setExpanded, expanded}) => {
  const [expand, setExpand] = useState(false);
  const [error, setError] = useState(false);
  const dateOfADmission = new Date(patientData.createdAt);
  const isValidUrl = urlRegex.test(patientData.avatar);
  const source = isValidUrl && !error ? {uri: patientData.avatar} : DefaultUser;

  const onPressEdit = () => {
    setPatient(patientData);
    setModalAdd();
  };

  const getDOB = () => {
    if (patientData.DOB) {
      const [month, day, year] = patientData.DOB.split('/');
      const date = new Date(Number(year), Number(month) - 1, Number(day));
      return date.toLocaleDateString();
    }

    return '';
  };

  useEffect(() => {
    setError(false);
  }, [patientData.avatar]);

  return (
    <View style={styles.userContainer}>
      <View style={styles.dataContainer}>
        <FastImage
          source={source}
          style={styles.avatar}
          onLoad={() => source !== DefaultUser && setError(false)}
          onError={() => setError(true)}
        />
        <View>
          <Text style={styles.name}>{patientData.name}</Text>
          <Text>Admission: {dateOfADmission.toLocaleDateString('en-US')}</Text>
          <Text>Patient Number: {patientData.id}</Text>
        </View>
        <TouchableOpacity onPress={() => setExpanded(patientData.id)}>
          <Image
            source={ArrowDown}
            resizeMode="contain"
            style={expand && {transform: [{rotate: '180deg'}]}}
          />
        </TouchableOpacity>
      </View>
      {expanded && (
        <View style={styles.extraDataContainer}>
          <Text style={styles.description}>
            {patientData.description || 'There is not description'}
          </Text>
          {patientData.website && (
            <Text style={styles.moreInfo}>
              Website:{' '}
              <Text onPress={() => Linking.openURL(patientData.website)}>
                {patientData.website}
              </Text>
            </Text>
          )}
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

export default memo(UserCard);
