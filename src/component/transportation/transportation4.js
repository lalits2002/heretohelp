import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';

import Colors from '../../Items/Colors';
import Dark_Button from '../../Items/Buttons/dark-bt'



const Transport_screen4 = props => {
    const navigation = useNavigation();
    const [value, onChangeText] = useState();



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
            <Text style={styles.head1}>Transportation</Text>
        </View>



        <View style={styles.container2}>
            <Text style={styles.head2}>Transport Service</Text>
        </View>

        <View style={styles.container3}>
            <Image source={require('../../Items/Icons/calender.jpeg')}
            resizeMode= 'contain'
            style={{
              height: '100%',
              width: '40%',
              alignSelf: 'center'
            }
            }/>
        </View>

        <View style={styles.container4}>
            <Text style={styles.head3}>Additional details</Text>
        </View>

        <View style={styles.container5}>
          <TextInput style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          placeholder={'Enter your text '}
          />
        </View>

        <View style={styles.container6}>
        <Dark_Button
          onPress={() =>
            props.navigation.navigate("Transport_screen5")


          }
        >
             <Text> Next </Text>
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
        alignItems: 'center',
        paddingTop: '7%',
        padding: '1.8%'


    },
    top: {
        flex: 0.5,
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
        // backgroundColor: '#bdff4a'
      },
        container2: {
        flex: 0.5,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // backgroundColor: '#c5cf99'
      },
        container3: {
        flex: 0.8,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingHorizontal:'2%',
        // backgroundColor: '#f5875f'
      },
        container4: {
        flex: 0.6,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: '#8f0be0'
      },
        container5: {
        flex: 2,
        width: '100%',
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'flex-start',

        // backgroundColor: '#a875ff'
      },
        container6: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: '#83fcea',
        paddingLeft: '60%',
        paddingHorizontal: '2%',
        paddingTop: '7%'
      },
      back:{
        alignSelf: "flex-start",
        fontSize: 16,
        color: Colors.primary3,
      },
      head1: {
          fontSize: 23,
          fontWeight: 'bold',
          color: Colors.primary1
      },
      head2: {
          fontSize: 17,
          alignItems: 'center',
          color: Colors.primary2
      },
      head3: {
          fontSize: 18,
          alignItems: 'center',
          justifyContent: 'center'
      },
      input: {
        fontSize: 20,
        color: Colors.secondary3,
        borderBottomColor: "black",
        borderBottomWidth: 1,
      },
});
export default Transport_screen4;