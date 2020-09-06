import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';


import Dark_Button from '../../Items/Buttons/dark-bt';
import Colors from '../../Items/Colors';

const Transport_screen2 = props => {
    const navigation = useNavigation();

    return(
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
             } />

        </View>

<View style={styles.container4}>

<Text style={styles.head2}>What time do you requested date?</Text>
</View>

<View style={styles.container5}>

</View>

<View style={styles.container6}>

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
        flexDirection: 'column',
        width: '100%',
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'


    },
    top: {
        flex: 0.5,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        paddingTop: '2.8%'
        // backgroundColor: 'lightblue'
      },

        container1: {
        flex: 0.4,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: '#f72f54'
      },
        container2: {
        flex: 0.32,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: '#e8a643'
      },
        container3: {
        flex: 1.2,
        width: '100%',
        flexDirection: 'column',
        paddingTop: '2%'
        // backgroundColor: '#5cc4c1'
      },
        container4: {
        flex: 0.6,
        width: '100%',
        flexDirection: 'column',
        // backgroundColor: '#eef51b',
        justifyContent:'center',
        paddingLeft: '1.5%'

      },
        container5: {
        flex: 2.8,
        width: '100%',
        flexDirection: 'column',
        // backgroundColor: '#ed64a4'
      },
        container6: {
        flex: 0.75,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: '#18f096',
        paddingLeft: '55%',
        // paddingTop: '2%',
        paddingHorizontal: '1.6%',
      },
      back:{
        alignSelf: "flex-start",
        fontSize: 16,
        color: Colors.primary2,
      },
      head: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primary1
      },
      head1: {
        fontSize: 17,
        justifyContent: 'center',
        color: Colors.primary2
      },
      head2: {
        fontSize: 17,
      }


});
export default Transport_screen2;