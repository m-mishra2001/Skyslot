import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Home from "../screens/Home";
import Profile from "../screens/profile";
import Settings from "../screens/settings";
import Post from "../screens/post";
const Stack=createNativeStackNavigator();
const HomeScreen=()=>{
    return(
<Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={Home} />
</Stack.Navigator>
    )
}

const SettingsScreen=()=>{
    return(
<Stack.Navigator>
    <Stack.Screen name="settingsScreen" component={Settings} />
</Stack.Navigator>
    )
}

const PostScreen=()=>{
    return(
<Stack.Navigator>
    <Stack.Screen name="postScreen" component={Post} />
</Stack.Navigator>
    )
}

const ProfileScreen=()=>{
    return(
<Stack.Navigator>
    <Stack.Screen name="profileScreen" component={Profile} />
</Stack.Navigator>
    )
}
export default HomeScreen
export {PostScreen,SettingsScreen,ProfileScreen}