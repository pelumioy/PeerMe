import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MessagesScreen from '../screens/MessagesScreen'
import MessagesNavigator from './MessagesNavigator';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" 
    component={FeedNavigator} 
    options={{
      tabBarIcon: ({color,size}) =>
      <MaterialCommunityIcons name='home' color={color} size={size} />
    }}/>
    <Tab.Screen name="Messages"
     component={MessagesNavigator}
     options={{
      tabBarIcon: ({color,size}) =>
      <MaterialCommunityIcons name='message' color={color} size={size} />
    }} />
    <Tab.Screen name="Account" 
    component={AccountNavigator} 
    options={{
      tabBarIcon: ({color,size}) =>
      <MaterialCommunityIcons name='account' color={color} size={size} />
    }}/>

  </Tab.Navigator>
)

export default AppNavigator;