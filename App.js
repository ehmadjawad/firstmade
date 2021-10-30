import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MainScreen from './src/screens/MainScreen';
import AnotherScreen from './src/screens/AnotherScreen';
import SignIn from './src/screens/SignIn';
import Dashboard from './src/screens/Dashboard';
import Tabs from './navigation/Tabs';
import AllianceScreen from './src/screens/AllianceScreen';
import TodoScreen from './src/screens/TodoScreen';
import TodoAdd from './src/components/TodoAdd';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen"
                       screenOptions={{
                         headerStyle: {
                           backgroundColor: '#f4511e',
                         },
                         headerTintColor: '#fff',
                         headerTitleStyle: {
                           fontWeight: 'bold',
                         },
                         headerTitleAlign:'center',
                         animation:'slide_from_right'

                       }}
      >
        <Stack.Screen name="Todo" component={TodoScreen} options={{ headerShown:false}} />
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown:false}} />
        <Stack.Screen name="TodoAdd" component={TodoAdd} options={{ headerShown:false}} />
      </Stack.Navigator>
      {/* <NavigationContainer>
      <Tabs/>
      </NavigationContainer> */}
    </NavigationContainer>
    
  );
}