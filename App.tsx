import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './components/home/home';



const App = () => {

  return (
    <SafeAreaView>
      <NavigationContainer >
        <Home/>
      </NavigationContainer>
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({

})

export default App;
