import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../../Items/Colors';
import { useNavigation } from '@react-navigation/native';
import Dark_Button from '../../Items/Buttons/dark-bt';
import Button2 from '../../Items/Buttons/light-bt';

const Social_Screen2 = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.back}>
            <Feather name='chevron-left' size={15} color={Colors.primary3} />
            Back
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <Text style={styles.head}>Socialise</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.head2}>Coffee meetup</Text>
      </View>
      <View style={styles.container3}>
        <Image
          source={require('../h2h/s5.png')}
          resizeMode='contain'
          style={{
            width: '100%',
            height: '100%',
            alignSelf: 'center',
          }}
        />
      </View>
      <View style={styles.container4}>
        <Text style={styles.head3}>Select your preference</Text>
      </View>
      <View style={styles.container5}>
        <Text> </Text>
        <Dark_Button>
          <Text>I am flexible with time and location</Text>
        </Dark_Button>

        <Text> </Text>
        <Button2 style={{}}>
          <Text>I have a specific time and location</Text>
        </Button2>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.6%',
    paddingTop: '7%',
    backgroundColor: '#ffffff',
  },
  top: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingTop: '3%',
    // backgroundColor: '#A596D3',
  },
  container1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

    width: '100%',
    //backgroundColor: '#fcba03',
  },
  container2: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    //backgroundColor: '#A596D3',
  },
  container3: {
    flex: 5,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    //backgroundColor: "#fcba03",
  },
  container4: {
    flex: 1.5,
    width: '100%',
    //backgroundColor: '#A596D3',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container5: {
    paddingTop: '1%',
    flex: 6,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    //backgroundColor: '#fcba03',
  },

  head: {
    fontSize: 25,
    fontWeight: 'bold',

    color: Colors.primary1,
  },
  head2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary2,
  },
  head3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary2,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default Social_Screen2;
