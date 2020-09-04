import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';


import Top_container from './handy_head';
import CalenderComponent from '../CalenderComponent';
import Dark_Button from '../../Items/Buttons/dark-bt';
import Colors from '../../Items/Colors';


const HandyWork_Screen2 = props => {


  const [selectedDate, setDate] = useState("");
  const changeDate = (day) => {
    setDate(day);
  };

  console.log(props);


  return(
    <SafeAreaView style={{ ...styles.screen, ...props.style}}>


      {/* Top */}
      <View style={styles.top_box} >
        <Top_container
            title="Handy Work" 
            sub_head="Handyman Services"
            detail_2=" "
         />
      </View>
      {/* mid */}
      <View style={styles.mid_box}>
          <CalenderComponent getDate={changeDate} />
      </View>

    {/* bottom container */}
      <View style={styles.bottom_box}>
        <Dark_Button onPress={() => props.navigation.navigate('handyWorkScreen3', {
           ...props.route.params,
           selectedDate
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
    padding: '1.8%',
    paddingTop: '7%',
    backgroundColor: '#ffffff'
  },
  top_box:{
    flex: 4,
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: 'rgb(25,5,120)',
  },
  mid_box: {
    flex: 5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    // backgroundColor: "#86EC4F",
  },
  bottom_box: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: "100%",
    paddingLeft: '58%',
    paddingHorizontal: "2%",
    // backgroundColor: "#9811C9",
  },
});

export default HandyWork_Screen2
