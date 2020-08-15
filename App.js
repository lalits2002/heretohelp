import React, { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, Inter_900Black, } from '@expo-google-fonts/inter';

import Screen from './src/navigation/Screen';




export default function App() {


  let [fontsLoaded] = useFonts({
    Inter_900Black,
    
    
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }





  return <Screen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
