import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import CalenderComponent from './CalenderComponent';
import Dark_Button from '../../Items/Buttons/dark-bt';
import Colors from '../../Items/Colors';


const HandyWork_Screen2 = props => {

  const navigation = useNavigation();
  const [selectedDate, setDate] = React.useState("");
  const changeDate = (day) => {
    setDate(day);
  };


  console.log(selectedDate);
  console.log(props);


  return(
    <SafeAreaView style={{ ...styles.screen, ...props.style}}>

      <View style={styles.top} >
        <TouchableOpacity  onPress={() => {navigation.goBack()}} >
          <Text style={styles.back}><Feather name="chevron-left" size={15} color= {Colors.primary3} />Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container1}>
        <Text style={styles.head}>Handywork</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Handyman Service</Text>
      </View>

      <View style={styles.container3}>
        <Image
          resizeMode="contain"
          style={{
            height: "100%",
            width: "27%",
            alignSelf: "center",
          }}
          // change the source of the image
          source={require('../../Items/Icons/calender.jpeg')}
        />
      </View>
      <View style={styles.container4}>
        <Text style={styles.head2}></Text>
        <Text style={styles.head2}> What is your requested date?</Text>
        <Text style={styles.head2}></Text>
       
      </View>
      <View style={styles.container5}>
          <CalenderComponent getDate={changeDate} />
      </View>
      <View style={styles.container6}>
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
    marginTop: '7%',
    backgroundColor: '#ffffff'
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
    // backgroundColor: "#C6C438",
  },
  container2: {
    flex: 0.5,
    width: "100%",
    // backgroundColor: "#A596D3",
  },
  container3: {
    flex: 1.8,
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: "2%",
    // backgroundColor: "#C6C438",
  },
  container4: {
    flex: 0.8,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    // backgroundColor: "#267DA5",
  },
  container5: {
    flex: 6,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    // backgroundColor: "#86EC4F",
  },
  container6: {
    flex: 1.1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: "100%",
    paddingLeft: '58%',
    paddingHorizontal: "2%",
    // backgroundColor: "#9811C9",
  },
  back:{
    alignSelf: "flex-start",
    fontSize: 16,
    color: Colors.primary2,
  },
  head: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.primary1,
  },
  head2: {
    alignSelf: "flex-start",
    fontSize: 19,
    color: Colors.primary2,
  },
  head3: {
    fontSize: 17.5,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default HandyWork_Screen2
