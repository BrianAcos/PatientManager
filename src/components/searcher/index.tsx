import React, {useState, useEffect} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {PatientData} from '../../types/types';

interface props {
  setFilteredData: (data: PatientData[] | null) => void;
  data: PatientData[];
}

export const Searcher: React.FC<props> = ({data, setFilteredData}) => {
  const [value, setvalue] = useState<string>('');

  const handleChange = (text: string) => {
    if (text) {
      const newData = data.filter(user => user.name.includes(text));
      setFilteredData(newData);
    } else {
      setFilteredData(null);
    }
    setvalue(text);
  };

  useEffect(() => {
    if (value) {
      const newData = data.filter(user => user.name.includes(value));
      setFilteredData(newData);
    }
  }, [data])
  

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={handleChange}
        placeholder="Search by name..."
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
  },
});
