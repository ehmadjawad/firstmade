import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
const AllianceScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewbox}>
        <View style={{marginBottom: 100}}>
          <Text style={{fontSize: 32,color:'#ffffff'}}>Alliance</Text>
        </View>
        <Text style={{fontSize: 32,color:'#ffffff',marginBottom: 20}}>Auburn, AL</Text>
        <Text style={{fontSize: 32,color:'#ffffff'}}>Columbus, GA</Text>
        <View style={{marginTop: 50}}>
          <TouchableOpacity style={{justifyContent:'center',alignItems:'center',fontSize:40}} onPress={() => Linking.openURL('https://web.facebook.com/?_rdc=1&_rdr')}>
            <Icon name="facebook-square" size={40} color="#ffffff" />
            <Text style={{fontWeight:'bold',fontSize:20,color:'#ffffff'}}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AllianceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6c97d7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewbox: {
    width: wp('84.5%'),
    height: hp('80%'),
    alignItems: 'center',
    justifyContent: 'center',
    color:'#ffffff'
  },
});
