import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {UserCard} from '../components/userCard';
import {PatientData} from '../types/types';
import {ButtonAddPatient} from '../components/buttonAddPatient';
import {ModalAdd} from '../components/modalAdd';
import {Notifications} from '../components/Notifications';
import {LoadingComponent} from '../components/loadingComponent';
import {ErrorComponent} from '../components/errorComponent';
import {NoPatientData} from '../components/noPatientData';

const backupPatientData = require('../../response.json');

function Home(): React.JSX.Element {
  const [data, setData] = useState<PatientData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [patient, setPatient] = useState<PatientData | null>(null);
  const [modalAdd, setModalAdd] = useState<boolean>(false);
  const [notify, setNotify] = useState<'error' | 'success' | null>(null);
  const [notifyMessage, setNotifyMessage] = useState<string>('');

  const getPatientData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        'https://63bedcf7f5cfc0949b634fc8.mockapi.io/users',
      );
      const result = await response.json();
      setData(result);
      setLoading(false);
      setError(false);
    } catch (_) {
      setError(true);
      setLoading(false);
    }
  };

  const onPressBackup = () => {
    setData(backupPatientData);
    setError(false);
  };

  useEffect(() => {
    getPatientData();
  }, []);

  const onCloseModal = () => {
    setModalAdd(false);
    setPatient(null);
  };

  const onSubmit = async (patientInformation: PatientData) => {
    const isAdding = patient === null;
    if (isAdding) {
      // ADD PATIENT
      const lastId: number = data.reduce(
        (acc, curr): any => (Number(acc) > Number(curr.id) ? acc : curr.id),
        0,
      );
      patientInformation.id = `${Number(lastId) + 1}`;
      setData([...data, patientInformation]);
    } else {
      // EDIT PATIENT
      const newPatientList = data.map(user => {
        if (user.id === patient.id) {
          return patientInformation;
        }
        return user;
      });
      setData(newPatientList);
    }
    setNotify('success');
    setNotifyMessage(`Patient successfully ${isAdding ? 'added' : 'edited'}`);

    setModalAdd(false);
    setPatient(null);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          numColumns={1}
          data={data}
          keyExtractor={(_, idx) => `${idx}`}
          renderItem={({item}) => (
            <UserCard
              patientData={item}
              setModalAdd={setModalAdd}
              setPatient={setPatient}
            />
          )}
          ListEmptyComponent={
            loading ? (
              <LoadingComponent />
            ) : error ? (
              <ErrorComponent
                onPressRetry={getPatientData}
                onPressBackup={onPressBackup}
              />
            ) : (
              <NoPatientData setModalAdd={setModalAdd} />
            )
          }
          contentContainerStyle={{margin: 10, paddingBottom: 100}}
        />
        {!loading && !error && (
          <ButtonAddPatient onPress={() => setModalAdd(true)} />
        )}
        {/* MODAL TO ADD OR EDIT PATIENT */}
        {modalAdd && (
          <ModalAdd
            isVisible={modalAdd}
            patient={patient}
            onClose={onCloseModal}
            onSubmit={onSubmit}
          />
        )}
        <Notifications
          setNotify={setNotify}
          notify={notify}
          message={notifyMessage}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default Home;
