import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

import { UserCard } from '../components/userCard';
import { PatientData } from '../types/types';
import { ButtonAddPatient } from '../components/buttonAddPatient';
import { ModalAdd } from '../components/modalAdd';

const patientData = require('../../response.json');



function Home(): React.JSX.Element {
  const [data, setData] = useState<PatientData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [patient, setPatient] = useState<PatientData | null>(null);
  const [modalAdd, setModalAdd] = useState<boolean>(false);

  useEffect(() => {
    const getPatientData = async () => {
      setData(patientData);
      setLoading(false);
      // try {
      //   const response = await fetch('https://63bedcf7f5cfc0949b634fc8.mockapi.io/users');
      //   console.log(response);
      //   const result = await response.json();
      //   console.log(result);
      //   setData(result);
      //   setLoading(false);
      // } catch (_) {
      //   setError(true);
      //   setLoading(false);
      // }
    };

    getPatientData();
  }, []);

  const onCloseModal = () => {
    setModalAdd(false);
    setPatient(null);
  }

  const onSubmit = async (patientInformation: PatientData) => {
    setModalAdd(false);
    setPatient(null);

    if (patient === null) {
      // ADD NEW PATIENT
    } else {
      // EDIT PATIENT
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error</Text>}
      {!loading && !error && (
        <FlatList
          numColumns={1}
          data={patientData}
          keyExtractor={(_, idx) => `${idx}`}
          renderItem={({ item }) => <UserCard patientData={item} setModalAdd={setModalAdd} setPatient={setPatient} />}
          contentContainerStyle={{ margin: 10, paddingBottom: 100 }}
        />
      )}
      {!loading && !error && (
        <ButtonAddPatient onPress={() => setModalAdd(true)} />
      )}
      {/* MODAL TO ADD OR EDIT PATIENT */}
      {modalAdd && <ModalAdd isVisible={modalAdd} patient={patient} onClose={onCloseModal} onSubmit={onSubmit} />}
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
});

export default Home;
