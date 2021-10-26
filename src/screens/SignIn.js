import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  PixelRatio,
} from 'react-native';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.image}
          source={require('../images/pexels-eva-elijas-7661071.jpg')}></Image>
      </View>
      <View>
        <Text style={styles.header}>Welcome Back</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.text1}>Username</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={styles.text1}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input}></TextInput>

        <View>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Another')}>
        <Text
            style={{
              color: '#fff',
              justifyContent: 'center',
              alignSelf:'center',
              fontWeight:'bold',
              
            }}>
            Sign In
          </Text>

        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('Main')}>
          <Text
            style={styles.button1,{
              color: '#6d64ff',
              justifyContent: 'center',
              paddingTop: 20,
              alignSelf:'center',
              fontWeight:'bold',

            }}>
            New Here? <Text style={{fontSize:18}}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
      </View>
      {/* <View>
        <Button title="signup" color="#6d64ff" />
        <TouchableOpacity onPress={() => navigation.navigate('Another')}>
          <Text
            style={{
              color: '#c8c5df',
              justifyContent: 'center',
              paddingTop: 10,
            }}>
            Press here to go to Login screen
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fefefe',
    
  },
  imagecontainer:{
      width: '100%',
    justifyContent:'flex-start',
    borderRadius:5,
    backgroundColor: 'black',
    alignItems:'flex-start'
  },
  image: {
    width: '100%',
    height: 280,

  },
  header: {
    color: '#6d64ff',
    justifyContent: 'center',
    width: '100%',
    height:100,
    paddingTop:45,
    fontSize:30,
    fontWeight:'bold',
    fontFamily: 'Georgia',
    // paddingHorizontal:'20%'
  },
  form: {
    width: '60%',
    height: 400,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fefefe',
    paddingTop:10,
  },
  input: {
    width: 250,
    height: 50,
    borderColor: '#c8c5df',
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    fontSize:18,
  },
  text1: {
    color: '#6d64ff',
    paddingTop:15,
    alignSelf:'flex-start',paddingBottom:5,
  },
 
  btn: {
    width: 150,
    marginTop: 30,
    backgroundColor: "#6d64ff",
    padding: 15,
    borderRadius: 50,
    alignSelf:'center',

    // // color: '#ffffff',
    // borderColor: '#c8c5df',
    // // borderWidth: 1,
    // // alignItems: 'center',
    // width: 200,
    // justifyContent: 'center',
    // paddingVertical: 12,
    // paddingHorizontal: 22,
    // borderRadius: 30,
    // elevation: 1,
  },
  button1: {
    // paddingTop: 20,
    color: '#6d64ff',
    borderColor: '#c8c5df',
    borderWidth: 1,
    alignItems: 'center',
    width: 200,
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    elevation: 3,
   
    marginTop: 100,
  },
});

export default SignIn;
