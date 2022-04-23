import React, {useRef} from 'react';
import { Image, FlatList, StyleSheet, View, ScrollView } from 'react-native';
import AppText from '../components/AppText';
import Card from '../components/Card';
import Screen from '../components/Screen';


function HomeScreen({navigation}) {
    const courselist = [
        { 
            id: 1,
            coursetitle: 'Economics'
        },
        { 
            id: 2,
            coursetitle: 'Comp Sc.'
        },
        { 
            id: 3,
            coursetitle: 'Bus Admin.'
        },
        { 
            id: 4,
            coursetitle: 'ISMS'
        },
        { 
            id: 5,
            coursetitle: 'Accounting'
        },
        { 
            id: 6,
            coursetitle: 'Mass Comm'
        },
    ]

    return (
        <ScrollView>
        <Screen style={styles.screenCont}>
            <View style={styles.screen}>
            <View style={styles.welcomeCard}>
                <View>
                    <AppText style={styles.greeting}>Good Day,</AppText>
                    <AppText style={styles.greetings}>Pelumi</AppText>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/reading.png')}/>
                </View>
            </View>
                <View style={styles.courseCont}>
                    <AppText style={styles.course}>courses</AppText>
                    <AppText>______</AppText>
                </View>
                    <View style={styles.boxCont}>
                        <FlatList
                            data={courselist}
                            keyExtractor={(courselist) => courselist.id.toString()}
                            renderItem={({item}) => (
                                    <Card style={styles.boxCont}
                                        coursetitle={item.coursetitle}
                                        onPress={() => navigation.navigate("Tutors", item)}
                                    />
                                )}
                            numColumns={2}
                        />

                    </View>
            </View>
        </Screen>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    welcomeCard: {
        height: 220,
        width: 380,
        backgroundColor: '#6DFFCB',
        borderRadius: 9,
        padding: 20,
        paddingBottom: 50,
        shadowOffset: {height: 8, },
        shadowColor: "grey",
        shadowOpacity: 0.3,
    },
    screen: {
        padding: 20,
        alignItems: 'center'
    },
    greeting: {
        fontWeight: '500',
        fontSize: 26
    },
    greetings: {
        fontWeight: '500',
        fontSize: 20
    },
    image: {
        height: 130,
        width: 160,
    },
    imageContainer: {
        paddingLeft: 170

    },
    courseCont: {
        marginTop: 30,
        alignItems: 'center'
    },
    course: {
        fontSize: 25
    },
    boxCont: {
        paddingTop: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%'
    }

})
export default HomeScreen;