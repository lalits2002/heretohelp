import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const TabScreen = props => {

  const navigation = useNavigation();


  return(
    <View style={{...styles.tabScreen, ...props.style}} >
     
      <TouchableOpacity style={styles.icon}  >
        <Image 
        source={require('../../Items/Icons/home.png')}
        resizeMode='center'
        style={styles.img}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={() => {navigation.navigate('browse')}} >
        <Image 
        source={require('../../Items/Icons/Map.png')}
        resizeMode='center'
        style={styles.img}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={() => {navigation.navigate('chat')}} >
        <Image 
        source={require('../../Items/Icons/Frame.png')}
        resizeMode='center'
        style={styles.img}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={() => {navigation.navigate('profile')}} >
        <Image 
        source={require('../../Items/Icons/user1.png')}
        resizeMode='center'
        style={styles.img}
        />
      </TouchableOpacity>
      
    </View>
  )
};

const styles = StyleSheet.create({
  tabScreen: {
    flex: 1,
    paddingHorizontal: '4%',
    justifyContent: 'center',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  icon: {
    flex:1,
    alignItems: 'center',
    alignSelf:'center',
  },
  img: {
    maxWidth:'50%',
    maxHeight: '50%',
    },
});

export default TabScreen;