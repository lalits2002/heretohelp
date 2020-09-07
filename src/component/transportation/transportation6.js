import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';

import Colors from '../../Items/Colors';
import Dark_Button from '../../Items/Buttons/dark-bt';
import { TextInput } from 'react-native-gesture-handler';


const Transport_screen6 = props => {
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
            <Text style={styles.head1}>Review your request</Text>
        </View>



        <View style={styles.container2}>
            <Text style={styles.head2}> Type of transportation</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              placeholder={ 'Doctors appointment'}>

              </TextInput>


        </View>

        <View style={styles.container3}>
            <Text style={styles.head2}> Date</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              placeholder={ 'Friday, June 5 2020'}>
              </TextInput>
        </View>

        <View style={styles.container4}>
            <Text style={styles.head2}> Time</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder={'11:00 Pm '}>

            </TextInput>
        </View>

        <View style={styles.container5}>
            <Text style={styles.head2}> Notes </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              placeholder={'I need a drive to Doctor appointment at the Hospital'}>
              </TextInput>
        </View>
        <View style={styles.container6}>
        <Dark_Button onPress={() => props.navigation.navigate("Transport_screen6")}>
          <Text> Submit</Text>
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
        flex: 0.47,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        // backgroundColor: 'lightblue'
      },

        container1: {
        flex: 0.7,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // backgroundColor: '#f72f54'
      },
        container2: {
        flex: 0.8,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // backgroundColor: '#d5ff03'
      },
        container3: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        // backgroundColor: '#0bff03'
      },
        container4: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        // backgroundColor: '#8f0be0'
      },
        container5: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        // backgroundColor: '#ff4800'
      },
      container6: {
          flex: 1,
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '60%',
          paddingHorizontal: '2%',
          paddingTop: '5%'

      },

      back:{
        alignSelf: "flex-start",
        fontSize: 16,
        color: Colors.primary2,
      },
      head1: {
          fontSize: 23,
          fontWeight: 'bold',
          color: Colors.primary1
      },
      head2: {
          fontSize: 17,
          alignItems: 'center'
      },
      input: {
          fontSize: 20,
          borderBottomWidth: 1,
          borderBottomColor: 'black'
      }
});
export default Transport_screen6;