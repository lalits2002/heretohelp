import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import Colors from '../../Items/Colors';
import Dark_Button from '../../Items/Buttons/dark-bt';
import { color } from 'react-native-reanimated';

const FeedbackScreen = props => {
    const navigation = useNavigation();

    return(
        <View style={styles.screen}>

            <View style={styles.tophead}>
            <TouchableOpacity onPress={() => {navigation.goback()}}>
                <Text style={styles.top1}><Feather name="chevron-left" size={15} color= {Colors.primary3} /> Back </Text>
            </TouchableOpacity>
            <Text style={styles.top2}>Feedback </Text>
            <Text style={styles.top3}>Edit   </Text>
            </View>

            <View style={styles.mid1}>
                <Text style={styles.head1}>Submit feedback</Text>
                <Text></Text>
                {/* <Text></Text> */}
                <Text style={styles.head2}>We would love to hear from you.If you have any comments, suggestions, or
                feedback send us a message and we will be in touch shortly</Text>
            </View>


           <View style={styles.midbox}>
          <View style={styles.mid2}>
            <Text style={styles.head3}>Name</Text>
              <TextInput
                style={styles.input}
                editable={false}
                placeholder={"Enter Here"} />
                {/* // value={value} /> */}
           </View>

          <View style={styles.mid2} >
            <Text style={styles.head3}>Email</Text>
              <TextInput
                style={styles.input}
                editable={false}
                placeholder={"email@email.com"} />
                {/* value={value} /> */}
           </View>

          <View style={styles.mid2} >
            <Text style={styles.head3}>Phone</Text>
              <TextInput
                style={styles.input}
                editable={false}
                placeholder={"(555) 555- 555"} />
                {/* value={value} /> */}
          </View>

          <View style={styles.mid2} >
            <Text style={styles.head3}>Message</Text>
              <TextInput
                style={styles.input}
                editable={false}
                placeholder={"Message"} />
                {/* // value={value} /> */}
            </View>
            </View>

        <View style={styles.bottom}>
            <Dark_Button>
              <Text style={{fontSize: 18}}> Submit</Text>
            </Dark_Button>
      </View>


        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center",
        padding: "2%",
        paddingTop: "7%",
    },
    tophead: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.primary4,

    },
    mid1: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        width: "100%",
        justifyContent: "flex-start",

    },
    midbox:{
        flex: 4,
        width: "100%",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        paddingTop: "20%",


    },
    bottom: {
        flex: 3,
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "center",
        paddingHorizontal: "2%",
        paddingLeft: "25%",
        paddingRight: "25%",


    },


    top1: {
        alignSelf: "flex-start",
        fontSize: 15,
        color: Colors.primary3,

    },
    top2: {

        alignSelf: "flex-start",
        fontSize: 15,
        alignSelf: "center",
        color: Colors.primary3,
        // paddingBottom: "1%"
    },
    top3: {

        alignSelf: "flex-start",
        fontSize: 15,
        color: Colors.primary3,
        alignSelf: "center",
        // paddingTop: "0.2%"
    },
    mid2:{
        width: "100%",
        flexDirection: "column",
        flex: 4,
    },
    head1: {
        fontSize: 15,
        fontWeight: "bold",
        color: Colors.primary1,
        alignSelf: "center"

    },
    head2: {
        alignSelf: "center",
        paddingLeft: "2%"

    },
    head3: {
        fontSize: 15,
        fontWeight: "bold",
        color:Colors.secondary2,
        alignSelf: "flex-start"

    },
    input: {
        paddingTop: '1%',
        fontSize: 16,
        color: Colors.secondary3 ,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom: "0%",
      },


});

        export default FeedbackScreen;