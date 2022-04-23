import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText'
import AppImage from './AppImage'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import SquareButtons from './SquareButtons'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from './Icon';

function ListItem({image, title, subtitle, subTitle, ImageComponent, 
    coursetitle, message, hrs, onPress, buttontext, imagee, style}) {
    return (
            <TouchableOpacity  style={styles.mainCont} onPress={onPress}>
                <View style={[styles.subCont, style]}>
                    {ImageComponent}
                    {image && <Image style={styles.image} source={image}/>}
                    {imagee && <Image style={styles.imagee} source={imagee}/>}
                    <View style={styles.detailsContainer}>
                        <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
                        <View style={{flexDirection: 'row'}}>
                            {coursetitle && <AppText style={styles.course}>{coursetitle}</AppText>}
                            {subtitle && <AppText style={styles.courselvl}>{subtitle}</AppText>}
                        </View>
                        {subTitle && <AppText style={styles.subtitle} numberOfLines={2}>{subTitle}</AppText>}
                        {message && <AppText style={styles.message} numberOfLines={2}>{message}</AppText>}
                    </View>
                    <View style={styles.hrss}>
                        {hrs && <AppText style={styles.hours}>{hrs}</AppText>}
                        {buttontext && <SquareButtons title={buttontext}/>}
                    </View>
                </View>
            </TouchableOpacity>

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
        borderWidth: 0.5,
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 9,
        shadowOffset: {height: 4, },
        shadowColor: "grey",
        shadowOpacity: 0.2,
    },
    mainCont: {
        padding: 7,        
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
        color: colors.medium,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    course: {
        fontSize: 13,
        color: colors.secondary,
        fontWeight: 'bold',
        paddingBottom: 1,
        marginRight: 5
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
        fontSize: 13,
        paddingRight: 10
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

export default ListItem;