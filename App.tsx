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

function Login ({navigation})  {
  return(
      <SafeAreaView style={loginStyles.mainDiv}>
   
          <View style={loginStyles.subDiv}>
            <TextInput
              style = {loginStyles.searchInput}
              autoComplete="email" 
              placeholder='Enter email'
              placeholderTextColor={"gray"}
              maxLength={20}
              keyboardType = "email-address"
            />

            <TextInput
              style = {loginStyles.searchInput}
              autoComplete="email" 
              placeholder='Enter password'
              placeholderTextColor={"gray"}
              maxLength={20}
              keyboardType = "visible-password"
              inputMode="email"
            />
            

                  
                   
          </View>

  
        
      </SafeAreaView>

  )
}


function Signup ({ navigation })  {
  return(
      <SafeAreaView>
   
          <View>
              <Text>This is Signup</Text>
          </View>
  
        
      </SafeAreaView>

  )
}

function Home ({navigation})  {
  return(
      <SafeAreaView style = {styles.mainDiv}>
          <ScrollView style = {styles.subDiv}>
              <View style = {styles.navBar}>
                  <Image
                      style = {styles.navLogo}
                      source={{
                      uri: 'https://img.icons8.com/color/1x/whatsapp.png',
                      }}

                  />
                  <TextInput
                   style = {styles.searchInput}
                   autoComplete='username' 
                   placeholder='Search...'
                   placeholderTextColor={"white"}
                   inputMode='text'
                   maxLength={20}/>
                   

              </View>
              <ScrollView style = {styles.userListDiv}>
                  <View style = {styles._user} >
                      <Image
                          style = {styles.profileImg}
                          source={{
                          uri: 'https://img.icons8.com/color/1x/user.png',
                          }}

                      />
                      <Text style = {styles.userName}>User Name</Text>
                      <Text style = {styles.lastMsg}>Some random text.... </Text>
                  </View>

                  <View style = {styles._user} >
                      <Image
                          style = {styles.profileImg}
                          source={{
                          uri: 'https://img.icons8.com/color/1x/user.png',
                          }}

                      />
                      <Text style = {styles.userName}>User Name</Text>
                      <Text style = {styles.lastMsg}>Some random text.... </Text>
                  </View>


              </ScrollView>
              <Button
                  title="Go to Details"
                  onPress={() => navigation.navigate("Signup")}
              />
          </ScrollView>
      </SafeAreaView>

  )
}



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

const styles = StyleSheet.create({
  mainDiv: {
      // paddingTop:(Platform.OS === "android")? StatusBar.currentHeight:0

      
  },

  subDiv: {
      height: "100%",

  },

  navBar: {
      backgroundColor:"#3f3f3f",
      display:"flex",
      flexDirection:"row",
      padding:10,
      
  },

  navLogo: {
      height:50,
      width:50,

  },
  userListDiv: {
      paddingTop:10

  },

  searchInput: {
      height: 40,
      borderWidth: 1,
      borderColor:"white",
      width:"80%",
      color:"white",
      paddingLeft:10,
      marginLeft:20,
      marginTop:8,
      borderRadius:10,
      fontSize:16,
  },

  _user:{
      marginTop:10,
      display:"flex",
      flexDirection:"row",
      marginBottom:10
  
  },



  profileImg: {
      width: 60,
      height: 60,
      borderRadius: 60,
      backgroundColor:"black",
      marginLeft:10
  },

  userName: {
      position:"relative",
      top:10,
      left:10,
      fontWeight:'900',
      fontSize:16,
      color:"black"


  },
  
  lastMsg: {
      position:"relative",
      top:28,
      right:70,
      fontWeight:'500',
      fontSize:14,
      color:"gray"


  }

  




  

})

const loginStyles = StyleSheet.create({
  mainDiv : {
    backgroundColor:"#E5E4E2",
    height:"100%"
  },

  subDiv:{
    backgroundColor:"white",
    width:"90%",
    display:"flex",
    justifyContent:"center",
    alignSelf:"center",
    marginTop:20,
    borderRadius:5,
    padding:10
  },

  searchInput:{
    height: 40,
    borderWidth: 1,
    borderColor:"black",
    width:"100%",
    color:"white",
    marginTop:8,
    borderRadius:10,
    fontSize:16,

  }
  



})
export default App;
