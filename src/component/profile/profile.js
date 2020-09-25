import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, SafeAreaView,  } from 'react-native';

import { Feather } from '@expo/vector-icons'
import Colors from '../../Items/Colors';
// import { useState } from 'react';


const ProfileScreen = props => {


    return(

    <View style={styles.screen} >


         {/* tophead of the screen   */}
        <View style={styles.tophead}>
        <TouchableOpacity onPress={() => {navigation.goback()}}>
                <Text style={styles.top1}><Feather name="chevron-left" size={15} color= {Colors.primary3} /> Back </Text>
            </TouchableOpacity>
            <Text style={styles.top2}>Profile </Text>
            <Text style={styles.top3}>Edit   </Text>
         </View>

         <View style={styles.box1}>
             <Text style={styles.name}>Janel Dunsworth</Text>
             <Text></Text>
             <Text style={{alignSelf: "center", paddingLeft: "2.5%"}}>
                 Enter short bio here. lorem ispum dolor amet,
                 constructoradipiscing elit. Accuan, urna,viverra,
                 faucibus auctor in  euismod  id nullam.
             </Text>

         </View>


             <View style={styles.box2}>
                 <View style={styles.block1}>
                     <View style={styles.block1A}>
                         <Text style={{alignSelf: "center", fontSize: 15, color= Colors.secondary2}}>FirstName</Text>
                     </View>
                     <View style={styles.block1B}>
                         <Text style={{alignSelf: "center", fontSize: 15, color= Colors.secondary2}}>Janel</Text>
                     </View>

                 </View>
             </View>




    </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "flex-start",
        // backgroundColor: "grey"
    },


    tophead: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        // alignSelf: "flex-start",
        backgroundColor: "#ffffff"
    },
    box1: {
        flex: 1.5,
        width: "100%",
        flexDirection: "column",
        alignItems: "center"

    },
    box2: {
        flex: 3,
        flexDirection: "column",
        width: "100%",


    },

    top1: {
        alignSelf: "flex-start",
        fontSize: 15,
        color: Colors.primary3,

    },
    top2: {

        alignSelf: "flex-start",
        fontSize: 15,
        color: Colors.primary3,
        paddingBottom: "1%"
    },
    top3: {

        alignSelf: "flex-start",
        fontSize: 15,
        color: Colors.primary3,
        paddingTop: "0.2%"
    },
    block1: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    block1A: {
        justifyContent: "flex-start",
        alignItems: "center"

    },



});

export default ProfileScreen;