


import React from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import HomeScreen from "./src/navigation/HomeScreen";
import Onboard_screen1 from "./src/OnBoard/onboard_screen1";

// const fontWeight = ['Black', 'BlackItalic', 'Bold', 'BoldItalic', 'Italic', 'LightItalic', 'Regular', 'Thin', 'ThinItalic']
// const fontName = ['Lato']
// const fontPath = './assets/fonts/'
// const fonts = {}

// fontName.forEach(name => {
//   fontWeight.forEach(weight => {
//     fonts[name + '-' + weight] = require('' + fontPath + name + '-' + weight + '.ttf')
//   })
// })

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
