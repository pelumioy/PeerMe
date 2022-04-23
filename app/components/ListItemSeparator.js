import React from 'react';
import {View, StyleSheet} from 'react-native'
import colors from '../config/colors';

function ListItemSeparator({style}) {
    return (
        <View style={[styles.container, style]}>

            <View style={[styles.separator, style]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 0.2,
        backgroundColor: colors.medium,

    }
})

export default ListItemSeparator;