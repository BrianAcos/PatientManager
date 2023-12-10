import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {PatientData} from '../../types/types';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import {Button} from '../button';

interface props {
  onClose: () => void;
  onSubmit: (patient: PatientData) => void;
  isVisible: boolean;
  patient: PatientData | null;
}

interface Inputs {
  id: string;
  placeholder: string;
  required: boolean;
  value: string;
}

const inputs: Inputs[] = [
  {id: 'name', placeholder: 'Full Name', required: true, value: ''},
  {id: 'avatar', placeholder: 'Picture', required: false, value: ''},
  {id: 'description', placeholder: 'Description', required: true, value: ''},
  {id: 'website', placeholder: 'Website', required: true, value: ''},
  {
    id: 'DOB',
    placeholder: 'Date of birth MM/DD/YYYY',
    required: false,
    value: '',
  },
  {id: 'gender', placeholder: 'Gender', required: false, value: ''},
  {id: 'weight', placeholder: 'Weight', required: false, value: ''},
  {id: 'height', placeholder: 'Height', required: false, value: ''},
];

export const ModalAdd: React.FC<props> = ({
  isVisible,
  onClose,
  onSubmit,
  patient,
}) => {
  const [show, setShow] = useState(true);
  const formRefs = inputs.map(input => ({ref: useRef<any>(null), ...input}));

  useEffect(() => {
    if (patient) {
      formRefs.forEach(({id, ref}, index) => {
        const key = id as keyof PatientData;
        ref?.current?.setNativeProps({text: patient[key] || ''});
        formRefs[index].value = patient[key] || '';
      });
    }
  }, []);

  useEffect(() => {
    setShow(isVisible);
  }, [isVisible]);

  const handleClose = () => {
    setShow(false);
  };

  const checkErrors = () => {
    let errors = false;
    formRefs.forEach(input => {
      if (input.required && !input.value) {
        errors = true;
        input.ref.current?.setNativeProps({
          style: {
            backgroundColor: '#FFCCCB',
          },
        });
      } else {
        input.ref.current?.setNativeProps({
          style: {
            backgroundColor: '#F5F5F5',
          },
        });
      }
    });

    if (errors) return;

    const newPatient: PatientData = {
      avatar: '',
      createdAt: patient?.createdAt || new Date().toISOString(),
      description: '',
      id: patient?.id || '',
      name: '',
      website: '',
      DOB: '',
      gender: '',
      weight: '',
      height: '',
    };

    formRefs.forEach(({id, value}) => {
      const key = id as keyof PatientData;
      newPatient[key] = value;
    });

    onSubmit(newPatient);
  };

  return (
    <Modal
      onDismiss={onClose}
      isVisible={show}
      customBackdrop={
        <TouchableOpacity style={styles.backdrop} onPress={handleClose} />
      }>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Add a new Patient</Text>
        {formRefs.map(input => (
          <TextInput
            onChangeText={value => (input.value = value)}
            key={input.id}
            ref={input.ref}
            placeholder={input.placeholder}
            style={styles.input}
          />
        ))}
        <View style={styles.buttonContainer}>
          <Button
            text="Dismiss"
            onPress={handleClose}
            style={styles.buttonDismiss}
            textStyle={styles.buttonDismissText}
          />
          <Button
            text="Submit"
            onPress={checkErrors}
            style={styles.buttonSubmit}
          />
        </View>
      </ScrollView>
    </Modal>
  );
};
