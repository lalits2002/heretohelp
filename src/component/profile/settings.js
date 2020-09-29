import React, {useState} from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Feather } from '@expo/vector-icons';
import Colors from '../../Items/Colors'



const SettingScreen = props => {

    const {Unit, changeUnit} = useState('miles');
    const [SwitchNight, setSwitchNight] =useState(false)
    const [SwitchLogged, setSwitchLogged] =useState(false)
    const [SwitchPush, setSwitchPush] =useState(false)
    const [SwitchEmail, setSwitchEmail] =useState(false)
    const [SwitchCalender, setSwitchCalender] =useState(false)

    return(
    <View style={styles.screen} >
        <View style={styles.containerhead}>
            <View style={{flex: 1, flexDirection: "row", alignItems: "flex-start", paddingLeft: "2%" }}>
            <Text style={styles.top1}><Feather name="chevron-left" size={15} color= {Colors.primary2} />Back</Text></View>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-start", paddingRight: "6%" }}>
            <Text style={styles.top2}>Settings</Text></View>
        </View>

        <View style={styles.container}>
            <View style={styles.block1}>
                <Text style={styles.head1}>Night mode</Text>
                <Switch
                value={SwitchNight}
                onValueChange={(value)=> setSwitchNight(value)}
                trackColor={{false: "#767577", true: '#27ed11'}}
                thumbColor={SwitchNight? "#f4f3f4" : "#f4f3f4"}
                />
            </View>
            <View style={styles.block2}>
                <Text style={styles.head1}>Stay logged in</Text>
                <Switch
                value={SwitchLogged}
                onValueChange={(value)=> setSwitchLogged(value)}
                trackColor={{false: "#767577", true: '#27ed11'}}
                thumbColor={SwitchLogged? "#f4f3f4" : "#f4f3f4"}
                />
            </View>
            <View style={styles.block3}>
                <Text style={styles.head1}>Allow push notifications</Text>
                <Switch
                value={SwitchPush}
                onValueChange={(value)=> setSwitchPush(value)}
                trackColor={{false: "#767577", true: '#27ed11'}}
                thumbColor={SwitchPush? "#f4f3f4" : "#f4f3f4"}
                />
            </View>
            <View style={styles.block4}>
                <Text style={styles.head1}>Allow email</Text>
                <Switch
                value={SwitchEmail}
                onValueChange={(value)=> setSwitchEmail(value)}
                trackColor={{false: "#767577", true: '#27ed11'}}
                thumbColor={SwitchCalender? "#f4f3f4" : "#f4f3f4"}
                />
            </View>
            <View style={styles.block5}>
                <Text style={styles.head1}>Save events to Calender</Text>
                <Switch
                value={SwitchCalender}
                onValueChange={(value)=> setSwitchCalender(value)}
                trackColor={{false: "#767577", true: '#27ed11'}}
                thumbColor={SwitchCalender? "#f4f3f4" : "#f4f3f4"}
                />
            </View>
            <View style={styles.block6}>
                <Text style={styles.head1}>units of measurements</Text>
                <Text style={styles.head1}>{props.Unit} </Text>

            </View>
        </View>


        <View style={styles.bottomspace}></View>

    </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.primary4,
        marginTop: "5%",

        // padding: "2%",
    },
    containerhead: {
        flex: 0.8,
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignSelf: "center",
        alignItems: "center",
        // backgroundColor: Colors.primary4

    },
    container: {
        flex: 2.8,
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#ffffff"



    },
    bottomspace: {
        width: "100%",
        flexDirection: "column",
        flex: 2.85


    },
    block1: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "grey",
        borderBottomWidth: 0.5,
        height: 50

    },
    block2: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "grey",
        borderBottomWidth: 0.5,
        height: 45

    },
    block3: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "grey",
        borderBottomWidth: 0.5,
        height: 45

    },
    block4: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "grey",
        borderBottomWidth: 0.5,
        height: 45

    },
    block5: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "grey",
        borderBottomWidth: 0.5,
        height: 45

    },
    block6: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "grey",
        borderBottomWidth: 0.5,
        height: 45

    },
    head1: {
        fontSize: 15,
        alignSelf: "center",
        color: Colors.primary2,
        paddingLeft: "2%"
    }
});

export default SettingScreen;