import * as React from 'react';
import axios from "axios";
import { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Alert


} from 'react-native';
import { Form,FormItem } from 'react-native-form-component';

let baseUrl = "http://localhost:3000";




function Signup ({ navigation })  {

  const [isFocus, setIsFocus] = useState(false)
  const [isFocus1, setIsFocus1] = useState(false)
  const [isFocus2, setIsFocus2] = useState(false)
  const [isFocus3, setIsFocus3] = useState(false)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailInput = useRef();
  const passwordInput = useRef()
  const lastNameRef = useRef()
  const firstNameRef = useRef()
  const [firstNameEmptyError,setFirstNameEmptyError] = useState(false)
  const [lastNameEmptyError,setLastNameEmptyError] = useState(false)




  const signupHandler = async () => {
    if (firstName === "") {
      console.log("Error")
      setFirstNameEmptyError(true)
    }
    if (lastName === "") {
      setLastNameEmptyError(true)
    }

    try {
      const response = await axios.post(`${baseUrl}/api/v1/signup`, {
        firstName: firstName,
        lastName: lastName,
        email:email,
        password:password,
       })
       console.log(response)
       emailInput.current.clear()
       passwordInput.current.clear()
       firstNameRef.current.clear()
       lastNameRef.current.clear()
       navigation.navigate("Login")

 
       
     } catch (error) {
       console.log(error)


       
     }


  }


    return (     
     <SafeAreaView style={styles.mainDiv}>
      <View style = {styles.navBar}>
        <Text style = {styles.logo}>Chat App</Text>

        <Text style = {styles.link} onPress = {() => navigation.navigate("Login")}>Log In</Text>


      </View>
 
        <View style={styles.subDiv}>
          <Text style = {styles.heading}>Register Yourself</Text>
          <Form onButtonPress={signupHandler} buttonTextStyle = {{fontSize:20}} buttonText = "Register" buttonStyle = {{
            backgroundColor:"dodgerblue",
            marginTop:10,
            width:"50%",
            display:"flex",
            justifyContent:"center",
            alignSelf:"center",
            }}>
            
            

             
            
            <View style = {styles.nameSec}>
              <FormItem
              style = {{
                height: 60,
                borderWidth: 2,
                width:"48%",
                color:"black",
                marginTop:8,
                borderRadius:5,
                fontSize:18,
                paddingLeft:10,
                borderColor:firstNameEmptyError === true ? "red" : isFocus2 === true ? "dodgerblue" :"#d1d5db"
                
              }}
              label = "First Name"
              value={firstName}
              autoComplete="username-new" 
              floatingLabel = {true}
              onFocus = {() => setIsFocus2(true)}
              onBlur = {() =>{setIsFocus2(false)}}
              onChangeText={(text) => setFirstName(text)}
              autoCorrect
              labelStyle = {{ color:"#9ca3af" }}
              isRequired
              underneathTextStyle={{display:"none"}}
            />

            <FormItem
              style = {{
                height: 60,
                borderWidth: 2,
                width:"48%",
                color:"black",
                marginTop:8,
                borderRadius:5,
                fontSize:18,
                paddingLeft:10,
                borderColor:lastNameEmptyError === true ? "red" : isFocus3 === true ? "dodgerblue" :"#d1d5db",
                marginLeft:10

                
              }}
              label="Last name"
              isRequired
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              floatingLabel = {true}
              autoComplete="username-new" 
              onFocus = {() => setIsFocus3(true)}
              onBlur = {() =>{setIsFocus3(false)}}
              autoCapitalize = "none"
              labelStyle = {{ color:"#9ca3af" }}
            

          />

        </View>


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

  const styles = StyleSheet.create({
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
      borderBottomColor:"#3f3f3f3f",
      borderBottomWidth:4,
      paddingBottom:10,
  
    },

    nameSec: {
      flexDirection:"row",
      justifyContent: "space-between"

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
    

export default Signup