import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountDetailsScreen from "../screens/AccountDetailsScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

const MessagesNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="AccountDetails" component={AccountDetailsScreen} 
    options={{headerShown: false}}/>
  </Stack.Navigator>
);

export default MessagesNavigator;