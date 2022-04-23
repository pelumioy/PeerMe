import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';

function AppText({children, style, ...otherProps}) {
    return <Text style={[styles.text, style]} {...otherProps}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontSize: Platform.OS === "android" ? 18 : 20,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})

export default AppText;