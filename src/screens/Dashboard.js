import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Trending from '../components/Trending';
import Products from '../components/Products';

const {width, height} = Dimensions.get('window');

const Dashboard = ({navgation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <View>
          <Text style={styles.textheader}>Hi, Jawad</Text>
          <Text
            style={{
              color: 'grey',
              paddingLeft: 10,
              fontSize: 15,
              paddingTop: 10,
            }}>
            What would you like to buy Today?
          </Text>
        </View>

        <View
          style={[{flexDirection: 'row', alignItems: 'center', marginTop: 15}]}>
          <View style={{flex: 0.5, flexDirection: 'row', marginLeft: 10}}>
            <TouchableOpacity>
              <Icon name="heart" size={40} color="#6ccbe9" />
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.1, flexDirection: 'row'}}>
            <TouchableOpacity>
              <Icon name="search" size={25} color="#6ccbe9" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.7,
              justifyContent: 'flex-start',
              marginVertical: 0,
              marginRight: 0,
            }}>
            <TextInput
              placeholder="Search Here"
              style={styles.searchBar}></TextInput>
          </View>
        </View>
      </View>

      <View style={styles.flatlist}>
        <Image
          style={{flex:1,width: null, height: null,resizeMode:'cover', borderRadius: 30}}
          source={require('../images/sale-banner-template-design-poster-600w-1299986017.jpg')}></Image>
      </View>

      <View style={styles.trending}>
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <Text
              style={{fontSize: 18, fontWeight: '700', paddingHorizontal: 10,marginTop:10}}>
              Trending
            </Text>
            

            <View style={{height:150,marginTop:10}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Trending imageUri={require('../images/strip_shirt.jpg')} name="Shirts"> </Trending>
                <Trending imageUri={require('../images/khaki_pant.jpg')} name="Pants"> </Trending>
                <Trending imageUri={require('../images/oftr3.jpg')} name="Jackets"> </Trending>
                <Trending imageUri={require('../images/oftr2.jpg')} name="Hoodies"> </Trending>
                <Trending imageUri={require('../images/bra.jpg')} name="Bra"> </Trending>
                <Trending imageUri={require('../images/mia.jpg')} name="Bachi"> </Trending>
              </ScrollView>

            </View>

            
          </View>
      </View>

      <View style={styles.products}>
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <Text
              style={{fontSize: 18, fontWeight: '700', paddingHorizontal: 10}}>
              Products
            </Text>

            <View style={{height:250,marginTop:5}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Products imageUri={require('../images/oftr1.jpg')} name="Red Hot Hoodie"> </Products>
                <Products imageUri={require('../images/oftr2.jpg')} name="Jacket Green"> </Products>
                <Products imageUri={require('../images/oftr3.jpg')} name="Blacked"> </Products>
              </ScrollView>

            </View>

            
          </View>

        {/* <Text>Products</Text>
        <TouchableOpacity>
          <Text>Hi, Jawad</Text>
        </TouchableOpacity>
        <View>
          <View>
            <View>
              <View></View>
            </View>
          </View>

          <View>
            <View>
              <View></View>
            </View>
          </View>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fafafa',
    borderColor: '#000000',
  },

  headercontainer: {
    width: '100%',
    height: height / 5,

    backgroundColor: '#fafafa',
  },
  textheader: {
    paddingTop: 10,
    paddingLeft: 10,
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  searchBar: {
    fontSize: 18,
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    paddingLeft: 10,
  },
  flatlist: {
    width: '100%',
    height: height / 4,
    backgroundColor: '#fafafa',
  },
  trending: {
    width: '100%',
    height: height / 4,
    backgroundColor: 'yellow',
  },
  products: {
    width: '100%',
    height: height / 3,
    backgroundColor: 'lime',
  },
  bottomtab: {
    flexGrow: 1,
    backgroundColor: '#6d64ff',
  },
});

export default Dashboard;
