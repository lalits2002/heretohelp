import React from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';

import Dark_Button from '../../Items/Buttons/dark-bt';
import Colors from '../../Items/Colors';


const ProfileScreen = props => {
    return(

    <View style={styles.screen} >
    <View style={styles.container1}>
        <Text style={styles.head}> HandyWork</Text>
    </View>
    <View style={styles.container2}>
      <Image 
      source={require('../h2h/s7.png')}
      resizeMode= 'contain'
      style={{
        width: '57%',
        height: '100%',
        alignSelf: 'center'
      }}
       />
    </View>
    <View style={styles.container3}>
        <Text style={styles.head2}> Lawn too tall? Garder Filled with weeds? </Text> 
        <Text style={styles.head2}> Drain plugged? someone near by has a</Text> 
        <Text style={styles.head2}> hand to offer.</Text> 
      
    </View>
    <View style={styles.container4}>
      <Text style={styles.head3}>Select type of Handywork</Text> 
    </View>
    <View style={styles.container5}>
     <Text style={{alignSelf: 'center'}}>on dev</Text> 
    </View>
    <View style={styles.container6}>
       <Dark_Button>
         <Text> HandyWork</Text>
       </Dark_Button>
    </View>
    </View>
    );  
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1.8%'
    },
    container1:{
      flex: 1,
      width: '100%',
      // backgroundColor: '#C6C438',
    },
    container2:{
      flex:2.3,
      width: '100%',
      // backgroundColor: '#A596D3',
      
    },
    container3:{
      flex: 1.3,
      flexDirection: 'column',
      width: '100%',
      paddingHorizontal: '2%',
      paddingTop: '5%',
    },
    container4:{
      flex:1.8,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      // backgroundColor: '#267DA5',
    },
    container5:{
      flex:4,
      width: '100%',
      flexDirection: 'column',
      justifyContent:'center',
      alignSelf: 'center'
      // backgroundColor: '#86EC4F',
    },
    container6:{
      flex:1.7,
      width: '100%',
      // backgroundColor: '#9811C9',
      paddingHorizontal: '2%',
      paddingTop: '5%'
    },
   head: {
     fontSize: 26,
     fontWeight: 'bold',
     color: Colors.primary1
   },
   head2: {
     alignSelf: 'flex-start',
     fontSize: 18,
     color: Colors.primary2
   },
   head3: {
    fontSize: 17.5,
    alignSelf: 'center',
    fontWeight: 'bold',
  }

});

export default ProfileScreen;