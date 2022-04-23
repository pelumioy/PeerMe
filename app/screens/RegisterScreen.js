import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as Yup from 'yup'
import AppText from '../components/AppText';
import {AppFormField, SubmitButton, AppForm} from '../components/forms/index'
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function RegisterScreen(props) {
    return (
        <Screen>
            <Image style={styles.logo} source={require('../assets/peerme.png')} />
            <AppForm
                initialValues={{email: '', password: '', username: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
                >
                <View style={styles.screen}>
                <AppFormField 
                    icon='email'
                    name='email'
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    placeholder='Email'
                    />
                <AppFormField 
                    icon='account'
                    name='username'
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='default'
                    textContentType='username'
                    placeholder='username' />
                <AppFormField 
                    icon='lock'
                    name='password'
                    autoCorrect={false}
                    autoCapitalize='none'
                    secureTextEntry
                    textContentType='password'
                    placeholder='Password'/>
                <SubmitButton title='Register'/>
            </View>
            </AppForm>

        </Screen>
    );
}
const styles = StyleSheet.create({
    logo: {
        marginTop: 50,
        marginBottom: 20,
        alignSelf: 'center'
    },
    screen: {
        padding: 20
    }
})
export default RegisterScreen;