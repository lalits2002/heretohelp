import React from 'react';
import { StyleSheet, View, } from 'react-native';


import Volunteer from './component/home/Volunteer';


export default function App() {
  return (
    <View style={styles.container}>
      <Volunteer/>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
