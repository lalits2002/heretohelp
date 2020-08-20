import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';



import Volunteer_Components from './home/volunteer-component';
import Tabscreen from './TabScreen/TabScreen';


const Volunteer_Components = props => {
  return(
    <View style={styles.container}>
      
        <View style={styles.head} >
          <Text style={styles.Heading}> What Can You Help With ? </Text>
        </View>

        <View style={styles.social}>
          <Social />
        </View>

        <View style={styles.social}>
          <Pet />
        </View>

        <View style={styles.social}>
          <Handy  />
        </View>

        <View style={styles.social}>
         <Transport />
        </View>

      </View>
  );
};




// Upper screen component for volunteer
let screen  = <Volunteer_Components />


const Volunteer = props => {

  return (
    <View style={{...styles.screen, ...props.style}}>{props.children}
      {screen}
      <View style={styles.container2}>
        <Tabscreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex:1,
    flexDirection: 'column',
   
  },
  container: {
    flex: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    // paddingTop: '8%',
    backgroundColor: '#E5E5E5',
    paddingBottom: '4%'
  },
  head: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '2%',
  },
  social:{
    marginHorizontal: '4%',
    marginVertical: '2.4%',
    height: '18.6%',
    
  },
  container2: {
    flex: 1,
    paddingTop: '7%',
    backgroundColor: 'white',
  },

  Heading: {
    fontSize: 22,
    fontWeight: '100',
    padding: '1%',
    
    },
});

export default Volunteer;

