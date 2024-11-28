import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const UseEffectUpading = () => {
    let[counter,setCounter] = useState(0);
    let[score,setScore] = useState(0);

    // useEffect(()=>{
    //     console.log("Counter");
    // },[counter])  // this useEffect only work for counter when the counter upade because of  [] dependancy  
  return (
    <View>
      <Text style={styles.heading}>UseEffectUpading</Text>

      <View>
        <Text>Counter : {counter}</Text>
        <Text>Score : {score}</Text>
      </View>
       <Button title='Counter'  onPress={()=>{setCounter(()=>counter + 1)}}/>
       <Button title='Score' onPress={()=>{setScore(()=>score + 5)}} />
       

      <Child counter={counter} score={score}/>
    </View>
  );
};

export default UseEffectUpading;

const styles = StyleSheet.create({
    heading:{
        fontSize:30,
        fontWeight:"bold",
        color:"red",
        textDecorationColor:"black",
        textDecorationLine:"underline",
        margin:"20",

    }
});


const Child = (props)=>{
    useEffect(()=>{
        console.log("counter");
    },[props.counter])
    return(
        <View>
        <Text style={styles.heading}>Chlid</Text>
           <Text>Counter:{props.counter}</Text>
           <Text>Score:{props.score}</Text>
        </View>
        
    );
};