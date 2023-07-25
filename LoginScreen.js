import { Button, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput,Image } from 'react-native'
import ButtonView from './ButtonView'
import { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const LoginScreen = ({navigation}) => {
  const [user, setUsername] = useState("");
const [password, setPassWord] = useState();
  return (
    <View style={styles.container}>
      <Image style={{width:200,height:200,top:100}} 
      source={{
        uri:"https://scontent-hkg4-1.xx.fbcdn.net/v/t39.8562-6/109960336_274477960450922_1306319190754819753_n.png?_nc_cat=107&ccb=1-7&_nc_sid=6825c5&_nc_ohc=CstDt9ism-8AX9v7UDL&_nc_ht=scontent-hkg4-1.xx&oh=00_AfC0YWhKsFpqcQAOjr7y5RYgXelxA_Aa5CizGr5AJ-n0xA&oe=64BF3AF0"}}>

        </Image>

       <View style={{marginTop:100}}>
       <TextInput 
        style={styles.inPutText}
        onChangeText={user}
        placeholder='Số di động hoặc email'></TextInput>
        <TextInput 
        style={[styles.inPutText,{marginTop:10}]}
        onChangeText={user}
        
        placeholder='Mật khẩu'></TextInput>
        
       </View>
       <Pressable
       onPress={()=>{navigation.navigate("MainScreen")}}
        style={styles.button}><Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Đăng nhập</Text></Pressable>
      <Text style={{fontSize:15,marginTop:10}}>Bạn quên mật khẩu ư?</Text>
      <Pressable 
       onPress={()=>{navigation.navigate("Signin")}}
      style={[styles.button,{backgroundColor:"white",marginTop:100,borderColor:'#0066FF',borderWidth:1}]}><Text style={{color:'#0066FF',fontSize:15,fontWeight:'bold'}}>Tạo tài khoản mới</Text></Pressable>
      <Image style={{width:100,height:30,marginTop:20,backgroundColor:"red"}}
       source={{
        uri:'https://www.scoontv.com/wp-content/uploads/2021/10/Meta2.jpg'}}></Image>
    </View>

  )
}

export default LoginScreen

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