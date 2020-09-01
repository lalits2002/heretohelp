import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, } from 'react-native';
import {useNavigation } from '@react-navigation/native';
import Dark_Button from '../../Items/Buttons/dark-bt';
// import Colors from '../../Items/Colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TextInput } from 'react-native-gesture-handler';

const Social_Screen7 = props => {
    const navigation = useNavigation();

    return(
        <View style={{...styles.screen,...styles.props}}>

<View style={styles.top} >
          <TouchableOpacity  onPress={() => {navigation.goBack()}} >
            <Text style={styles.back}>Back</Text>
          </TouchableOpacity>
        </View>
            <View style={styles.container1} >
                <Text style={styles.head1}>Socialise</Text>
                <Text style={styles.head2}>Coffee meetup</Text>


            </View>
            <View style={styles.container2} >
            {/* <Text style={styles.head2}>Coffee meetup</Text> */}

            </View>
            <View style={styles.container3} >
                <Image resizeMode="contain"
        style={{
          height: "100%",
          width: "30%",
          alignSelf: "center",
        }}

        source={require('../../Items/Icons/calender.jpeg')}
        />

            </View>
            <View style={styles.container4} >
                <Text style={styles.head3}>  Add a short note to your request</Text>

            </View>
            <View style={styles.container5} >
            <View style={styles.box}>
                <TextInput style={styles.input} value={'Enter here'}/>

            </View>
            <View style={styles.container6} >
            <Dark_Button onPress={() => props.navigation.navigate('socialscreen8')}>
        <Text> Next</Text>
      </Dark_Button>
            </View>

         </View>
        </View>

    );

};
const styles=StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        margin: '2%',
        // marginTop: '5%'

    },
    top: {
        flex: 0.2,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    // backgroundColor: '#abc7f5',
    paddingBottom: '7%'
  },
  container1:{
      flex: 0.1,
      width: '100%',
      alignSelf: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'column',
    //   backgroundColor: '#e3d786'
    // paddingBottom: '7%'
  },
  container2:{
    flex: 0.2,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: '#f5223e'
  },
  container3:{
    flex: 0.5,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: '#1ced1c'
  },
  container4:{
    flex: 0.4,
    width: '100%',
    flexDirection: 'column',
    // backgroundColor: '#9f8af2'
  },
  container5:{
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    // backgroundColor: '#f6fa00',
    justifyContent:'center'
  },
  container6:{
    flex: 1.2,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // backgroundColor: '#0dd4ca'
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
      fontSize: 20,
      alignSelf: 'flex-start',
      fontWeight: 'bold',
      color: Colors.primary1
  },
  head2: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: Colors.primary2,
    paddingTop: '0.5%'

  },
  head3: {
    fontSize: 17.5,
    alignSelf: 'flex-start',
    fontWeight: "bold",
    // paddingBottom: '18%'
  },
  input: {
    paddingTop: '0.1%',
    fontSize: 20,
    color: Colors.secondary3 ,
    borderBottomColor: 'black',
    borderBottomWidth: 1

  },

    });
    export default Social_Screen7;