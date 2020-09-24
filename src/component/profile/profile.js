import React, { useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView  } from 'react-native';
import { Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import Colors from '../../Items/Colors';
// import { useState } from 'react';


const ProfileScreen = props => {
    const navigation = useNavigation();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    return(

    <SafeAreaView style={styles.screen} >
        <ScrollView contentContainerStyle={styles.scroll}>

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
             <Input style={styles.input}
             placeholder='John '
             label="Firstname"
             value={firstname}
             onChangeText={setFirstname}
             autoCorrect={false}
             />
             </View>

             <View style={styles.block1}>
             <Input style={styles.input}
             placeholder='Doe'
             label="Lastname"
             value={lastname}
             onChangeText={setLastname}
             autoCorrect={false}
             />
             </View>

             <View style={styles.block1}>
             <Input style={styles.input}
             placeholder='hello@here2helpapp.com'
             label="email"
             value={email}
             onChangeText={setEmail}
             autoCorrect={false}
             />
             </View>

             <View style={styles.block1}>
             <Input style={styles.input}
             placeholder='Address'
             label="1499 Bilabong st.54/A"
             value={address}
             onChangeText={setAddress}
             autoCorrect={false}
             />
             </View>

             <View style={styles.block1}>
             <Input style={styles.input}
             placeholder='Phone'
             label="604 555-5555"
             value={phone}
             onChangeText={setPhone}
             autoCorrect={false}
             />
             </View>


             <View style={styles.block1}>
                 <Text><Feather name="chevron-right" size={15} rightIcon color= {Colors.primary3} /></Text>
                 <TextInput
                 style={styles.input}
                 editable={true}
                //  placeholder={"john doe"}
                 value={""} />
             </View>


         </View>



         </ScrollView>

    </SafeAreaView>
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
    scroll: {
        flexGrow: 1,
        justifyContent: "center"
    },

    tophead: {
        flex: 0.2,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        // alignSelf: "flex-start",
        // backgroundColor: "#ffffff"
    },
    box1: {
        flex: 1.5,
        width: "100%",
        flexDirection: "column",
        alignItems: "center"

    },
    box2: {
        flex: 4,
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
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.primary1,
        alignSelf: "center"
    },
    input: {
        paddingTop: '2.5%',
        paddingLeft: "60%",
        paddingBottom: "2%",
        fontSize: 20,
        color: Colors.secondary3 ,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
      },

});

export default ProfileScreen;