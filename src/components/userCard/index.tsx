import React, { useState } from "react";
import styles from "./styles";
import { PatientData } from "../../types/types";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../button";
const ArrowDown = require('../../assets/arrow_down.png');

interface props {
    patientData: PatientData;
    setModalAdd: (status: boolean) => void;
    setPatient: (patient: PatientData) => void;
}

export const UserCard: React.FC<props> = ({ patientData, setModalAdd, setPatient }) => {
    const [expand, setExpand] = useState(false);
    const dateOfADmission = new Date(patientData.createdAt);

    const onPressEdit = () => {
        setPatient(patientData);
        setModalAdd(true);
    }

    return (
        <View style={styles.userContainer}>
            <View style={styles.dataContainer}>
                <Image src={patientData.avatar} style={styles.avatar} />
                <View>
                    <Text style={styles.text}>{patientData.name}</Text>
                    <Text>{dateOfADmission.toLocaleDateString('en-US')}</Text>
                    <Text>Patient Number: {patientData.id}</Text>
                </View>
                <TouchableOpacity onPress={() => setExpand(!expand)}>
                    <Image source={ArrowDown} resizeMode="contain" style={expand && { transform: [{ rotate: '180deg' }] }} />
                </TouchableOpacity>
            </View>
            {expand && (
                <View style={styles.extraDataContainer}>
                    <Text>{patientData.description}</Text>
                    <Text>{ }</Text>
                    <Button text="Edit information" onPress={onPressEdit} />
                </View>
            )}
        </View>
    )
};


