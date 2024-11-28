import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const ModalAlert = () => {
    let [visable,setvisable] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      onPress={()=>setvisable(()=>true)}
      style={styles.btn}
      >
        <Text style={styles.btnTxt}>Press me!!</Text>
      </TouchableOpacity>
     
      <Modal  
      visible={visable}
      animationType="slide"
      onRequestClose={()=>setvisable(false)}
      >
        <View style={styles.modalContainer}>
            <View style={styles.modalContainerInner}>
                <Text style={styles.modalHeading}>Heading</Text>
                <Text style={styles.modalTxt}>here is paragraph  . . .. .. .</Text>

                <TouchableOpacity style={styles.btn} 
                 onPress={()=>setvisable(false)}
                >
                    <Text style={styles.btnTxt}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
      </Modal>


    </View>
  );
};

export default ModalAlert;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    modalContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    modalContainerInner:{
        backgroundColor:'red',
        width:'55%',
        height:"30%",
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        elevation:4,
        
    },
    modalHeading:{
       textAlign:'center',
       fontSize:24,
       color:'white',
    },
    modalTxt:{
        textAlign:'center',
        marginVertical:10,
        color:'white',
        fontSize:18,
    },
    btn:{
        backgroundColor:'pink',
        width:'30%',
        paddingVertical:10,
        borderRadius:8,
    },
    btnTxt:{
        textAlign:'center',
        paddingVertical:10,
    }
});