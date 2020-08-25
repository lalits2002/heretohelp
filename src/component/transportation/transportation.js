import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import colors from '../../Items/Colors';
import Dark_Button from '../../Items/Buttons/dark-bt';

const Transport_screen = props => {
    return(

    <View style={styles.screen} >
    <View style={styles.container1}>
    <Text style={styles.head}>Transportation</Text>
    </View>
    <View style={styles.container2}>
    <Image
            source={require('../h2h/s8.png')}
            resizeMode= 'contain'
            style={{
                width: '100%',
                height: '100%',
                alignSelf: 'center'
            }}
         />

    </View>
    <View style={styles.container3}>
<Text style={styles.head2}>Need a ride to a doctors appointment?Want to carpool to a local event and save emissions?</Text>
    </View>
    <View style={styles.container4}>
     <Text style={styles.head3}>Select type of social activity</Text>

    </View>
    <View style={styles.container5}>
    <Text style={{alignSelf: 'center'}}>On dev</Text>
        <Text style={{alignSelf: 'center'}}>Doctor's Appointment</Text>
        <Text style={{alignSelf: 'center'}}>Event</Text>
        <Text style={{alignSelf: 'center'}}>Shopping</Text>

    </View>
    <View style={styles.container6}>
    <Dark_Button>
             <Text>Request for Socialise</Text>
            </Dark_Button>

    </View>


        </View>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1.5%',
    },
    container1:{
        flex: 1,
        width: "100%",

    },
    container2:{
        flex: 2.1,
        width: '100%',

    },
    container3:{
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        paddingHorizontal: "2%",

    },
    container4:{
        flex: 0.4,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        paddingTop: '2%',

    },
    container5:{
        flex: 1.8,
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',


    },
    container6:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: '100%',
        paddingHorizontal: '2%',
        paddingBottom: '5%',
        width: '100%',

    },
    head: {
         fontSize: 25,
         fontWeight: 'bold',
         paddingLeft:'2%',
         color: colors.primary1
    },
    head2: {
          alignSelf: 'center',
          fontSize: 18,
          color: colors.primary2
      },
      head3: {
        fontSize: 18.5,
        alignSelf: 'center',
        fontWeight: 'bold',
      }



});

export default Transport_screen;