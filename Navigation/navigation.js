import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from "../Screens/loginScreen/login";
import ChatScreen from "../Screens/chatScreen/chatScreen";
const Stack = createStackNavigator();

const StackContainer=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}

export default StackContainer