import React, {useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';

import Colors from '../../Items/Colors';
import Dark_Button from '../../Items/Buttons/dark-bt';



const Transport_screen5 = props => {
    const navigation = useNavigation();
    const [value, onChangeText] = useState();
    const data = { ...props.route.params };

  console.log(data);




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

            <View style={styles.box}>
            <Text style={styles.head2}> Type of transportation</Text>
            <TextInput
               style={styles.input}
               editable={false}
               value={data.Transporttype}
               >

              </TextInput>


        </View>

        <View style={styles.box}>
            <Text style={styles.head2}> Date</Text>
            <TextInput
              style={styles.input}
              editable={false}
              value={data.date}>
              </TextInput>
        </View>

        <View style={styles.box}>
            <Text style={styles.head2}> Time</Text>
            <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder={'11:00 Pm '}>

            </TextInput>
        </View>

        <View style={styles.box}>
            <Text style={styles.head2}> Notes </Text>
            <TextInput
              style={styles.input}
              editable={false}
              value={data.note}>
              </TextInput>
        </View>
    </View>

        <View style={styles.container3}>
        <Dark_Button onPress={() => props.navigation.navigate("Transport_screen5")}>
          <Text style={{fontSize: 18}}> Submit</Text>
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
        padding: '2%',
        paddingTop: '7%'


    },
    top: {
        flex: 0.5,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        // backgroundColor: 'lightblue'
      },

        container1: {
        flex: 0.6,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: '#f72f54'
      },
        container2: {
        flex: 2.8,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingBottom: '40%',
        // paddingHorizontal: '3.7%'
        // backgroundColor: '#d5ff03'
      },

        container3: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        paddingLeft: '60%',
        paddingHorizontal: '3%'
        // backgroundColor: '#ff4800'
      },
      box: {
          width: '100%'

      },

      back:{
        alignSelf: "flex-start",
        fontSize: 16,
        color: Colors.primary2,
      },
      head1: {
          fontSize: 26,
          fontWeight: 'bold',
          color: Colors.primary1
      },
      head2: {
          fontSize: 15.6,
          fontWeight:'bold',
          alignSelf: 'flex-start',
          color: Colors.secondary2,

      },
      input: {
          fontSize: 20,
          borderBottomWidth: 1,
          borderBottomColor: 'black',
          color: Colors.secondary3,
          paddingTop: '2.5%'
      }
});
export default Transport_screen5;