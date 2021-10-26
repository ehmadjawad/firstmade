import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const AnotherScreen = ({navigation})=> {
  return (
    <View style={styles.container}>
    
     <Text style={{color:'white'}}>Another Screen</Text>
     <TouchableOpacity
     style={{width:'30%', height:'3%', backgroundColor:'red', marginTop:20}}
     onPress={()=>navigation.navigate('MainScreen')}
     >
         <Text style={{marginHorizontal:10, alignSelf:'center'}}>Main screen</Text>
     </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:"100%", height:"100%", alignItems: 'center', justifyContent: 'center',backgroundColor:'#bfe4fa'

  },


})

export default AnotherScreen