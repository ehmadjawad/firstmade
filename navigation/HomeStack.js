import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AnotherScreen from '../src/screens/AnotherScreen'
import OtherScreen from '../src/screens/OtherScreen'

const Stack=createNativeStackNavigator()
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AnotherScreen" component={AnotherScreen}/>
            <Stack.Screen name="OtherScreen" component={OtherScreen}/>
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})
