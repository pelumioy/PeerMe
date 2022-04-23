import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function ButtonTags({textt}) {
    return (
        <View style={styles.container}>
            <View style={styles.buttons}> 
                <Text style={{
                    color: colors.secondary,
                    fontWeight: '600',
                    fontSize: 10,
                    padding: 5
                }}>{textt}</Text>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    },
    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 25,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.secondary
    }
})

export default ButtonTags;