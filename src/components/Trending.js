import React,{Component} from "react";
import { View,Text,StyleSheet,Image, TouchableOpacity } from "react-native";

class Trending extends Component{
    render(){
        return(
            <TouchableOpacity>
            <View style={{height:150,width:150,backgroundColor:'white',marginLeft:10,borderWidth:0.5,borderColor:'#dddddd'}}>
                  <View style={{flex: 4}}>
                    <Image style={{flex:1,height:null,width:null,resizeMode:'stretch' }}
                    source={this.props.imageUri}>

                    </Image>

                  </View>
                  <View style={{flex: 1,paddingLeft:10,paddingTop:5}}>
                    <Text>
                      {this.props.name}
                    </Text>
                  </View>
                </View>
                </TouchableOpacity>
        )
    }
}
export default Trending;

const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})