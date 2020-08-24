import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import colors from '../../Items/Colors';
import Dark_Button from '../../Items/Buttons/dark-bt';

const Social_Screen = props => {
    return(

    <View style={styles.screen} >
        <View style={styles.container1}>
        <Text style={styles.head}>Socialise</Text>
        </View>
        <View style={styles.container2}>
            <Image
            source={require('../h2h/s5.png')}
            resizeMode= 'contain'
            style={{
                width: '100%',
                height: '100%',
                alignSelf: 'center'
            }}
         />

        </View>
        <View style={styles.container3}>
          <Text style={styles.head2}>Whether it be a phone call with a new friend, grabbing a coffee, or seeking a new hiking buddy.</Text>
    
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
        // flex: 1,
        height:'100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1.6%',
    },
    container1:{
        flex: 0.6,
        width: '100%',
        // backgroundColor: '#fcba03',
    },
    container2:{
        flex:2.7,
        width: '100%',
        // backgroundColor: '#8a53b8',
    },
    container3:{
        flex: 1.2,
        width: '100%',
        // backgroundColor: '#8af249',
    },
    container4:{
        flex: 0.5,
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
        flex: 0.8,
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: '2%',
        paddingBottom: '5%',
        // backgroundColor: '#e83354',
    },
     head: {
         fontSize: 25,
         fontWeight: 'bold',
         paddingLeft:'2%',
         color: colors.primary1
     },
      head2: {
          alignSelf: 'center',
          fontSize: 20,
          color: colors.primary2
      },
      head3: {
        fontSize: 18.5,
        alignSelf: 'center',
        fontWeight: 'bold',
      }

});

export default Social_Screen;