import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useEffect , useState} from 'react';

const UseEffectHook = () => {
    useEffect(()=>{
        console.log("API call");
    },[]);

    let[data,setData] = useState(0);
  return (
    <View>
      <Text>UseEffectHook</Text>
      <Text>{data}</Text>
      <Button title={"press"}  onPress={()=> setData(data + 1)}/>
    </View>
  );
};

export default UseEffectHook;

const styles = StyleSheet.create({});