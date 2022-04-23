import React from 'react';
import {Image, ScrollView, StyleSheet, View, KeyboardAvoidingView} from 'react-native'
import AppText from '../components/AppText';
import ButtonTags from '../components/ButtonTags';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import SquareButtons from '../components/SquareButtons';
import colors from '../config/colors';
import Test from './Test';
import { Linking } from 'react-native';
import Testcomp from './Testcomp';


function AccountDetailsScreen({route}) {
    const listings = route.params
    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding">

        <Screen>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.subcont}>
                        <Image style={styles.image}source={listings.images}/>
                    </View>
                    <View style={styles.namecont}>
                        <AppText style={styles.name}>{listings.title}</AppText>
                    </View>
                    <View style={styles.courselvl}>
                        <AppText style={styles.courseee}>{listings.coursetitle}</AppText>
                        <AppText style={styles.course}>{listings.levelcategory}</AppText>
                    </View>
                    <View style={styles.buttonContainer}>
                        <ButtonTags textt={listings.subj1}/>
                        <ButtonTags textt={listings.subj2}/>
                        <ButtonTags textt={listings.subj3}/>
                        <ButtonTags textt={listings.subj4}/>
                    </View>
                    <ListItemSeparator />
                    <View style={styles.messageCont}>
                        <AppText style={styles.message}>
                            {listings.description}
                        </AppText>
                    </View>
                    <ListItemSeparator />
                </View>
                <View style={{padding: 20}}>
                    <Test mobilee={listings.phoneno}/>
                </View>

            </ScrollView>
        </Screen>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 120,
        borderRadius: 50,
        alignItems: 'center'

    },
    sendMessageCont: {
        flexDirection: 'row',
        paddingTop: 50,
        justifyContent: 'center',
        marginBottom: 20
    },
    sendSubCont: {
        width: 250,
        height: 38,
        borderRadius: 7,
        backgroundColor: '#EDEDED',

    },
    messageCont: {
        paddingBottom: 10,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingBottom: 20
    },
    message: {
        fontSize: 16
    },
    container: {
        padding: 20
    },
    subcont: {
        alignItems: 'center'
    },
    namecont: {
        alignItems: 'center',
        paddingTop: 17,
        marginBottom: 3

    },
    course: {
        fontSize: 14
    },
    phone: {
        fontSize: 20,
        color: colors.secondary,
        alignSelf: 'center',
        fontWeight: '600'
    },
    courseee: {
        fontSize: 14,
        marginRight: 5
    },

    name: {
        fontSize: 15,
        fontWeight: '700',
        alignItems: 'center'

    },
    courselvl: {
        alignSelf: 'center',
        paddingBottom: 25,
        flexDirection: 'row'

    },
    button: {
        paddingLeft: 20
    }
})

export default AccountDetailsScreen;