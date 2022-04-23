import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as Yup from 'yup'
import authApi from '../api/auth'
import AppText from '../components/AppText';
import {ErrorMessage, AppFormField, SubmitButton, AppForm} from '../components/forms/index'
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email('Email'),
    password: Yup.string().required().min(4).label('Password')
})
function LoginScreen(props) {
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
      const result = await authApi.login(email, password);
      if (!result.ok) return setLoginFailed(true);
      setLoginFailed(false);
      auth.logIn(result.data);
    };
    return (
        <Screen>
            <Image style={styles.logo} source={require('../assets/peerme.png')} />
            <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                >
                <ErrorMessage error="Invalid email and/or password" visible={loginFailed}/>
                <View style={styles.screen}>
                <AppFormField 
                    icon='email'
                    name='email'
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    placeholder='email or username'
                    />
                <AppFormField 
                    icon='lock'
                    name='password'
                    autoCorrect={false}
                    autoCapitalize='none'
                    secureTextEntry
                    textContentType='password'
                    placeholder='Password'/>
                <SubmitButton title='Login'/>
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
export default LoginScreen;