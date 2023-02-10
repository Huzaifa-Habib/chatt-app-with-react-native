import * as React from 'react';
import { useState, useRef,useContext } from 'react';
import axios from "axios";
import { GlobalContext } from '../../context/context';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Linking,
  Image

} from 'react-native';
import { Form,FormItem } from 'react-native-form-component';
import { Link,useNavigate} from "react-router-native";
import Signup from '../signup/signup';


function Login ()  {
  const [isFocus, setIsFocus] = useState(false)
  const [isFocus1, setIsFocus1] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailInput = useRef();
  const passwordInput = useRef()
  const [error,setError] = useState(false)
  const [error1,setError1] = useState(false)
  const [errorTxt,setErrorTxt] = useState("")
  const [errorTxt1,setErrorTxt1] = useState("")
  const [errorTxt2,setErrorTxt2] = useState("")



  let navigate = useNavigate()
  let { state, dispatch } = useContext(GlobalContext);
  console.log(state)
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const logInHandler = async () =>{

    if (email === ""){
      setErrorTxt("Can't Leave Field Empty")
      setErrorTxt1("")
      setError(true)
    }

    else if(reg.test(email) === false ){
      setErrorTxt1("Email Is Not Valid")
      setError(true)
      setErrorTxt("")
    }
    else{
      setErrorTxt("")
      setErrorTxt1("")
      setError(false)

    }

    if (password === ""){
      setErrorTxt2("Can't Leave Field Empty")
      setError1(true)


    }

    else{
      setErrorTxt2("")
      setError1(false)

    }
  

    try {
      const response = await axios.post(`${state.baseUrl}/api/v1/login`, {
        email:email,
        password:password
      },{ withCredentials: true })
      console.log(response.data.message)
      emailInput.current.clear()
      passwordInput.current.clear()
      dispatch({
        type: 'USER_LOGIN',
        payload: null
      })
      navigate("/")


    } catch (error) {
      console.log(error)
              
        
    }


  }



    return(
        <SafeAreaView style={loginStyles.mainDiv}>
          <View style = {loginStyles.navBar}>
            <Text style = {loginStyles.logo}>Chat App</Text>
              <Text style = {loginStyles.link} onPress = {() => navigate("/signup")}>Sign Up</Text>



          </View>
     
            <View style={loginStyles.subDiv}>
              <Text style = {loginStyles.heading} >Login to continue</Text>
                <TextInput
                  style = {{
                    height: 60,
                    borderWidth: 2,
                    width:"100%",
                    color:"black",
                    borderRadius:5,
                    fontSize:18,
                    paddingLeft:10,
                    borderColor:error === true ? "red": isFocus1 === true ? "dodgerblue" :"#d1d5db",
                    marginTop:20

                  
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
                {(errorTxt !== "")? <Text>{errorTxt}</Text>:null}
                {(errorTxt1 !== "")? <Text>{errorTxt1}</Text>:null}

        
                <TextInput
                  style = {{
                    height: 60,
                    borderWidth: 2,
                    width:"100%",
                    color:"black",
                    borderRadius:5,
                    fontSize:18,
                    paddingLeft:10,
                    borderColor:error1 === true ? "red" : isFocus === true ? "dodgerblue" :"#d1d5db", 
                    marginTop:20

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
                {(errorTxt2 !== "")? <Text>{errorTxt2}</Text>:null}

                
              <Text onPress={logInHandler} style = {loginStyles.button}>Log In</Text>

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