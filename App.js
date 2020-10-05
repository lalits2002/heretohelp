import React from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import Onboard_screen2 from "./src/OnBoard/onboard_screen2";
// import HomeScreen from './src/navigation/HomeScreen';
import { firebaseConfig } from "./src/component/authentication/credencials";
import firebase from "firebase";
firebase.initializeApp(firebaseConfig);

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Onboard_screen2 />;
  // return <HomeScreen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
