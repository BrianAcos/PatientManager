import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from '../store/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import UserCard from '../components/userCard';
import {PatientData} from '../types/types';
import {ButtonAddPatient} from '../components/buttonAddPatient';
import {ModalAdd} from '../components/modalAdd';
import {Notifications} from '../components/notifications';
import {LoadingComponent} from '../components/loadingComponent';
import {ErrorComponent} from '../components/errorComponent';
import {NoPatientData} from '../components/noPatientData';
import {setNotification} from '../actions/notifications';
import {Searcher} from '../components/searcher';

const backupPatientData = require('../../response.json');

function Home(): React.JSX.Element {
  const [data, setData] = useState<PatientData[]>([]);
  const [filteredData, setFilteredData] = useState<PatientData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [patient, setPatient] = useState<PatientData | null>(null);
  const [modalAdd, setModalAdd] = useState<boolean>(false);

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
    const message = `Patient successfully ${isAdding ? 'added' : 'edited'}`;
    store.dispatch(setNotification(message, 'success'));

    setModalAdd(false);
    setPatient(null);
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}}>
          {!loading && !error && (
            <Searcher
              data={data}
              setFilteredData={setFilteredData}
            />
          )}
          <FlatList
            numColumns={1}
            data={filteredData || data}
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
          <Notifications />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default Home;
