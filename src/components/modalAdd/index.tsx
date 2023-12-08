import React, { useState } from "react";
import styles from "./styles";
import { PatientData } from "../../types/types";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
const ArrowDown = require('../../assets/arrow_down.png');

interface props {
    onClose: () => void;
    isVisible: boolean;
}

export const ModalAdd: React.FC<props> = ({ isVisible, onClose }) => {

    return (
        <Modal
            isVisible={isVisible}
            customBackdrop={<TouchableOpacity style={styles.backdrop} onPress={onClose} />}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Add a new Patient</Text>
                {/* inputs */}
            </View>
        </Modal>
    )
};


