import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Dark_Button from '../../Items/Buttons/dark-bt';
import colors from '../../Items/Colors';

const HandyWork_Screen = props => {
    return(
    <View style={styles.screen} >
      <View style={styles.container1}>
        <Text style={styles.head}>HandyWork</Text>
      </View>
      <View style={styles.container2}>
        <Image 
          source={require('../h2h/s7.png')}
          resizeMode= 'contain'
          // resizeMethod= 'auto'
          style={{
            width: '60%',
            height: '95%',
            alignSelf: 'center',     
          }}
         />
      </View>
      <View style={styles.container3} >
        <Text style={styles.head2}> Lawn too tall? Garder Filled with weeds? </Text> 
        <Text style={styles.head2}> Drain plugged? someone near by has a</Text> 
        <Text style={styles.head2}> hand to offer.</Text> 
      </View>
      <View style={styles.container4}>
       <Text style={styles.head3}>Select type of Handywork</Text> 
      </View>
      <View style={styles.container5}>
       <Text style={{alignSelf: 'center'}}> development</Text>
      
      </View>
      <View style={styles.container6}>
       <Dark_Button>
         <Text style={{fontWeight: 'bold'}}>
         Request For HandyWork
         </Text>
       </Dark_Button>
      </View>
     
        
    </View>
    );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '2%',
      paddingBottom: '5%'
    },
    container1: {
      flex: 1,
      width: '100%',
      alignSelf: 'flex-start',
      paddingHorizontal: '4%',
    },
    head: {
      color: colors.primary1,
      fontSize: 26,
      fontWeight: "bold"
    },
    container2: {
      flex: 2.3,
      width: '100%',
      
    },
    container3: { 
      flex: 1.3,
      flexDirection: 'column',
      width: '100%',
      paddingHorizontal: '2%',
      paddingTop: '5%',
    
     
     
    },
    container4: { 
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      justifyContent :'center',
      paddingVertical: '1.8%',
    },
    container5: { 
      flex: 4,
      flexDirection: 'column',
      justifyContent: 'center',
      // backgroundColor: '#1630B0',
      width: '100%',
    },
    container6: { 
      flex: 1.4,
      // backgroundColor: '#218291',
      width: '100%'
    },
    head2: {
      alignSelf: 'flex-start',
      fontSize: 18,
      color: colors.primary2,
  
    },
    head3: {
      fontSize: 17.5,
      alignSelf: 'center',
      fontWeight: 'bold',
    }

   
});

export default HandyWork_Screen;