import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

const ApiCall = () => {
    useEffect(()=>{
       fetch('http://10.0.2.2:3000/user').then((response)=>{
        response.json().then((result)=>{
            console.log(result);
        })
       })
    },[])
  return (
    <View>
      <Text style={{fontSize:30}}>Api</Text>

    </View>
  );
};

export default ApiCall;

const styles = StyleSheet.create({});