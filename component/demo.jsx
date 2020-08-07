import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Demo = props => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../h2h/image1.png')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: '95%',
    height: '95%'
  }
});

export default Demo;