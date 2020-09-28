import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';



const Home2 = props => {

  return(
    <View style={{...styles.tabScreen, ...props.style}} >
     
      <TouchableOpacity style={styles.icon}  >
        <Image 
        source={require('../../Items/Icons/home1.png')}
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
    width: '100%',
    maxHeight: '100%',
    // backgroundColor: 'red',
    },
});

export default Home2;
