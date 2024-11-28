import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {user} from "./contList"
import Dispaly from '../src/Dispaly';

// import { styles } from './styles';

const Contact = () => {
    let renderIteamHandle = ({item})=>(<Dispaly name={item.name} email={item.email}/>)
  return (
   <FlatList 
   data={user}
   renderItem={renderIteamHandle}
   keyExtractor={(text)=>text.id}
   ListHeaderComponent={<Text style={styles.header}>Contact</Text>}

   />
  );
};

export default Contact;

const styles = StyleSheet.create({
    header:{
        fontSize:25,
        color:"red",
    }
});