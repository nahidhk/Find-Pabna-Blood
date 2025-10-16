import React from "react";
import { Text , StyleSheet } from "react-native";

// icons
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Menu(){
    return(
        <>
        <Text>
            <Ionicons name="menu" style={menuStyle.menuIcon}/>
        </Text>
        </>
    )
}

const menuStyle = StyleSheet.create({
    menuIcon:{
        fontSize:30,
        color:"#fff",
        
    }
})