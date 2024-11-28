import {Button, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import React from 'react';



const UseEffectUnmounting = () => {

    let [state,setState] = useState(true);

  return (
    <View>
      <Text style={styles.heading}>UseEffectUnmounting</Text>

      <View>
        { state ? <Child /> : null}
      </View>
      <Button title='press me!!' onPress={()=>{setState(()=>!state)}}/>
      
    </View>
  );
};

export default UseEffectUnmounting;

const styles = StyleSheet.create({
    heading:{
        fontSize:30,
        color:"red",
        fontWeight:"bold",
        margin:10,
    },
});


const Child = ()=>{
    useEffect(()=>{
        return()=>{
            console.log("class hide ")
        }
    },[])

    return(
        <View>
            <Text style={styles.heading}>Child</Text>
        </View>
    );
};