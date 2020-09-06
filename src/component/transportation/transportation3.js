import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';


import Dark_Button from '../../Items/Buttons/dark-bt';
import Top_container from './Transport_head';

const Transport_screen3 = props => {
  console.log(props);


  const data = {...props.route.params};

  const getDate = data.selectedDate;
  console.log(getDate);



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

      <View style={styles.mid_box}></View>
      <View style={styles.bottom_box}>
        <Dark_Button onPress={() => props.navigation.navigate('Transport_screen4', {
           ...props.route.params,
           time: 'anu'
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
  top: {
    flex: 0.4,
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
    alignSelf:'flex-start'
    // backgroundColor: '#f72f54'
  },
    container2: {
    flex: 0.4,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start'
    // backgroundColor: '#e8a643'
  },
    container3: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // backgroundColor: '#5cc4c1'
  },
    container4: {
    flex: 0.45,
    width: '100%',
    flexDirection: 'column',
    // backgroundColor: '#eef51b',
    paddingTop: '5%',
  },
    container5: {
    flex: 2,
    width: '100%',
    flexDirection: 'column',
    // backgroundColor: '#ed64a4'
  },
    container6: {
    flex: 0.6,
    width: '100%',
    flexDirection: 'column',
    paddingLeft: '56%',
    paddingBottom: '1.4%'
    // backgroundColor: '#18f096'
  },
   back:{
    alignSelf: "flex-start",
    fontSize: 16,
    color: Colors.primary2,
  },

  head: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary1
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
    //  fontWeight: 'bold',
     color: Colors.primary2,
     justifyContent: 'center'
   }

});

export default Transport_screen3;