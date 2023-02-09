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
import { Link,useNavigate} from "react-router-native";


let baseUrl = "http://localhost:3000";




function Signup ()  {

  const [isFocus, setIsFocus] = useState(false)
  const [isFocus1, setIsFocus1] = useState(false)
  const [isFocus2, setIsFocus2] = useState(false)
  const [isFocus3, setIsFocus3] = useState(false)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailInput = useRef();
  const passwordInput= useRef()
  const lastNameRef= useRef()
  const firstNameRef = useRef()
  const [firstNameEmptyError,setFirstNameEmptyError] = useState("")
  const [lastNameEmptyError,setLastNameEmptyError] = useState("")
  const [errorTxt,setErrorTxt] = useState("")
  const [errorTxt1,setErrorTxt1] = useState("")
  const [errorTxt2,setErrorTxt2] = useState("")
  const [emailErr,setEmailErr] = useState(false)
  const [passErr,setPassErr] = useState(false)
  const [firstErr,setFirstErr] = useState(false)
  const [lastErr,setLastErr] = useState(false)


  let navigate = useNavigate()
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;







  const signupHandler = async () => {
    if (firstName === "") {
      console.log("Error")
      setFirstNameEmptyError("*Required")
      setFirstErr(true)
    }

    else{
      setFirstNameEmptyError("")
      setFirstErr(false)
    }

    if (lastName === "") {
      setLastNameEmptyError("*Required")
      setLastErr(true)
    }

    else{
      setLastNameEmptyError("")
      setLastErr(false)


    }

    if (email === ""){
      setErrorTxt("*Required")
      setErrorTxt1("")
      setEmailErr(true)
    }

    else if(reg.test(email) === false ){
      setErrorTxt1("Email Is Not Valid")
      setErrorTxt("")
      setEmailErr(true)

    }
    else{
      setErrorTxt("")
      setErrorTxt1("")
      setEmailErr(false)

    }

    if (password === ""){
      setErrorTxt2("*Required")
      setPassErr(true)

    }

    else{
      setErrorTxt2("")
      setPassErr(false)

    }
  

    try {
      const response = await axios.post(`${baseUrl}/api/v1/signup`, {
        firstName: firstName,
        lastName: lastName,
        email:email,
        password:password,
       })
       console.log(response)
       navigate("/")
       emailInput.current.clear()
       passwordInput.current.clear()
       firstNameRef.current.clear()
       lastNameRef.current.clear()
       
       
     } catch (error) {
       Alert.alert(`${error.response.data.message || "SignUp Failed!"}`);        
       
     }


  }


    return (     
     <SafeAreaView style={styles.mainDiv}>
      <View style = {styles.navBar}>
        <Text style = {styles.logo}>Chat App</Text>
        <Link to={"/login"} underlayColor = "transparent" style = {{marginLeft:"auto"}}>
          <Text style = {styles.link} onPress = {() =>navigate("/login")}>Log In</Text>
        </Link>


      </View>
 
        <View style={styles.subDiv}>
          <Text style = {styles.heading}>Register Yourself</Text>
      
            <View style = {styles.nameSec}>
              <View>
                {(firstNameEmptyError !== "")? <Text style = {{color:"red", position:"absolute",top:-12}}>{firstNameEmptyError}</Text>:null}
              </View>

              <TextInput
              style = {{
                height: 60,
                borderWidth: 2,
                width:"48%",
                color:"black",
                marginTop:8,
                borderRadius:5,
                fontSize:18,
                paddingLeft:10,
                borderColor:firstErr === true ? "red" : isFocus2 === true ? "dodgerblue" :"#d1d5db"
                
              }}
              placeholder= "First Name"
              value={firstName}
              autoComplete="username-new" 
              onFocus = {() => setIsFocus2(true)}
              onBlur = {() =>{setIsFocus2(false)}}
              onChangeText={(text) => setFirstName(text)}
              autoCorrect
            />
            <View>
              {(lastNameEmptyError !== "")? <Text style = {{color:"red", position:"absolute",top:-12,left:10}}>{lastNameEmptyError}</Text>:null}
            </View>

            <TextInput
              style = {{
                height: 60,
                borderWidth: 2,
                width:"48%",
                color:"black",
                marginTop:8,
                borderRadius:5,
                fontSize:18,
                paddingLeft:10,
                borderColor:lastErr=== true ? "red" : isFocus3 === true ? "dodgerblue" :"#d1d5db",
                marginLeft:10

                
              }}
              placeholder = {"Last Name"}
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              autoComplete="username-new" 
              onFocus = {() => setIsFocus3(true)}
              onBlur = {() =>{setIsFocus3(false)}}
              autoCapitalize = "none"
            

          />

        </View>
        




          <TextInput
            style = {{
              height: 60,
              borderWidth: 2,
              width:"100%",
              color:"black",
              borderRadius:5,
              fontSize:18,
              paddingLeft:10,
              borderColor:emailErr === true?"red":isFocus1 === false ? "#d1d5db" : "dodgerblue",
              marginTop:10 

            }}
            placeholder="Enter Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
            autoComplete="email" 
            keyboardType = "email-address"
            onFocus = {() => setIsFocus1(true)}
            onBlur = {() =>{setIsFocus1(false)}}
            autoCapitalize = "none"
            ref = {emailInput}
            
          />
          {(errorTxt !== "")? <Text style = {{color:"red"}}>{errorTxt}</Text>:null}
          {(errorTxt1 !== "")? <Text style = {{color:"red"}}>{errorTxt1}</Text>:null}
     

          <TextInput
            style = {{
              height: 60,
              borderWidth: 2,
              width:"100%",
              color:"black",
              borderRadius:5,
              fontSize:18,
              paddingLeft:10,
              borderColor:passErr === true ? "red": isFocus === false ? "#d1d5db":"dodgerblue", 
              marginTop:10 
          }}
            placeholder="Enter Password"
            value={password}
            autoComplete="password-new" 
            maxLength={20}
            secureTextEntry = {true}
            onFocus = {() => setIsFocus(true)}
            onBlur = {() =>{setIsFocus(false)}}
            onChangeText={(text) => setPassword(text)}
            ref = {passwordInput}
          />                     
          {(errorTxt2 !== "")? <Text style = {{color:"red"}} >{errorTxt2}</Text>:null}
          <Text onPress={signupHandler} style = {styles.button}>Register</Text>

         
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
      justifyContent: "space-between",
      marginTop:5,


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