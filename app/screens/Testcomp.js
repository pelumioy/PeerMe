import React, { useState } from 'react';
import { Switch, Text } from 'react-native';
import AppPicker from '../components/AppPicker';
import AppTextInput from '../components/AppTextInput';
import ButtonTags from '../components/ButtonTags';
import Screen from '../components/Screen'
import Test from './Test';

function Testcomp(props) {
    return (
        <Screen>
            <Test mobilee='7017364614'/>
        </Screen>
    );
}

export default Testcomp;

     // "favicon": "./assets/favicon.png"
