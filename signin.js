import { Button, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput,Image,Switch } from 'react-native'
import ButtonView from './ButtonView'
import { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const signin = ({navigation}) => {

  const [user, setUsername] = useState("");
const [password, setPassWord] = useState();
const [Switch, setSwitch] = useState(true)
const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
     
        <Text style={{fontSize:30,fontWeight:'bold',right:10,top:100}}>Hãy đăng kí ở đây</Text>
       <View style={{marginTop:100}}>
       <TextInput 
        style={styles.inPutText}
        onChangeText={user}
        placeholder='Tên của bạn'></TextInput>
        
       <TextInput 
        style={styles.inPutText}
        onChangeText={user}
        placeholder='Số di động hoặc email'></TextInput>
        <TextInput 
        style={[styles.inPutText,{marginTop:10}]}
        onChangeText={user}
        
        placeholder='Mật khẩu'></TextInput>
        <View> 
            <Text style={{fontSize:15,marginTop:30}}>Bạn đã có tài khoản?</Text>
           
       </View>
        
       </View>
       <Pressable style={styles.button}><Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Đăng kí</Text></Pressable>
      <Pressable onPress={()=>{navigation.navigate("LoginScreen")}}><Text style={{fontSize:15,marginTop:100}}>Bạn đã có tài khoản?</Text></Pressable>
      
      <Image style={{width:100,height:50,marginTop:100,backgroundColor:"red"}}
       source={{
        uri:'https://www.scoontv.com/wp-content/uploads/2021/10/Meta2.jpg'}}></Image>
    </View>

  )
}

export default signin

const styles = StyleSheet.create({

  container:{flex:1,
   
    backgroundColor:"white",
    alignItems:"center",


  }
,
tilte:{
  fontStyle:'bold',
  fontSize:30,
  margin:50,
  color:"white",
  marginTop:50,
},
inPutText:{
  fontWeight:'bold',
  fontSize:15,
  paddingStart:30,
  width:Dimensions.get("window").width/100*80,
  height:70,
  borderWidth:1,
  
  borderColor:"#888888",
  padding:10,
  margin:12,
  borderRadius:10,
  marginTop:10,
  padding:10,
  color:"#888888"
 // backgroundColor:"white",

},
button:{
  fontSize:15,
  alignContent:'center',
  alignItems: 'center',
  justifyContent:'center',
  borderRadius:30,
  backgroundColor:"#0033CC",
  width:Dimensions.get("window").width/100*80,
  height:50,
}

})