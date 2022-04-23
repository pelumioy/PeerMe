import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

function SquareButtons({style, onPress, title}) {
    return (
        <TouchableOpacity
        style={[styles.button, style ]}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        textTransform: "uppercase",
        fontWeight: "bold",
        color: 'white',

    },
    button: {
        width: 67,
        height: 34,
        borderRadius: 7,
        backgroundColor: '#69E9CA',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SquareButtons;