import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText'
import AppImage from './AppImage'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import SquareButtons from './SquareButtons'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from './Icon';

function MessageList({image, title, subtitle, subTitle, ImageComponent, message, hrs, onPress, buttontext, renderRightActions, imagee, style}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableOpacity  style={styles.mainCont} onPress={onPress}>
                <View style={[styles.subCont, style]}>
                    {ImageComponent}
                    {image && <Image style={styles.image} source={image}/>}
                    {imagee && <Image style={styles.imagee} source={imagee}/>}
                    <View style={styles.detailsContainer}>
                        <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
                        {subtitle && <AppText style={styles.courselvl} numberOfLines={2}>{subtitle}</AppText>}
                        {subTitle && <AppText style={styles.subtitle} numberOfLines={2}>{subTitle}</AppText>}
                        {message && <AppText style={styles.message} numberOfLines={2}>{message}</AppText>}
                    </View>
                    <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={20}/>
                    <View style={styles.hrss}>
                        {hrs && <AppText style={styles.hours}>{hrs}</AppText>}
                        {buttontext && <SquareButtons title={buttontext}/>}
                    </View>
                </View>
            </TouchableOpacity>

        </Swipeable>
    );
}

const styles = StyleSheet.create({
    subCont: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingRight: 20,
        height: 110,
        width: "100%",
    },
    mainCont: {
        padding: 1,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    subtitle: {
        fontSize: 17,
        color: 'grey',
    },
    courselvl: {
        fontSize: 13,
        color: colors.secondary,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    image: {
        width: 70,
        height: 80,
        borderRadius: 9,
    },
    imagee: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    message: {
        fontSize: 14
    },

    title: {
        fontWeight: '500',
        fontSize: 17,
        paddingBottom: 4

    },
    hours: {
        fontSize: 11,
        paddingLeft: 20,
        fontWeight: '500',
        paddingBottom: 10

    }

})

export default MessageList;