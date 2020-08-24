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
          style={{
            width: '60%',
            height: '95%',
            alignSelf: 'center',     
          }}
         />
      </View>
      <View style={styles.container3} >
        <Text style={styles.head2}>
          {''}
           Lawn too tall? Garder Filled with weeds?  Drain plugged? someone near by has a hand to offer.
        </Text> 
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
      flex: 0.55,
      width: '100%',
      alignSelf: 'flex-start',
      paddingHorizontal: '4%',
      //  backgroundColor: '#fcba03',
    },
   
    container2: {
      flex: 2,
      flexDirection: 'column',
      justifyContent:'center',
      width: '100%',
      // backgroundColor: '#59e6f0'
      
    },
    container3: { 
      flex: 1.2,
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      paddingHorizontal: '2%',
      // backgroundColor: '#b5ad98',
    
     
     
    },
    container4: { 
      flex: 0.5,
      width: '100%',
      flexDirection: 'column',
      justifyContent :'flex-end',
      paddingTop: '2%',
      // marginTop:'8%',
      // backgroundColor: '#8af249',
    },
    container5: { 
      flex: 4,
      flexDirection: 'column',
      justifyContent: 'center',
      // backgroundColor: '#1630B0',
      width: '100%',
    },
    container6: { 
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: '100%',
      // backgroundColor: '#218291',
    },
    head: {
        color: colors.primary1,
        fontSize: 26,
        fontWeight: "bold"
      },
    head2: {
      alignSelf: 'flex-start',
      fontSize: 20,
      color: colors.primary2,
  
    },
    head3: {
      fontSize: 17.5,
      alignSelf: 'center',
      fontWeight: 'bold',
    }

   
});

export default HandyWork_Screen;