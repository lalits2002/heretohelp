import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import colors from '../../Items/Colors';
import Dark_Button from '../../Items/Buttons/dark-bt';

const Social_Screen = props => {
    return(

    <View style={styles.screen} >
        <View style={styles.container1}>
        <Text style={styles.head}>Socialise_Screen</Text>
        </View>
        <View style={styles.container2}>
            <Image
            source={require('../h2h/s5.png')}
            resizeMode= 'contain'
            style={{
                width: '75%',
                height: '100%',
                alignSelf: 'center'
            }}
         />

        </View>
        <View style={styles.container3}>
            <Text style={styles.head2}>Whether it be a phone call with a new </Text>
            <Text style={styles.head2}>friend, grabbing a coffee, or seeking a </Text>
            <Text style={styles.head2}>new hiking buddy.</Text>
            </View>

        <View style={styles.container4}>
        <Text style={styles.head3}>Select type of social activity</Text>

        </View>
        <View style={styles.container5}>
        <Text style={{alignSelf: 'center'}}>On dev</Text>
        <Text style={{alignSelf: 'center'}}>Coffee</Text>
        <Text style={{alignSelf: 'center'}}>Meet</Text>
        <Text style={{alignSelf: 'center'}}>Date</Text>
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1.6%',
    },
    container1:{
        flex: 1,
        width: '100%',
        // backgroundColor: '#fcba03',
    },
    container2:{
        flex: 2.3,
        width: '100%',
        // backgroundColor: '#8a53b8',
    },
    container3:{
        flex: 1.4,
        width: '100%',
        // backgroundColor: '#8af249',
    },
    container4:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        // backgroundColor: '#59e6f0',
    },
    container5:{
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        // backgroundColor: '#b5ad98',
    },
    container6:{
        flex: 1,
        width: '100%',
        // backgroundColor: '#e83354',
        paddingTop: '5%',
        paddingHorizontal: '2%',
    },
     head: {
         fontSize: 22,
         fontWeight: 'bold',
         color: colors.primary1
     },
      head2: {
          alignSelf: 'flex-start',
          fontSize: 15,
          color: colors.primary2
      },
      head3: {
        fontSize: 17.5,
        alignSelf: 'center',
        fontWeight: 'bold',
      }

});

export default Social_Screen;