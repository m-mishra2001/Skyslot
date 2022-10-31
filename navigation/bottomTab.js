import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SettingsScreen,PostScreen,ProfileScreen} from "./customNav";
import HomeScreen from "./customNav";
const Tab = createBottomTabNavigator();
const BottomTab=()=>{
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            headerShown:false
        }}
        >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
    )
}
export default BottomTab