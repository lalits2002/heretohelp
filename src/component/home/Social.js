import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Text} from 'react-native';

const Social = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.Social}>
    <Text style={styles.txt} >
      Socializing
    </Text>
    <Image 
    source={require('../h2h/s5.png')}
    style={styles.image}
    />
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  Social: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 6,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    height: '100%',
    
  },
  image: {
    position:'absolute',
    alignSelf: 'flex-end',
    width:'50%',
    height: '100%',
  },
  txt: {
    margin: '7%',
  }
});

export default Social;
