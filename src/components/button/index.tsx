import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

interface props {
    onPress: () => void;
    style?: ViewStyle;
    text: string;
}

export const Button: React.FC<props> = ({ onPress, style, text }) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 40,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    text: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});


