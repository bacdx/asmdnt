import { StatusBar } from 'expo-status-bar';
import { Dimensions, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { Pressable } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';
import { ShareDialog } from 'react-native-fbsdk-next';
import Icon from 'react-native-vector-icons/FontAwesome';


const data = [
  { id:0,
    name: "Trần Xuân Bắc",
    avatar: "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/251576262_1178306642661726_8623336022452450997_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ynyqM8NTx18AX-yzr4j&_nc_ht=scontent-hkg4-1.xx&oh=00_AfCqLwzC6j4xkWnCthfiwDtNdbc7ObHcqlr62KjcOOiT1Q&oe=64BEFF8A",
    content: "Tối lớp tham gia zoom để tìm hiểu thêm về API dùng cho lập trình ứng dụng client - server nhé Thời gian: 21/7/2023 Thời gian: 20h30 Địa điểm: Tại phòng họp ZOOM https://us02web.zoom.us/j/5071725482 Link đăng ký: https://forms.gle/C9ZyguP46Q9fabWj8 Đây là nội dung rất cần thiết nên mọi người  tranh thủ thời gian vào tham gia nhé.",
    img: ""
  },
  { id:1,
    name: "Trần Xuân Bắc",
    avatar: "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/333122428_1264296694497580_5913675410864471458_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VAq3qGY-tz0AX_zple_&_nc_ht=scontent-hkg4-1.xx&oh=00_AfDcr-FTfg0W0W2XK5tT0fsH1EfDA4ZSL27070atch3Dpw&oe=64C049E2",
    content: "Tối lớp tham gia zoom ",
    img: "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/361607482_815451036876573_2594022212816894313_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=bu5ZfMFcCjoAX9msnfn&_nc_ht=scontent-hkg4-1.xx&oh=00_AfAelmISz01k7n09jZQSkJPXJ_9fizdScLemAtGwEX__eg&oe=64BFF7F3"
  },
  { id:2,
    name: "Trần Xuân Bắc",
    avatar: "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/251576262_1178306642661726_8623336022452450997_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ynyqM8NTx18AX-yzr4j&_nc_ht=scontent-hkg4-1.xx&oh=00_AfCqLwzC6j4xkWnCthfiwDtNdbc7ObHcqlr62KjcOOiT1Q&oe=64BEFF8A",
    content: "Tối lớp tham gia zoom ",
    img: "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/358149684_1098728504418655_8632894669039017687_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=wwwPUpGDBbwAX-pFQHP&_nc_ht=scontent-hkg4-1.xx&oh=00_AfDqL0JKpT5irU656O6VJnz1FOY78ZfupPiVdsBiGGzBpw&oe=64C082D5"
  },
  { id:3,
    name: "Thu Ngọc",
    avatar: "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/350938409_1012243556823630_2908991620860545882_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9KMyWce9gdEAX_KKHY_&_nc_ht=scontent-hkg4-1.xx&oh=00_AfDWRk6GBSyU6qhnL1p0EKYLLKSz_z57X1L8fEZBmFRFyA&oe=64C00F36",
    content: "Tối lớp tham gia zoom ",
    img: "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/281465200_4929055163890799_743705125702895909_n.png?stp=dst-png_p851x315&_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=AmEW0WmStwEAX8WM1dz&_nc_ht=scontent-hkg4-1.xx&oh=00_AfD2m2QfN2Ji3tSKF-Km5bBF8LWvFDIl1QOzYUb5yvtB4A&oe=64BF5A21"
  }
]

export default function MainScreen() {
  const [stateModal, setStateModal] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image style={styles.avata} source={{
          uri: 'https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/251576262_1178306642661726_8623336022452450997_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ynyqM8NTx18AX-yzr4j&_nc_ht=scontent-hkg4-1.xx&oh=00_AfCqLwzC6j4xkWnCthfiwDtNdbc7ObHcqlr62KjcOOiT1Q&oe=64BEFF8A'
        }}></Image>
        <Pressable onPress={()=>setStateModal(!stateModal)}>
          <View style={styles.inPutText}><Text>Bạn đang nghĩ gì</Text></View>
        </Pressable>
      </View>


      {/* <View style={styles.status}>
        <View style={styles.header}>
          <Image style={styles.avata} source={{
            uri: 'https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/251576262_1178306642661726_8623336022452450997_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ynyqM8NTx18AX-yzr4j&_nc_ht=scontent-hkg4-1.xx&oh=00_AfCqLwzC6j4xkWnCthfiwDtNdbc7ObHcqlr62KjcOOiT1Q&oe=64BEFF8A'
          }}></Image>

          <Text style={styles.title}>Trần Xuân Bắc</Text>
        </View>

        <View style={styles.content}><Text style={styles.text}>aaaaaaaaaaaaaa</Text>
          <Image style={styles.img}
            source={{
              uri: "https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/360136280_650595120435632_8574766153545771758_n.jpg?stp=dst-jpg_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=0GHJSfONu40AX857g90&_nc_ht=scontent-hkg4-2.xx&oh=00_AfDY-b8jDNn-MbNC8P0yIFRyQM3kAhOGsWGu1mf3rs5VgA&oe=64BF54AE"
            }}></Image>
               <View style={styles.footer}>
         <View style={styles.itemIcon}>
          <Icon  name='thumbs-up' size={30} ></Icon>
         <Text style={styles.text}>Like</Text>
         </View>
         <View style={styles.itemIcon}>
          <Icon  name='send-o' size={30} ></Icon>
         <Text style={styles.text}>Send</Text>
         </View>
        </View>
        </View>
     

      </View> */}
    


      <View>
        <FlatList data={data}
        renderItem={({item})=>
          <View style={styles.status}>
          <View style={styles.header}>
            <Image style={styles.avata} source={{
              uri: item.avatar,
            }}></Image>
  
            <Text style={styles.title}>{item.name}</Text>
          </View>
  
          <View style={styles.content}><Text style={styles.text}>{item.content}</Text>
            <Image style={[styles.img,{ height: 200 }]}
              source={{
                uri: item.img
              }}></Image>
          </View>
          <View style={styles.footer}>
           <View style={styles.itemIcon}>
            <Icon  name='thumbs-up' size={30} ></Icon>
           <Text style={styles.text}>Like</Text>
           </View>
           <View style={styles.itemIcon}>
            <Icon  name='send-o' size={30} ></Icon>
           <Text style={styles.text}>Send</Text>
           </View>
          </View>
  
        </View>
        }
        keyExtractor={item => item.id}>
      
        </FlatList>
      </View>
      <Modal style={styles.modal}
        animationType="slide"
      visible={stateModal}>
      <View style={styles.header}>
            <Pressable onPress={()=>{setStateModal(!stateModal)}}>
              <Icon name='arrow-left' size={30}></Icon></Pressable>
  
            <Text style={styles.title}>Tạo Bài viết</Text>
           <Pressable style={styles.button}>
            <Text style={[styles.text,{color:"white",fontSize:20,fontWeight:'bold'}]}>Đăng</Text>
           </Pressable>
          </View>
      <View style={styles.header}>
            <Image style={styles.avata} source={{
              uri: 'https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/251576262_1178306642661726_8623336022452450997_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ynyqM8NTx18AX-yzr4j&_nc_ht=scontent-hkg4-1.xx&oh=00_AfCqLwzC6j4xkWnCthfiwDtNdbc7ObHcqlr62KjcOOiT1Q&oe=64BEFF8A'
            }}></Image>
  
            <Text style={styles.title}>Tran Xuan Bac</Text>
           
          </View>
          <TextInput style={{fontSize:20,color:"black"}}
            placeholder='Bạn đang nghĩ gì ?'></TextInput>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontStyle: 'italic',
    fontSize: 40,
    flex: 1,
    backgroundColor: "#DDDDDD",
    alignItems: 'center',

    flexDirection: "column"
    //alignItems and justifyContent sẽ căn theo flexDirection


  },
  button: {
    right:10,
    justifyContent: 'center',
    alignItems: 'center',
    height:60,
    alignItems: 'center',
    minWidth: 100,
    backgroundColor: "#2196F3",
    padding: 10,
    margin: 20,
    borderRadius: 10,
   

  },
  nav: {
    backgroundColor: "#3366CC",
    flexDirection: 'row',
    alignItems: 'center',
    top: 0,
    borderBottomWidth: 1,
    width: Dimensions.get('window').width,
    height: 80
  }
  , avata: {
    margin: 10,
    width: 50,
    height: 50,
    borderRadius: 90,
  },
  inPutText: {
    backgroundColor: "white",
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    paddingStart: 30,
    width: Dimensions.get("window").width / 100 * 60,
    height: 40,
    borderWidth: 1,
    borderColor: "#888888",
    padding: 10,
    margin: 12,
    borderRadius: 90,
    marginTop: 10,
    padding: 10,
    color: "#888888"
    // backgroundColor:"white",

  },
  header: {
    maxHeight:100,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: 'row',
    marginTop: 2,
    height: 60,
    width: Dimensions.get('window').width,
  },
  content: {
    backgroundColor: "white",
    marginTop: 2,
    width: Dimensions.get('window').width,
    
  },
  status: {

    alignItems: "center",
    marginTop: 2,
    width: Dimensions.get('window').width,
  },

  title: {
   
    fontWeight: "bold",
    fontSize: 20
  },
  img: {
    borderBottomWidth: 1,
  
    width: Dimensions.get('window').width,
  },
  text: {
    marginLeft: 10,
    fontSize: 16
  },
  footer:{
    
    backgroundColor: "white",
      alignItems: "center",
      flexDirection: 'row',
      marginTop: 2,
      height: 60,
      width: Dimensions.get('window').width,
  },
  itemIcon:{
    alignItems:'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width/2,
    flexDirection: 'row',
  },
  modal:{
    backgroundColor:"white",
    width:"100",
    height:"100",
    borderRadius:90,
    borderWidth:1,
    borderBottomColor:"black"
  }
});

const imagesStyle = StyleSheet.create({
  
  width: 100, height: 70,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#2196F3'
});

