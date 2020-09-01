import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {useNavigation } from '@react-navigation/native';
import Dark_Button from '../../Items/Buttons/dark-bt';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TextInput } from 'react-native-gesture-handler';


const Social_Screen8 = props => {

  const navigation = useNavigation();
    return (

        <View style={{ ...styles.screen, ...props.style}}>
        <View style={styles.top} >
          <TouchableOpacity  onPress={() => {navigation.goBack()}} >
            <Text style={styles.back}>Back</Text>
          </TouchableOpacity>
        </View>


      <View style={styles.container1}>
      <Text style={styles.head1}>Review your request</Text>
    </View>

    <View style={styles.container2}>
      <Text style={styles.head2}>Type of social activity</Text>
      <View style={styles.box}>
    <TextInput style={styles.input} value={'Coffee meetup'}/>
    </View>
    </View>

    <View style={styles.container3}>
      <Text style={styles.head2}>Date</Text>
    <View style={styles.box}>
    <TextInput style={styles.input} value={'Friday June 5, 2020'}/>
    </View>
    </View>

    <View style={styles.container4}>
      <Text style={styles.head2}>Time</Text>
    <View style={styles.box}>
    <TextInput style={styles.input} value={'11:00 AM'}/>
    </View>
    </View>



    <View style={styles.container5}>
      <Text style={styles.head2}>Location</Text>
    <View style={styles.box}>
    <TextInput style={styles.input} value={'Big Cup Coffee'}/>
    </View>
    </View>

    <View style={styles.container6}>
    <Text style={styles.head2}>Notes</Text>
    <View style={styles.box}>
    <TextInput style={styles.input} value={'Lets have a coffe and chat'}/>
    </View>



    </View>


    <View style={styles.container7}>
      <Dark_Button onPress={() => props.navigation.navigate('socialscreen8')}>
        <Text> Submit</Text>
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
      margin: '1.8%',
      paddingTop: '0.5%'
    },
    top: {
        flex:0.65,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        // backgroundColor: "#A596D3",
      },
    container1: {
        flex: 0.68,
        width: "100%",
        flexDirection: 'column',
        // backgroundColor: "#67f0a0",
    },
    container2: {
        flex: 1,
        width: "100%",
        flexDirection: 'column',
        // backgroundColor: "#67f0a0",
    },
    container3: {
        flex: 1,
        width: "100%",
        flexDirection: 'column',
        // backgroundColor: "#67f0a0",
      },
      container4: {
        flex: 1,
        width: "100%",
        flexDirection: 'column',

        // backgroundColor: "#a1278c",
      },
      container5: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
        paddingHorizontal: "2%",
        // paddingBottom: '5%',
        // backgroundColor: "#7099db",
      },
      container6: {
        flex: 0.7,
        width: "100%",
        justifyContent: 'center',
        flexDirection: "column",
        justifyContent: "center",
        // backgroundColor: "#e4f70a",
      },


      container7: {
        flex: 1.2,
        width: "100%",
        justifyContent: 'flex-end',
        // backgroundColor: "#2e02f0",
        paddingHorizontal: "2%",
        paddingTop: "5%",
        paddingLeft: '55%',
      },
      box: {
        width: '100%',

      },
      back:{
        alignSelf: "flex-start",
        fontSize: 16,
        color: Colors.primary2,
      },
      head1: {
        fontSize: 24,
        fontWeight: "bold",
        justifyContent: 'center',
        color: Colors.primary1,
      },
      head2: {
        alignSelf: "flex-start",
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.primary2,
        paddingTop: '0.5%',
        justifyContent: 'center'
      },

      input: {
        paddingTop: '0.1%',
        fontSize: 15,
        color: Colors.secondary3 ,
        borderBottomColor: 'black',
        borderBottomWidth: 1
      },
});


export default Social_Screen8;