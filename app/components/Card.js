import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import AppText from './AppText'

function Card({style, coursetitle, onPress}) {
    return (
    <TouchableOpacity onPress={onPress}>
        <View style={[style]}>
            <View style={styles.courseBox}>
                <AppText style={styles.bigtext}>{(coursetitle.charAt(0))}</AppText>
                <AppText style={styles.text}>{coursetitle}</AppText>
            </View>
        </View>
    </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    courseBox: {
        height: 128,
        width: 157,
        backgroundColor: '#2FD3DF',
        borderRadius: 9,
        justifyContent: 'center',
        margin: 10

    },
    text: {
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: '700',
        color: '#fff',
        paddingBottom: 30
    },
    bigtext: {
        fontSize: 99,
        fontWeight: '600',
        color: '#fff',
        alignSelf: 'center',
        paddingTop: 20,
        opacity: 0.5

    }
})

export default Card;