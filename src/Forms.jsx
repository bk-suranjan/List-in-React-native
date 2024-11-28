import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Forms = () => {
    let  [name,setName]=useState("");
    let[password,setPassword] =useState("");
    let onChangeText = (text)=>{
        setName(text);
    };
    let onChangePassword = (text)=>{
      setPassword(text)
    }
    let  OnPressHandle = (text)=>{
      console.log(text);
    };
  return (
    <View>
      <TextInput placeholder='name' style={styles.nameField} value={name} onChangeText={onChangeText}/>
      <TextInput placeholder='Password' secureTextEntry  style={styles.nameField} value={password} onChangeText={onChangePassword}/>
      <TouchableOpacity style={styles.btn} onPress={OnPressHandle}><Text>Click me!!</Text></TouchableOpacity>
    </View>
  )
}

export default Forms

const styles = StyleSheet.create({
    nameField:{
        borderWidth:2,
        borderColor:"red",
        marginVertical:10,
        width:"90%",
        borderRadius:8,
        marginHorizontal:20,
    },
    btn:{
      borderWidth:2,
      borderColor:"red",
      width:"20%",
      padding:10,
      borderRadius:8,
      marginHorizontal:20,
    }

})