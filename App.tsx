import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

interface PatientData {
  avatar: string;
  createdAt: string;
  description: string;
  id: string;
  name: string;
  website: string;
}

function App(): React.JSX.Element {
  const [data, setData] = useState<PatientData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const getPatientData = async () => {
      const response = await fetch('https://63bedcf7f5cfc0949b634fc8.mockapi.io/users');
      console.log(response);
      const result = await response.json();
      console.log(result);
      setData(result);
      setLoading(false);
    }

    getPatientData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {data.map((patientData, idx) => {
          const dateOfADmission = new Date(patientData.createdAt);
          return (
            <View key={idx} style={styles.userContainer}>
              <Image src={patientData.avatar} style={styles.avatar} />
              <View>
                <Text>{patientData.name}</Text>
                <Text>{dateOfADmission.toLocaleDateString('en-US')}</Text>
                <Text>Patient Number: {patientData.id}</Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  userContainer: {
    flexDirection: 'row',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

export default App;
