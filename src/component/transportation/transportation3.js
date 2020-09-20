import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView } from 'react-native';

import TimePicker from '../timePicker/timePicker';
import Dark_Button from '../../Items/Buttons/dark-bt';
import Top_container from './Transport_head';
import Colors from '../../Items/Colors';

const Transport_screen3 = props => {
  console.log(props);


  const [Hour, setHour] = useState(0);
  const [Minute, setMinute] = useState(0);
  const [Meridian, setMeridian] = useState(0);

  const hourHandler = (Hour) => {
    setHour(Hour);
    console.log(Hour);
  };
  const minHandler = (Min) => {
    setMinute(Min);
    console.log(Min);
  };
  const AmPmHandler = (AmPm) => {
    setMeridian(AmPm);
    console.log(AmPm);
  };


    return (
      <SafeAreaView style={{ ...styles.screen, ...props.style}}>


      <View style={styles.top_box} >
        <Top_container
            title="Transportation"
            sub_head="Transport Services"
            detail_1="Friday, june 5, 2020"
            detail_3="What time do you request?"
         />
      </View>

      <View style={styles.mid_box}>
          <TimePicker
            getMin={minHandler}
            getHour={hourHandler}
            getMeridian={AmPmHandler}
          />
      </View>
      <View style={styles.bottom_box}>
        <Dark_Button onPress={() => props.navigation.navigate('Transport_screen4', {
           ...props.route.params,
           time: { Hour, Minute, Meridian }
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
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '4%',
    backgroundColor: '#ffffff',
    padding: '1.8%'
  },
  top_box: {
    flex: 4,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    paddingTop: '2.8%',
    // backgroundColor: '#c65df0'
  },
   mid_box: {
    flex: 4.5,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    // backgroundColor: "#6dc2ed",
  },
   bottom_box: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: "2%",
    paddingLeft: '60%',
    // backgroundColor: "#6ded8f",
  },

  back:{
    alignSelf: "flex-start",
    fontSize: 16,
    color: Colors.primary2,
  },


  head: {
    fontSize: 20,
    fontWeight: 'bold',
    // color: Colors.primary1
  },
  head1: {
    fontSize: 15.2,
    color: Colors.primary2

  },
   head2: {
     fontSize: 18,
    //  fontWeight: 'bold',
     color: Colors.primary2,
     justifyContent: 'center',
     paddingBottom: '3%'
   },
   head3: {
     fontSize: 18,
     fontWeight: 'bold',
     color: Colors.primary2,
     justifyContent: 'center'
   }

});

export default Transport_screen3;