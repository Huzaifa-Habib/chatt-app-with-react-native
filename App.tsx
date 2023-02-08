import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,

} from 'react-native';

import Home from './screens/home/home';
import Signup from './screens/signup/signup';
import Login from './screens/login/login';
import { GlobalContext } from './context/context';
import axios from 'axios';
const Stack = createNativeStackNavigator();
let baseUrl = "http://192.168.10.5:3000";

const App = () => {
  // let { state, dispatch } = useContext(GlobalContext);
  // useEffect(() => {
  //   const getProfile = async () => {

  //     try {
  //       let response = await axios.get(`${baseUrl}/api/v1/profile`, {
  //         withCredentials: true
  //       })
  //       console.log("Profile: ", response);
  //       dispatch({
  //         type: 'USER_LOGIN',
  //         payload:response.data
  //       })
  //     } catch (error) {
  //       dispatch({
  //         type: 'USER_LOGOUT'
  //       })
  //     }

  //   }
  //   getProfile();

  // }, [])


  
  return (
    <NavigationContainer>
      {/* {(state?.isisLogin === true)? */}
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
    {/* :
    null
} */}
  </NavigationContainer>
    
   
  );
};


export default App;
