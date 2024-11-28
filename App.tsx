import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatLists from './src/FlatLists'
import SectionLists from './src/SectionLists'
import Forms from './src/Forms'
import Dispaly from './src/Dispaly'
import Contact from './screen/Contact'
import Grid from './screen/Grid'
import UseEffectHook from './src/UseEffectHook'
import UseEffectUpading from './src/UseEffectUpading'
import UseEffectUnmounting from './src/UseEffectUnmounting'
import ActivityIND from './src/ActivityIND'
import Modals from './src/Modals'
import ModalAlert from './src/ModalAlert'
import AlertShow from './src/AlertShow'


const App = () => {
  return (
    <View style={{flex:1}}>
     {/* <FlatLists />
     <SectionLists /> */}
     {/* <Forms /> */}
     {/* <Contact/> */}
     {/* <Grid/> */}
     {/* <UseEffectHook/> */}
     {/* <UseEffectUpading/> */}
     {/* <UseEffectUnmounting /> */}
    {/* <ActivityIND /> */}
    {/* <ModalAlert /> */}
    <AlertShow/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})