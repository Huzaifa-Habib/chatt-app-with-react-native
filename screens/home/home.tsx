import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,


} from 'react-native';


function Home ()  {
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
  
                </View>
                <ScrollView style = {styles.userListDiv}>
                    <TextInput
                        style = {styles.searchInput}
                        autoComplete='username' 
                        placeholder='Search...'
                        placeholderTextColor={"gray"}
                        inputMode='text'
                        maxLength={20}/>
                    <View style = {styles._user1} >
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
        height: 50,
        borderWidth: 3,
        borderColor:"dodgerblue",
        width:"95%",
        color:"black",
        paddingLeft:10,
        marginLeft:5,
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

    _user1:{
        marginTop:40,
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

export default Home
  