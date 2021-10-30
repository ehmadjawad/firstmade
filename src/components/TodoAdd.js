import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'


const TodoAdd = ({route, navigation}) =>  {
    // const {itemm} = route.params;
    // const textt = 'jawad'
    const [text, setText]= useState('');
    const changeHandler=(val)=>{
        setText(val)
    }
    return (
        <View style={styles.body}>
            <TextInput onChangeText={changeHandler} style={styles.input} placeholder="Title"></TextInput>
            <TextInput style={styles.input} placeholder="Discription"></TextInput>
            {/* {console.log(itemm)} */}
            <Button title='Add' borderRadius='10' onPress={()=>{navigation.navigate('Todo')}}/>
        </View>
    )
    

}
console.log(text);
export default TodoAdd

const styles = StyleSheet.create({
    body:{
        flex:1,
         alignItems:'center',
         padding:10,
    },
    input:{
        width:'100%',
        margin:10,
        backgroundColor:"white",
        textAlign:'left',

    }
})
