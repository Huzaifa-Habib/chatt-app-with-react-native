import * as React from 'react';
import { useEffect, useContext } from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  View,

} from 'react-native';
import { NativeRouter, Routes, Route} from "react-router-native";
import Home from './screens/home/home';
import Signup from './screens/signup/signup';
import Login from './screens/login/login';
import ContextProvider, { GlobalContext } from './context/context';
import axios from 'axios';
// import ChatScreen from './screens/chat_screen/chat';


const App = () => {
  let { state, dispatch } = useContext(GlobalContext);
  console.log(state)
  const getProfile = async () => {
    try {
      let response = await axios.get(`${state?.baseUrl}/api/v1/profile`, {
        withCredentials: true
      })
      console.log("Profile: ", response);
      dispatch({
        type: 'USER_LOGIN',
        payload:response.data
      })
    } catch (error) {

      console.log("axios error: ", error);
      dispatch({
        type: 'USER_LOGOUT'
      })
    }
  }
  useEffect(() => {
    getProfile()
   
}, [])


  
  return (
      <SafeAreaView>
        <ContextProvider>
          {(state?.isLogin === true)?
        <NativeRouter>
            <Routes>
              <Route path='/' element = {<Home/>}/>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login/>}/>
            </Routes>
        </NativeRouter>
            :
            null
          }

          {(state?.isLogin === false)?
        <NativeRouter>
            <Routes>
              <Route path='/' element = {<Login/>}/>
              <Route path="/signup" element={<Signup />} />
            </Routes>
        </NativeRouter>
            :
            null
          }


          {(state?.isLogin === null)?
        <NativeRouter>
            <View style = {{
              width:"100%",
              height:"100%",
              justifyContent:"center",
              alignItems:"center",
              backgroundColor:"rgba(0, 0, 0, 0.302)",
              zIndex:2
            }}>
                <ActivityIndicator size={"large"} color = "dodgerblue"/>
            </View>
        </NativeRouter>
            :
            null
          }
          </ContextProvider>

      </SafeAreaView>


   
  );
};


export default App;
