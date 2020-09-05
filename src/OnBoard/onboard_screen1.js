import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';


import Dark_Button from '../../Items/Buttons/dark-bt';
import Colors from '../../Items/Colors';

const Onboard_screen1 = props => {
 


    return (
      <SafeAreaView style={{ ...styles.screen, ...props.style}}>

        <Text> Onboard_screen1</Text>


      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '4%',
    padding: '1.2%',
    backgroundColor :'#ffffff'
    // backgroundColor: '#99927d',
  },
});

export default Onboard_screen1;