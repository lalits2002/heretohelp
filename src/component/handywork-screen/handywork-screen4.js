import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView }
  from 'react-native';

import Top_container from './handy_head';
import Dark_Button from '../../Items/Buttons/dark-bt';
import Colors from '../../Items/Colors';


const HandyWork_Screen4 = props => {


  const [value, onChangeText] = useState();

  console.log(props);

    return(
      <SafeAreaView style={{ ...styles.screen, ...props.style}}>

      <View style={styles.top_box}>
        <Top_container
          title="Handy Work"
          sub_head="Handyman Services"
          detail_3="Additional Details"
        />
      </View>

      <View style={styles.mid_box}>
        <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder= {'Enter Text'}

          />
      </View>
      <View style={styles.bottom_box}>
        <Dark_Button onPress={() => props.navigation.navigate('handyWorkScreen5', {
           ...props.route.params,
           note: value
        })} >
          <Text style={{fontSize: 18}}> Next</Text>
        </Dark_Button>
      </View>
    </SafeAreaView>


  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.8%",
    backgroundColor: '#ffffff',
    paddingTop: '7%'
  },
  top_box:{
    flex: 4,
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgb(25,5,120)',
  },

  mid_box: {
    flex: 3.4,
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: "center",
    paddingTop: '20%',
    paddingHorizontal: '1%',
    // backgroundColor: "#86EC4F",
  },
  bottom_box: {
    flex: 1.2,
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: "2%",
    paddingLeft: '60%',
    // backgroundColor: "#9811C9",
  },

  input: {
    fontSize: 20,
    color: Colors.secondary3 ,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});

export default HandyWork_Screen4;