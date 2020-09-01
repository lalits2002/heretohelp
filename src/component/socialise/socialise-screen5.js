import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Dark_Button from '../../Items/Buttons/dark-bt';
import Colors from '../../Items/Colors';

const Social_Screen5 = props => {
    const navigation = useNavigation();
    const placeholer = "Enter here";
  const [value, onChangeText] = useState(placeholer);
    return (
        <View style={{ ...styles.screen, ...props.style}}>

        <View style={styles.top} >
          <TouchableOpacity  onPress={() => {navigation.goBack()}} >
            <Text style={styles.back}>Back</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.container1}>
      <Text style={styles.head1}>Socialise</Text>
    </View>
    <View style={styles.container2}>
      <Text style={styles.head2}>Coffee meetup</Text>
    </View>

    <View style={styles.container3}>
      <Image
        resizeMode="contain"
        style={{
          height: "100%",
          width: "27%",
          alignSelf: "center",
        }}

        source={require('../../Items/Icons/calender.jpeg')}
      />
    </View>
    <View style={styles.container4}>

      <Text style={styles.head3}> Additional details</Text>

    </View>
    {/* </View> */}
    <View style={styles.container5}>
    <View style={styles.box}>
    <TextInput
      style={styles.input}
      onChangeText={(text) => onChangeText(text)}
      value={value}
          onFocus={() => {
            if (value === "Enter here") {
              onChangeText("");
            }
          }}
      />
    </View>
    </View>
    <View style={styles.container6}>
      <Dark_Button onPress={() => props.navigation.navigate('socialscreen7')}>
        <Text> Next</Text>
      </Dark_Button>
    </View>
    </View>
    );
};
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "1.8%",
      marginTop: '7%'
    },
    top: {
        flex:0.85,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        // backgroundColor: "#A596D3",
      },
    container1: {
        flex: 0.6,
        width: "100%",
        flexDirection: 'column',
        // backgroundColor: "#67f0a0",
      },
      container2: {
        flex: 0.6,
        width: "100%",
        flexDirection: 'column',
        // backgroundColor: "#a1278c",
      },
      container3: {
        flex: 1.8,
        flexDirection: "column",
        width: "100%",
        justifyContent: 'center',
        paddingHorizontal: "2%",
        paddingBottom: '1%',
        // backgroundColor: "#7099db",
      },
      container4: {
        flex: 1.5,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        // backgroundColor: "#e4f70a",
      },
      container5: {
        flex: 3,
        width: "100%",
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignSelf: "center",
        // backgroundColor: "#86EC4F",
      },
      container6: {
        flex: 1.2,
        width: "100%",
        justifyContent: 'center',
        // backgroundColor: "#2e02f0",
        paddingHorizontal: "2%",
        // paddingTop: "15%",
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
        color: Colors.primary1,
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
        paddingBottom: '18%'
      },
      input: {
        // fontSize: 17.5,
        // alignSelf: 'flex-start',
        // // fontWeight: "bold",
        // color: Colors.secondary3 ,
        // // paddingBottom: '18%',
        // borderBottomColor: 'black',
        // borderBottomWidth: 1
        paddingTop: '0.1%',
        fontSize: 20,
        color: Colors.secondary3 ,
        borderBottomColor: 'black',
        borderBottomWidth: 1
      },
});
export default  Social_Screen5;