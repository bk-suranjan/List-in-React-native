import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const list = [
    {
        title : 'Gods',
        data : [
            {
                id : 1,
                name : "Ram",
            },
            {
                id : 2,
                name : "Sita",
            }, {
                id : 3,
                name : "Shyam",
            },
        ]
    },

    {
        title : 'Fruit',
        data:[
             {id:4, name : "Mango" },
             {id:5, name:"litchi"},
             {id:6, name:"Apple"},
        ],
    },
];

const SectionLists = () => {
    const renderItems = ({item})=>(
        <View >
            <Text style={styles.list}>
                {item.name}
            </Text>
        </View>
    );

    const RenderSectionHeaders = ({section})=>(
      <View style={styles.headerCon}>
        <Text style={styles.headerTitle}>
            {section.title}
        </Text>
      </View>
    )

  return (
    <View style={styles.container}>
     <SectionList 
     sections={list}
     renderItem={renderItems}
     renderSectionHeader={RenderSectionHeaders}
     keyExtractor={item=>item.id}
     />
    </View>
  )
}

export default SectionLists

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#efefef",
        marginVertical:10,
    },
    headerCon:{
     backgroundColor:"blue",
    //  borderRadius:5,
    },
    headerTitle:{
        padding:10,
        color:"#fff",
        fontSize:19,
        textAlign:"center",
    },
    list:{
        textAlign:"center",
        padding:5,
        fontSize:16,
    }
})