import React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import Colors from '../../Items/Colors';
import Dark_Button from '../../Items/Buttons/dark-bt';
import Button2 from '../../Items/Buttons/light-bt';
// import { color } from 'react-native-reanimated';


const Social_Screen2 = props => {
  const navigation = useNavigation();

    return (
      <SafeAreaView style={{ ...styles.screen, ...props.style}}>
      <View style={styles.top} >
        <TouchableOpacity  onPress={() => {navigation.goBack()}} >
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container1}>
      <Text style={styles.head1}>Socialise </Text>
      </View>

      <View style={styles.container2}>
        <Text style={styles.head2}>Coffee meetup</Text>
      </View>

      <View style={styles.container3}>
        <Image
        source={require('../h2h/s5.png')}
        resizeMode= 'contain'
        style={{
          width: '68%',
          height: '100%',
          alignSelf: 'center'
        }}
        />
      </View>

      <View style={styles.container4}>
        <Text style={styles.head3}>Select Your Preference</Text>
      </View>

      <View style={styles.container5}>
      </View>


      <View style={styles.container6}>
      <Dark_Button onPress={() => props.navigation.navigate('socialscreen3')}>
              <Text style={styles.head4}>I am flexible with time and location</Text>
          </Dark_Button>
        <Button2 onPress={() => props.navigation.navigate('socialscreen4')}>
          <Text style={styles.head4}>I have a specific time and location</Text>
        </Button2>
      </View>

     


      </SafeAreaView>

  )
}
const styles = StyleSheet.create({
screen: {
    flex: 1,
    height:'100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1%'
},
top: {
  flex:0.85,
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignSelf: 'flex-start',
  paddingTop: '3%'
  // backgroundColor: "#A596D3",
},
container1:{
  flex: 0.7,
  width: '100%',
  // backgroundColor: '#20b0d4'

},
container2:{
  flex: 0.3,
  width: '100%',
  // backgroundColor: '#512ad1'


},
container3:{
  flex: 3.2,
  width: '100%',
  // backgroundColor: '#37eb0e'

},
container4:{
  flex: 0.8,
  width: '100%',
  // backgroundColor: 'orange',
  flexDirection: 'column',
  justifyContent: 'center'


},
container5:{
  flex: 4,
  width: '100%',
  // backgroundColor: 'red'
},
container6:{
  flex: 2,
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  width: '100%',
  // paddingBottom: '6%',
  backgroundColor: '#d1a9a5'

},
container7:{
  flex: 1.7,
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  width: '100%',
  paddingBottom: '7%',
  // backgroundColor: '#eb8334'
},
back:{
  alignSelf: "flex-start",
  fontSize: 16,
  color: Colors.primary3,
},
head1: {
  fontSize: 25,
  fontWeight: 'bold',
  paddingLeft: '3%',
  paddingTop: '1%',
  color: Colors.primary1
},
head2:{
  fontSize: 18,
  paddingLeft: '3%',
  color: Colors.primary2


},
head3:{
  fontSize: 15,
  fontWeight: 'bold',
  alignSelf: 'center',
  alignContent: 'flex-end',
  justifyContent: 'space-evenly',
  paddingBottom: '2%',

},
head4: {
  fontSize: 14,
  fontWeight: 'bold',
  alignSelf: 'flex-start',
  alignItems: 'flex-start'


}
});
export default Social_Screen2;