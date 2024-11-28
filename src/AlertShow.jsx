import { TouchableOpacity,StyleSheet, Text, View,Alert } from 'react-native';
import React from 'react';

const AlertShow = () => {
  
     const alertHandle = ( )=>{
          Alert.alert(
            'Alert Title',
            'Alert Message',
            [
                {
                    text : 'Cancel',
                    onPress : ()=>console.log('cancel'),
                    style:'cancel'
                },
                {
                    text : 'ok',
                    onPress : ()=>console.log('ok')
                },
            ],
            {
                cancelable : false
            }
          )
     }


  return (
    <View>
      <Text style={{fontSize:20,
        margin:20,
      }}>AlertShow</Text>
      <TouchableOpacity onPress={alertHandle}>
        <Text>Press me!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlertShow;

const styles = StyleSheet.create({});