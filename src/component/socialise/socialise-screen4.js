import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Dark_Button from '../../Items/Buttons/dark-bt';
import Colors from '../../Items/Colors';

const Social_Screen4 = props => {
  const navigation = useNavigation();
    return (
      <View style={{ ...styles.screen, ...props.style}}>

      <View style={styles.top} >
        <TouchableOpacity  onPress={() => {navigation.goBack()}} >
          <Text style={styles.back}>
            {/* <Feather name="chevron-left" size={15} color= {Colors.primary3} /> */}
            Back</Text>
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
        <Text style={styles.head3}> {'Friday'}, {'June 5'} , {'2020'}</Text>
        <Text style={styles.head3}></Text>
        <Text style={styles.head3}> What time do you request?</Text>
      </View>
      <View style={styles.container5}></View>
      <View style={styles.container6}>
        <Dark_Button onPress={() => props.navigation.navigate('socialscreen6')} >
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
    // backgroundColor: "#05ffea",
  },
  container1: {
    flex: 0.6,
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: "#C6C438",
  },
  container2: {
    flex: 0.6,
    width: "100%",
    flexDirection: 'column',
    // backgroundColor: "#ed0905",
  },
  container3: {
    flex: 1.8,
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: "2%",
    paddingBottom: '1%',
    // backgroundColor: "#9a83eb",

  },
  container4: {
    flex: 1.1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: '3%',
    // backgroundColor: "#c754c5",
  },
  container5: {
    flex: 4.8,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    // backgroundColor: "#a8744c",
  },
  container6: {
    flex: 1.2,
    width: "100%",
    flexDirection: 'column',
    // backgroundColor: "#9811C9",


  },
  back:{
    alignSelf: "flex-start",
    fontSize: 16,
    color: Colors.primary2,
  },
  head1: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.primary1,
  },
  head2: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: Colors.primary2,
  },
  head3: {
    fontSize: 17.5,
    alignSelf: 'flex-start',
    fontWeight: "bold",
    justifyContent: 'center'
  },
});

export default  Social_Screen4;