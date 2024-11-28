import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const detail = [
    {
        id : 1,
        name:"Ram",
    },
    {
        id : 2,
        name:"Sita",
    },
    {
        id : 3,
        name:"Shyam",
    },
    {
        id : 4,
        name:"Krishna",
    },
    {
        id : 5,
        name:"Hari",
    },
    {
        id : 6,
        name:"Sita",
    },
    {
        id : 7,
        name:"Shyam",
    },
    {
        id : 8,
        name:"Krishna",
    },
    {
        id : 9,
        name:"Hari",
    },

    {
        id : 16,
        name:"Sita",
    },
    {
        id : 17,
        name:"Shyam",
    },
    {
        id : 81,
        name:"Krishna",
    },
    {
        id : 11,
        name:"Ram",
    },
    {
        id : 12,
        name:"Sita",
    },
    {
        id : 13,
        name:"Shyam",
    },
    {
        id : 15,
        name:"Shyam",
    },

];


const Grid = () => {
  return (
    <View style={styles.MainContainer}>
    
      <Text style={styles.heading}>Grid</Text>
      
      <ScrollView contentContainerStyle={styles.container} >
            {
                detail.map((text)=>(
                    <View key={text.id} style={styles.item}>
                    <Text style={styles.itemText} >{text.name}</Text>
                    </View>
                ))
            }
      </ScrollView>
      


    </View>
  )
}

export default Grid

const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor:"#f0f0f0",
        flex:1,
    },
    heading:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:10,
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:'auto',
        backgroundColor:"pink",
        flexWrap:"wrap",
        
    },
    item:{
        height:200,
        width:200,
        backgroundColor:"darkblue",
        marginBottom:20,
        borderRadius:10,
        // alignItems:"center",
        justifyContent:"center",
        
    },
    itemText:{
        
        textAlign:"center",
        color:"red"
    },
})