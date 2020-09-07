import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, SafeAreaView} from 'react-native';


import Colors from '../../Items/Colors';
import Dark_Button from '../../Items/Buttons/dark-bt';
import Top_container from './Transport_head';



const Transport_screen4 = props => {

    const [value, onChangeText] = useState();



    return(
        <SafeAreaView style={{ ...styles.screen, ...props.style}}>

      <View style={styles.top_box} >
        <Top_container
            title="Transportation"
            sub_head="Transport Services"
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
        <Dark_Button onPress={() => props.navigation.navigate('Transport_screen5', {
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
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '7%',
        padding: '1.8%'


    },
    top_box: {
        flex: 4,
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        // backgroundColor: 'lightblue'
      },

      mid_box: {
        flex: 3.4,
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignSelf: "center",
        paddingTop: '20%',
        paddingHorizontal: '1%',
        // backgroundColor: "#f23d7c",
      },
      bottom_box: {
        flex: 1.2,
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: "2%",
        paddingLeft: '60%',
        // paddingLeft: '2%',
        // backgroundColor: "#9811C9",
      },

       input: {
        fontSize: 20,
        color: Colors.secondary3,
        borderBottomColor: "black",
        borderBottomWidth: 1,
      },
});
export default Transport_screen4;