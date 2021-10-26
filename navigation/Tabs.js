import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../src/screens/Dashboard";
import HomeStack from './HomeStack';


const Tab =createBottomTabNavigator();

const Tabs=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Dashboard} options={{ headerShown:false}} />
            <Tab.Screen name="HomeStack" component={HomeStack} options={{ headerShown:false}}/>
        </Tab.Navigator>
    );
}

export default Tabs;