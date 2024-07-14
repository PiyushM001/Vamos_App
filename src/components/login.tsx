import React, { Component ,useState} from 'react'

import { Text, StyleSheet, View, Image,TextInput,TouchableOpacity, Pressable } from 'react-native'
import logo from '../../images/logo.png'
import maillogo from '../../images/mailicon3.png'
import passwordlogo from '../../images/passwordicon.png'
import eyeopen from '../../images/eyeopen.png'
import eyeclose from '../../images/eyeclose.png'


const Login = ({navigation})=> {

  
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

    return (
      <View style={styles.fulldiv}>

        <View  style={styles.logodiv} >
        <Image style={styles.logo} resizeMode="contain" source={logo} />
        </View>


        <View style={{justifyContent:'center',alignItems:'center'}}>


        <View style={{width:'70%',flexDirection:'row',marginTop:'-20%'}}>
        <View style={{ height: 1,width:"30%" , backgroundColor: '#545454', marginVertical: 10 }} />
           <View style={{width:'50%',justifyContent:'center',alignItems:'center'}}><Text style={styles.text1} >Login or SignUp</Text></View> 
            <View style={{ height: 1,width:'30%' , backgroundColor: '#545454', marginVertical: 10 }} />

        </View>
       
       

       



        <View style={{ paddingTop: 40,paddingBottom:25,width:'80%'}}>

        <View style={{ flexDirection: 'row', alignItems: 'center',borderRadius:10 , borderColor: '#C0C0C0', borderWidth: 1}}>
        <Image style={styles.maillogo} resizeMode="contain" source={maillogo} />

      <TextInput
        placeholder="Email ID"
        placeholderTextColor="#000000" 
     
        value={email}
        onChangeText={setEmail}
        style={{ flex: 1, height: 50,color:'#000000', paddingHorizontal: 10,}}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center',borderRadius:10 , borderColor: '#C0C0C0', borderWidth: 1,marginTop:25 }}>
      <Image style={styles.passlogo} resizeMode="contain" source={passwordlogo} />

        <TextInput
          placeholder="Password"
          value={password}
          placeholderTextColor="#000000" 

          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
          style={{ flex: 1, height: 50,color:'#000000', paddingHorizontal: 10,}}
          autoCapitalize="none"
        />
        <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={{width:'12%' }}>
        
<Image style={styles.eyelogo} resizeMode="contain" source={isPasswordVisible ? eyeopen : eyeclose} />    

        </Pressable>
      </View>
    </View>



<Pressable  onPress={() =>
        navigation.navigate('map')
      }
       style={{backgroundColor:'#414040',width:'80%',height:50,borderRadius:10  ,alignItems:'center',justifyContent:'center' }} > 
    <Text style={{color:'#FFFFFF',fontSize:15}}>Continue</Text></Pressable>

  

    {/* <View style={{width:'80%',height:'20%', justifyContent:'center',alignItems:'center', flexDirection:'row'}}>
        <View style={{ height: 1,width:"40%" , backgroundColor: '#545454', marginVertical: 10 }} />
           <View style={{width:'15%',justifyContent:'center',alignItems:'center'}}><Text style={styles.text1} > or </Text></View> 
            <View style={{ height: 1,width:'40%' , backgroundColor: '#545454', marginVertical: 10 }} />

        </View> */}


        </View>



      </View>
    )
  }


const styles = StyleSheet.create({
    text1:{
color:'#545454'
    },
    logo:{
        height:100,
        width:'100%',
      },
      maillogo:{
        height:15,
        width:'15%',
        color:'red'
      },
      passlogo:{
        height:20,
        width:'15%',
        color:'red'
      },
      eyelogo:{
        height:50,
        width:'55%',
        color:'red'
      },
    fulldiv:{
        backgroundColor:"#FFFFFF",
        width:'100%',
        height:'100%',

    },
    logodiv:{
        width:'100%',
        height:'40%',
        alignItems:'center',
        justifyContent:'center'
    }
})
export default Login;