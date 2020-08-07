import React from 'react';
import { StyleSheet, View,} from 'react-native';
import Demo from './component/demo';
import Card from './component/Card';


export default function App() {
  return (
    <View style={styles.container}>
      <Demo />
      {/* <Card style={styles.social}  /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  
});
