import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';


const Dark_Button2 = props => {
    return (
      <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </TouchableOpacity>
    );
  };



  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#2D375B',
      paddingVertical: 15,
      borderRadius: 25,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 19
    }
  });

export default Dark_Button2;

  