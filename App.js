import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import HomeScreen from './app/screens/HomeScreen'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AccountScreen from './app/screens/AccountScreen';
import navigationTheme from './app/navigation/navigationTheme'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import ListingsScreen from './app/screens/ListingsScreen';
import ButtonTags from './app/components/ButtonTags';
import Test from './app/screens/Test';
import Testcomp from './app/screens/Testcomp';

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
     <AppNavigator />
    </NavigationContainer>
  )
};
