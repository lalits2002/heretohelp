import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import Dark_Button from '../../Items/Buttons/dark-bt';
import Colors from '../../Items/Colors';

const Transport_screen2 = props => {
  const navigation = useNavigation();


    return (
      <SafeAreaView style={{ ...styles.screen, ...props.style}}>

      <View style={styles.top} >
        <TouchableOpacity  onPress={() => {navigation.goBack()}} >
          <Text style={styles.back}>
            <Feather name="chevron-left" size={15} color= {Colors.primary3} />
           Back</Text>
        </TouchableOpacity>
      </View>



       <View style={styles.container1}>
         <Text style={styles.head}> Transportation</Text>
       </View>

       <View style={styles.container2}>
        <Text style={styles.head1}> Transport Service</Text>
       </View>

       <View style={styles.container3}>
         <Image source={require('../../Items/Icons/calender.jpeg')}
        resizeMode= 'contain'
        style={{
          height: '100%',
          width: '55%',
          alignSelf: 'center'
        }
        }/>

        </View>

       <View style={styles.container4}>
         <Text style={styles.head2}>Friday, June 5, 2020</Text>
         <Text style={styles.head3}>What time do you request?</Text>
       </View>

      <View style={styles.container5}>

      </View>

      <View style={styles.container6}>
        <Text style={styles.head4}></Text>
        <Dark_Button onPress={() => props.navigation.navigate('Transport_screen3')}>
        <Text>Next</Text>
        </Dark_Button>
      </View>



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
    // backgroundColor: '#99927d',
    margin: '1.2%'
  },
  top: {
    flex: 0.4,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    // backgroundColor: 'lightblue'
  },

    container1: {
    flex: 0.3,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf:'flex-start'
    // backgroundColor: '#f72f54'
  },
    container2: {
    flex: 0.4,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start'
    // backgroundColor: '#e8a643'
  },
    container3: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // backgroundColor: '#5cc4c1'
  },
    container4: {
    flex: 0.45,
    width: '100%',
    flexDirection: 'column',
    // backgroundColor: '#eef51b',
    paddingTop: '5%',
  },
    container5: {
    flex: 2,
    width: '100%',
    flexDirection: 'column',
    // backgroundColor: '#ed64a4'
  },
    container6: {
    flex: 0.6,
    width: '100%',
    flexDirection: 'column',
    paddingLeft: '56%',
    paddingBottom: '2%'
    // backgroundColor: '#18f096'
  },

  head: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary1
  },
  head1: {
    fontSize: 15.2,
    color: Colors.primary2

  },
   head2: {
     fontSize: 18,
     fontWeight: 'bold',
     color: Colors.primary2,
     justifyContent: 'center',
     paddingBottom: '3%'
   },
   head3: {
     fontSize: 18,
     fontWeight: 'bold',
     color: Colors.primary2,
     justifyContent: 'center'
   }

});

export default Transport_screen2;