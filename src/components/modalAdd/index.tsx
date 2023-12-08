import React, { useState } from "react";
import styles from "./styles";
import { PatientData } from "../../types/types";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import Modal from "react-native-modal";
const ArrowDown = require('../../assets/arrow_down.png');

interface props {
    onClose: () => void;
    isVisible: boolean;
    patient: PatientData | null;
}

export const ModalAdd: React.FC<props> = ({ isVisible, onClose, patient }) => {
    const isAdding = patient === null;
    const [name, setName] = useState(isAdding ? '' : patient.name);
    const [avatar, setAvatar] = useState(isAdding ? '' : patient.avatar);
    const [description, setDescription] = useState(isAdding ? '' : patient.description);
    const [website, setWebsite] = useState(isAdding ? '' : patient.website);
    const [DOB, setDOB] = useState(isAdding ? '' : patient.DOB || ''); // DATE OF BIRTH
    const [gender, setGender] = useState(isAdding ? '' : patient.gender || '');
    const [weight, setWeight] = useState(isAdding ? '' : patient.weight || '');
    const [height, setHeight] = useState(isAdding ? '' : patient.height || '');

    return (
        <Modal
            isVisible={isVisible}
            customBackdrop={<TouchableOpacity style={styles.backdrop} onPress={onClose} />}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Add a new Patient</Text>
                <TextInput value={name} onChangeText={setName} maxLength={20} placeholder="Full Name" style={styles.input} />
                <TextInput value={avatar} onChangeText={setAvatar} placeholder="Picture" style={styles.input} />
                <TextInput value={description} onChangeText={setDescription} placeholder="Description" style={styles.input} />
                <TextInput value={website} onChangeText={setWebsite} placeholder="WebSite" style={styles.input} />
                <TextInput value={DOB} onChangeText={setDOB} placeholder="Date of birth" style={styles.input} />
                <TextInput value={gender} onChangeText={setGender} placeholder="Gender" style={styles.input} />
                <TextInput value={weight} onChangeText={setWeight} placeholder="Weight" style={styles.input} /> 
                <TextInput value={height} onChangeText={setHeight} placeholder="Height" style={styles.input} />
                {/* inputs */}
            </View>
        </Modal>
    )
};


