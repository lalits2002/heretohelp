import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';



const TabScreen = props => {




  return(
    <View style={{...styles.tabScreen, ...props.style}} >
     
      <TouchableOpacity style={styles.icon}  >
        <Image 
        source={require('../../Items/Icons/home.png')}
        resizeMode='contain'
        style={styles.img}
        />
      </TouchableOpacity>
     
      
    </View>
  )
};

const styles = StyleSheet.create({
  tabScreen: {
    flex: 1,
    justifyContent: 'center',
    flexDirection:'row',
    // backgroundColor: 'blue'
    // flexWrap:'wrap',
  },
  icon: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green'
    // alignSelf:'center',
  },
  img: {
    maxWidth:'35%',
    maxHeight: '40%',
    // backgroundColor: 'red',
    },
});

export default TabScreen;