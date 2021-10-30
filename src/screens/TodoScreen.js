import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import TodoItems from '../components/TodoItems';
import TodoAdd from '../components/TodoAdd';

const TodoScreen = ({route, navigation}) => {
  console.log(route)
  // const {text} = route.params;
  // console.log(text)
 

  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'buy phone', key: '2'},
    {text: 'go some where', key: '3'},
  ]);

// console.log(ali);
// const submitHandler =(text)=>{
//     setTodos((prevTodos) =>{
//         return[
//             {text:text, key:Math.random().toString()},
//         ...prevTodos]
//     }
//     )
// }
  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.TaskWrapper}>
        <Text style={styles.header}>Today's Task</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <TodoItems item={item} pressHandler={pressHandler} />
          )}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TodoAdd")}>
        <Icon name="plus" size={30} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    width: wp('90%'),
    height: hp('85%'),
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'EBEAED',
  },
  TaskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tasks: {
    backgroundColor: '#ffffff',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0080ff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 5,
  },
});
