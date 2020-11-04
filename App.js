


import React from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import HomeScreen from "./src/navigation/HomeScreen";
import Onboard_screen1 from "./src/OnBoard/onboard_screen1";
export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
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
