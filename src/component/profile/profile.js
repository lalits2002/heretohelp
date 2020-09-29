import React from 'react';
import { Avatar, Accessory } from 'react-native-elements';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import Colors from '../../Items/Colors';
// import { useState } from 'react';


const Box = props => {
  return(
    <View style={styles.container}>

      <TouchableOpacity style={styles.block1A} onPress={props.onPress}>
        <Text style={{alignSelf: "center", fontSize: 15, color: Colors.secondary3}}>{props.lable1} </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.block1B} onPress={props.onPress}>
        <Text style={{alignSelf: "center", fontSize: 15, color: Colors.secondary3}}>{props.lable2} </Text>
     </TouchableOpacity>

    </View>
  )
};


const ProfileScreen = props => {

  const navigation = useNavigation();

  return(
    <View style={styles.screen} >

      <ScrollView style={{ width: '100%'}} >

        <View style={styles.containerTop}>
          <Text style={styles.top1}><Feather name="chevron-left"  size={15} color= {Colors.primary2} /> Back </Text>
          <Text style={styles.top2}>Profile </Text>
          <Text style={styles.top3}>Edit </Text>
        </View>

         <View style={styles.profile}>

         <Avatar

            size={140}
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}>
              <Accessory />
            </Avatar>

            <Text style={{fontSize: 18, fontWeight: "bold", color: Colors.primary2 }}>Janel Dunsworth</Text>
             <Text></Text>
            <Text style={{ fontSize: 15,  alignSelf: "center", paddingLeft: "3%"}}>
                 Enter short bio here. lorem ispum dolor amet,
                 constructoradipiscing elit. Accuan, urna,viverra,
                 faucibus auctor in  euismod  id nullam.
            </Text>

         </View>

      <Box lable1='FirstName' lable2='mayank'/>
      <Box lable1='LastName' lable2='kumar'/>
      <Box lable1='Email' lable2='hello@hereapp.com'/>
      <Box lable1='Change Password' lable2={<Feather name="chevron-right" size={22} color= {Colors.secondary3} />} />
      <Box lable1='Address' lable2='1499 BIlabong St. 54/A'/>
      <Box lable1='Phone' lable2='604-555-5555'/>
      <Box lable1='Criminal record check'/>
      <View style={styles.spacing}></View>
        <Box
              lable1='Settings'
              lable2={<Feather name="chevron-right" size={22}
              color= {Colors.secondary3} />}
              onPress={() => {navigation.navigate('submit')}}
        />
      <View style={styles.spacing}></View>
      <Box lable1='Times volunteered' lable2='7'/>
      <Box lable1='Tasks Requested' lable2='4' />
      <View style={styles.spacing}></View>
      <Box lable1='Help'  />
      <Box lable1='Terms of Service ' onPress={() => {navigation.navigate('terms')}} />
      <Box lable1='Privacy Policy' onPress={() => {navigation.navigate('privacy')}} />
      <Box lable1='Submit Feedback '  onPress={() => {navigation.navigate('feedback')}} />
      <Box lable1='Delete Account' />
      <Box lable1='Log out from Account'  />
      <View style={styles.spacing}></View>


      </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        width: "100%",
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: "#ffffff",
        marginTop: "5%",
    },
    container: {
        width: "100%",
        height: 45,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.secondary3,

    },
    containerTop: {
      height: 50,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: Colors.primary4,
      // paddingBottom: "3%"



    },

    spacing: {
      width: '100%',
      paddingVertical: 20,
      backgroundColor: Colors.primary4 ,
    },
    profile: {
      width: "100%",
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignItems: "center",
      borderBottomWidth: 0.5,
      borderBottomColor: Colors.secondary3,
      paddingBottom: "7%",
      paddingTop: "4%"
    },
    // // box2: {
    // //     // flex: 3,
    // //     flexDirection: "column",
    // //     width: "100%",


    // },

    top1: {
        alignSelf: "center",
        fontSize: 15,
        color: Colors.primary2,

    },
    top2: {

        alignSelf: "center",
        fontSize: 15,
        color: Colors.primary2,
        // paddingBottom: "1%",
    },
    top3: {

        alignSelf: "center",
        fontSize: 15,
        color: Colors.primary2,
        paddingRight: "1%"
        // paddingTop: "0.2%",
    },
    block1: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 2,
        borderBottomWidth: 2,
    },
    block2: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    block1A: {

        alignItems: "center",
        paddingLeft: "2%",

    },
    block1B: {
         paddingRight: "2%",
    },




});

export default ProfileScreen;