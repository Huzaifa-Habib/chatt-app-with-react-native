import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
  Image,
  Linking,
  TouchableHighlight,
  TextInput,
  ImageBackground,
  Button,


} from 'react-native';

import Home from './screens/home/home';
import Signup from './screens/signup/signup';
import Login from './screens/login/login';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  </NavigationContainer>
    
   
  );
};


export default App;
