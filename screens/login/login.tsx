import * as React from 'react';
import { useState } from 'react';
import axios from "axios";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,

} from 'react-native';
let baseUrl = "http://localhost:3000";



function Login ({navigation})  {
  const [isFocus, setIsFocus] = useState(false)
  const [isFocus1, setIsFocus1] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  const logInHandler = async () =>{
    try {
     const response = await axios.post(`${baseUrl}/api/v1/login`, {
        email:email,
        password:password
      },{ withCredentials: true })

      console.log(response)


      
    } catch (error) {
      console.log(error)
      
    }


  }



    return(
        <SafeAreaView style={loginStyles.mainDiv}>
          <View style = {loginStyles.navBar}>
            <Text style = {loginStyles.logo}>Chat App</Text>

            <Text style = {loginStyles.link} onPress = {() => navigation.navigate("Signup")}>Sign Up</Text>


          </View>
     
            <View style={loginStyles.subDiv}>
              <Text style = {loginStyles.heading}>Login to continue</Text>

              <TextInput
                style = {{
                  height: 60,
                  borderWidth: 2,
                  width:"100%",
                  color:"black",
                  marginTop:8,
                  borderRadius:5,
                  fontSize:18,
                  paddingLeft:10,
                  borderColor:isFocus1 === false ? "#d1d5db" : "dodgerblue",
                  
                }}
                autoComplete="email" 
                placeholder='Enter email'
                placeholderTextColor={"#9ca3af"}
                keyboardType = "email-address"
                onFocus = {() => setIsFocus1(true)}
                onBlur = {() =>{setIsFocus1(false)}}
                autoCapitalize = "none"
                onChangeText={(text) => setEmail(text)}

              />
  
              <TextInput
                style = {{
                  height: 60,
                  borderWidth: 2,
                  width:"100%",
                  color:"black",
                  marginTop:15,
                  borderRadius:5,
                  fontSize:18,
                  paddingLeft:10,
                  borderColor:isFocus === false ? "#d1d5db":"dodgerblue",

                  
                  
              }}
                autoComplete="password" 
                placeholder='Enter password'
                placeholderTextColor={"#9ca3af"}
                maxLength={20}
                secureTextEntry = {true}
                onFocus = {() => setIsFocus(true)}
                onBlur = {() =>{setIsFocus(false)}}
                onChangeText={(text) => setPassword(text)}

                

                
                
              />



         

            <TouchableHighlight>
               <Text style = {loginStyles.button}onPress={logInHandler}>Log In</Text>
            </TouchableHighlight>
              
  
                    
                     
            </View>

  
    
          
        </SafeAreaView>
  
    )
  }
const loginStyles = StyleSheet.create({
  mainDiv : {
    backgroundColor:"#E5E4E2",
    height:"100%"
  },

  navBar : {
    backgroundColor:"dodgerblue",
    padding:15,
    flexDirection:"row"
  },

  logo: {
    fontSize:20,
    fontWeight:"bold",
    color:"white",
  },

  link : {
    marginLeft:"auto",
    fontSize:16,
    fontWeight:400,
    color:"white",
    paddingTop:4,


  },

  subDiv:{
    backgroundColor:"white",
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignSelf:"center",
    marginTop:40,
    borderRadius:5,
    padding:10,
  
  },

  heading: {
    fontSize:30,
    fontWeight:'bold',
    color:"#3f3f3f",
    textAlign:"center",
    marginBottom:10,

  },

  button: {
    backgroundColor:"dodgerblue",
    width:"50%",
    textAlign:"center",
    justifyContent:"center",
    alignSelf:"center",
    color:"white",
    padding:8,
    fontSize:18,
    fontWeight:'bold',
    borderRadius:5,
    letterSpacing:.8,
    marginTop:20,
    marginBottom:15,




  }







})
  
export default Login;