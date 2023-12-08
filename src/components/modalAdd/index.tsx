import React, { useEffect, useState } from "react";
import styles from "./styles";
import { PatientData } from "../../types/types";
import { Text, TouchableOpacity, View, TextInput, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { Button } from "../button";
const ArrowDown = require('../../assets/arrow_down.png');

interface props {
    onClose: () => void;
    onSubmit: (patient: PatientData) => void;
    isVisible: boolean;
    patient: PatientData | null;
}

export const ModalAdd: React.FC<props> = ({ isVisible, onClose, onSubmit, patient }) => {
    console.log(patient);
    const isAdding = patient === null;
    const [name, setName] = useState(isAdding ? '' : patient.name);
    const [avatar, setAvatar] = useState(isAdding ? '' : patient.avatar);
    const [description, setDescription] = useState(isAdding ? '' : patient.description);
    const [website, setWebsite] = useState(isAdding ? '' : patient.website);
    const [DOB, setDOB] = useState(isAdding ? '' : patient.DOB || ''); // DATE OF BIRTH
    const [gender, setGender] = useState(isAdding ? '' : patient.gender || '');
    const [weight, setWeight] = useState(isAdding ? '' : patient.weight || '');
    const [height, setHeight] = useState(isAdding ? '' : patient.height || '');

    useEffect(() => {
    }, []);

    const newPatient: PatientData = {
        avatar,
        createdAt: new Date().toISOString(),
        description,
        id: patient?.id || '',
        name,
        website,
        DOB,
        gender,
        weight,
        height,
    };

    return (
        <Modal
            isVisible={isVisible}
            customBackdrop={<TouchableOpacity style={styles.backdrop} onPress={onClose} />}
        >
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Add a new Patient</Text>
                <TextInput value={name} onChangeText={setName} maxLength={20} placeholder="Full Name" style={styles.input} />
                <TextInput value={avatar} onChangeText={setAvatar} placeholder="Picture" style={styles.input} />
                <TextInput value={description} onChangeText={setDescription} placeholder="Description" style={styles.input} />
                <TextInput value={website} onChangeText={setWebsite} placeholder="WebSite" style={styles.input} />
                <TextInput value={DOB} onChangeText={setDOB} placeholder="Date of birth" style={styles.input} />
                <TextInput value={gender} onChangeText={setGender} placeholder="Gender" style={styles.input} />
                <TextInput value={weight} onChangeText={setWeight} placeholder="Weight" style={styles.input} />
                {/* inputs */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 50 }}>
                    <Button text="Dismiss" onPress={onClose} style={{ backgroundColor: 'red' }} />
                    <Button text="Submit" onPress={() => onSubmit(newPatient)} style={{ backgroundColor: 'green' }} />
                </View>
            </ScrollView>
        </Modal>
    )
};


