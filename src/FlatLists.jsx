import { StyleSheet, Text, View, FlatList } from 'react-native'
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
]



const FlatLists = () => {
   
    const renderItemFun = ({item}) =>(
        <View>
            <Text style={styles.list}>
                {item.name}
            </Text>
        </View>
    );

  return (
    <View>
      <FlatList 
      data={detail}
      renderItem={renderItemFun}
      keyExtractor={item=>item.id}
      contentContainerStyle={styles.container}
      />
    </View>
  )
}

export default FlatLists

const styles = StyleSheet.create({
    list:{
     marginVertical:10,
     marginHorizontal:10,
     backgroundColor:"pink",
     borderBlockColor:"#000",
     borderWidth:2,
     paddingVertical:10,
     textAlign:"center",
     borderRadius:10,
     fontSize:20,


     shadowColor:"#000",
     shadowOffset:{
        width:4,
        height:12,
     },
     shadowOpacity:1,
     shadowRadius:4,
     elevation:2,
    },
    container:{
        backgroundColor:"blue",

    },
})