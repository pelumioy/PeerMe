import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
} from 'react-native';
import colors from '../config/colors';

const App = ({mobilee}) => {
  const [mobileNumber, setMobileNumber] = useState(mobilee);
  const [whatsAppMsg, setWhatsAppMsg] = useState(
    'Hey there! Are you available to tutor me?',
  );

  const initiateWhatsApp = () => {
    if (mobileNumber.length != 10) {
      alert('Please WhatsApp number without the zero at the beginning');
      return;
    }
    let url =
      'whatsapp://send?text=' + 
       whatsAppMsg +
      '&phone=234' + mobileNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };

  return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={{flex: 1}} behavior="position">
      <View style={styles.container}>
        <Text style={styles.titleTextsmalll}>
          Phone No.
        </Text>
        <Text style={{color: "#fff"}}
          value={mobileNumber}
        >{mobilee}</Text>
        <Text style={styles.titleTextsmall}>
          Message Me:
        </Text>
        <TextInput
          value={whatsAppMsg}
          onChangeText={
            (whatsAppMsg) => setWhatsAppMsg(whatsAppMsg)
          }
          placeholder={'WhatsApp Message'}
          style={styles.textInput}
          
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={initiateWhatsApp}>
          <Text style={styles.buttonTextStyle}>
            Send WhatsApp Message
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmalll: {
    marginVertical: 8,
    fontSize: 16,
    color: '#fff'
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: "60%",
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
    borderRadius: 7,
    backgroundColor: colors.secondary,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    color: colors.medium,
    paddingHorizontal: 10,
  },
});