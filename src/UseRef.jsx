import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useRef } from 'react';
//use when  change  something without reRender component  its hardly use  
const UseRef = () => {
    const myRef = useRef()
    const handleRef = ()=>{
        // myRef.current.setNativeProps({
        //     text:"Suranjan",
        //     style:{
        //         color:'white',  backgroundColor:'crimson'
        //     }
        // })
        myRef.current.focus();
    }
  return (
    <View style={styles.container}>
       <TextInput 
        placeholder='Your name'
        style={styles.input}
        ref={myRef}

       />
       <TouchableOpacity onPress={handleRef} style={styles.btn}>
         <Text>Submit</Text>
         </TouchableOpacity>
    </View>
  );
};

export default UseRef;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    input:{
        width:"90%",
        borderRadius:8,
        padding:6,

    },
    btn:{
        width:"90%",
        height:40,
        borderRadius:8,
        backgroundColor:"lightblue",

    },
});