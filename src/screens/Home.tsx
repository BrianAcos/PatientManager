import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

import { UserCard } from '../components/userCard';
import { PatientData } from '../types/types';
import { ButtonAddPatient } from '../components/buttonAddPatient';
import { ModalAdd } from '../components/modalAdd';

const patientData = [
  { createdAt: '2023-11-28T23:28:28.458Z', name: 'Juanita Towne', avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/893.jpg', description: 'Inventore laboriosam iure corporis. Ad suscipit dolore. In distinctio illum sit eos aspernatur culpa harum nemo.\nRatione libero aspernatur aut possimus. Sint provident corrupti. Quia nostrum adipisci natus amet nesciunt quibusdam quisquam aspernatur.\nSequi nesciunt quod ipsa occaecati recusandae officia aliquid incidunt. Iste laudantium aliquam aliquid alias quae molestiae quam aspernatur. Porro maiores consequuntur odit eligendi.', website: 'https://trusting-tomorrow.biz', id: '91' },
  { createdAt: '2023-11-28T23:28:28.458Z', name: 'Juanita Towne', avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/893.jpg', description: 'Inventore laboriosam iure corporis. Ad suscipit dolore. In distinctio illum sit eos aspernatur culpa harum nemo.\nRatione libero aspernatur aut possimus. Sint provident corrupti. Quia nostrum adipisci natus amet nesciunt quibusdam quisquam aspernatur.\nSequi nesciunt quod ipsa occaecati recusandae officia aliquid incidunt. Iste laudantium aliquam aliquid alias quae molestiae quam aspernatur. Porro maiores consequuntur odit eligendi.', website: 'https://trusting-tomorrow.biz', id: '92' },
  { createdAt: '2023-11-28T23:28:28.458Z', name: 'Juanita Towne', avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/893.jpg', description: 'Inventore laboriosam iure corporis. Ad suscipit dolore. In distinctio illum sit eos aspernatur culpa harum nemo.\nRatione libero aspernatur aut possimus. Sint provident corrupti. Quia nostrum adipisci natus amet nesciunt quibusdam quisquam aspernatur.\nSequi nesciunt quod ipsa occaecati recusandae officia aliquid incidunt. Iste laudantium aliquam aliquid alias quae molestiae quam aspernatur. Porro maiores consequuntur odit eligendi.', website: 'https://trusting-tomorrow.biz', id: '93' },
]


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

  return (
    <SafeAreaView style={{flex: 1}}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error</Text>}
      {!loading && !error && (
        <FlatList
          numColumns={1}
          data={patientData}
          keyExtractor={(_, idx) => `${idx}`}
          renderItem={({ item }) => <UserCard patientData={item} />}
          contentContainerStyle={{margin: 10}}
        />
      )}
      {!loading && !error && (
        <ButtonAddPatient onPress={() => setModalAdd(true)} />
      )}
      {/* MODAL TO ADD OR EDIT PATIENT */}
      <ModalAdd isVisible={modalAdd} patient={patient} onClose={() => setModalAdd(false)} />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
});

export default Home;
