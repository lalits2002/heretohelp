import React, { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, Inter_900Black, } from '@expo-google-fonts/inter';

import Screen from './navigation/Screen';
import TabScreen from './component/TabScreen/TabScreen';
import Volunteer  from './component/home/Volunteer'; 



export default function App() {


  let [fontsLoaded] = useFonts({
    Inter_900Black,
    
    
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }



  // return <Volunteer />
  // return <TabScreen />

  return <Screen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
