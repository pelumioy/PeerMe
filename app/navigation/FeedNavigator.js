import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import AccountDetailsScreen from "../screens/AccountDetailsScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
    <Stack.Screen name="Tutors" component={ListingsScreen} />
    <Stack.Screen name="AccountDetails" component={AccountDetailsScreen} 
    options={{headerShown: false}}/>
  </Stack.Navigator>
);

export default FeedNavigator;
