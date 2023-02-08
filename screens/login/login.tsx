import * as React from 'react';
import { useState, useRef } from 'react';
import axios from "axios";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Alert,

} from 'react-native';
import { Form,FormItem } from 'react-native-form-component';

let baseUrl = "http://192.168.10.5:3000";




function Login ({navigation})  {
  const [isFocus, setIsFocus] = useState(false)
  const [isFocus1, setIsFocus1] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailInput = useRef();
  const passwordInput = useRef()





  const logInHandler = async () =>{
    try {
      const response = await axios.post(`${baseUrl}/api/v1/login`, {
        email:email,
        password:password
      },{ withCredentials: true })
      console.log(response.data.message)
      navigation.navigate("Home")
      emailInput.current.clear()
      passwordInput.current.clear()

    } catch (error:any) {
        Alert.alert(error.message)
        
        
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
              <Form onButtonPress={logInHandler} buttonTextStyle = {{fontSize:20}} buttonText = "Log In" buttonStyle = {{
                backgroundColor:"dodgerblue",
                marginTop:8,
                width:"60%",
                display:"flex",
                justifyContent:"center",
                alignSelf:"center",
              }}>

                <FormItem
                  style = {{
                    height: 60,
                    borderWidth: 2,
                    width:"100%",
                    color:"black",
                    borderRadius:5,
                    fontSize:18,
                    paddingLeft:10,
                    borderColor:isFocus1 === false ? "#d1d5db" : "dodgerblue",
                  
                  }}
                  label="Enter Email"
                  isRequired
                  value={email}
                  onChangeText={(email) => setEmail(email)}
                  floatingLabel = {true}
                  autoComplete="email" 
                  keyboardType = "email-address"
                  onFocus = {() => setIsFocus1(true)}
                  onBlur = {() =>{setIsFocus1(false)}}
                  autoCapitalize = "none"
                  labelStyle = {{ color:"#9ca3af" }}
                  ref = {emailInput}
              
                />
        
                <FormItem
                  style = {{
                    height: 60,
                    borderWidth: 2,
                    width:"100%",
                    color:"black",
                    borderRadius:5,
                    fontSize:18,
                    paddingLeft:10,
                    borderColor:isFocus === false ? "#d1d5db":"dodgerblue",  
                  }}
                  label="Enter Password"
                  value={password}
                  isRequired
                  autoComplete="password-new" 
                  maxLength={20}
                  secureTextEntry = {true}
                  onFocus = {() => setIsFocus(true)}
                  onBlur = {() =>{setIsFocus(false)}}
                  onChangeText={(text) => setPassword(text)}
                  floatingLabel = {true}
                  labelStyle = {{ color:"#9ca3af" }}
                  ref = {passwordInput}
                />
              </Form>
      
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