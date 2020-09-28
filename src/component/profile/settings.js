import React, {useState} from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Feather } from '@expo/vector-icons';

// const Main = props => {
//     const [isSwitchEnabled, setSwitch] =React.useState(false)
//         return(
//         <View style={styles.container}>
//             <Text style={styles.head1}> {props.label1}</Text>
//             <Text style={styles.head1}> {props.label2}</Text>
//         </View>
//     )
// };




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
            <Text style={styles.top1}><Feather name="chevron-left" size={15} color= {Colors.primary2} />Back</Text>
            <Text style={styles.top2}>Settings</Text>
        </View>

        <View style={styles.container}>
            <View style={styles.block1}>
                <Text style={styles.head1}>Night mode</Text>
                <Switch
                value={SwitchNight}
                onValueChange={(value)=> setSwitchNight(value)}
                trackColor={{true: 'green'}}
                />
            </View>
            <View style={styles.block2}>
                <Text style={styles.head1}>Stay logged in</Text>
                <Switch
                value={SwitchLogged}
                onValueChange={(value)=> setSwitchLogged(value)}
                trackColor={{true: 'green'}}
                />
            </View>
            <View style={styles.block3}>
                <Text style={styles.head1}>Allow push notifications</Text>
                <Switch
                value={SwitchPush}
                onValueChange={(value)=> setSwitchPush(value)}
                trackColor={{true: 'green'}}
                />
            </View>
            <View style={styles.block4}>
                <Text style={styles.head1}>allow email</Text>
                <Switch
                value={SwitchEmail}
                onValueChange={(value)=> setSwitchEmail(value)}
                trackColor={{true: 'green'}}
                />
            </View>
            <View style={styles.block5}>
                <Text style={styles.head1}>save events to calender</Text>
                <Switch
                value={SwitchCalender}
                onValueChange={(value)=> setSwitchCalender(value)}
                trackColor={{true: 'green'}}
                />
            </View>
            <View style={styles.block6}>
                <Text style={styles.head1}>units of measurements</Text>
                <Text style={styles.head1}>{props.Unit} </Text>

            </View>
        </View>
{/*
        <Main label1='Night mode ' label2={<Switch value={isSwitchEnabled} onValueChange={(value) => setSwitch(value)} trackColor= {{true: 'green'}}} /> />
        <Main label1='Stay logged in ' label2={<Switch value={isSwitchEnabled} onValueChange={(value) => setSwitch(value)} trackColor={{true: 'green'}}}></Main> />
        <Main label1='Allow push notifiations ' />
        <Main label1='Allow email updates ' />
        <Main label1='Save events to calender ' />
        <Main label1='Units of measurement '  label2='Kilometers' /> */}

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
        backgroundColor: "#ffffff",
        marginTop: "7%",
    },
    containerhead: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: Colors.primary4

    },
    container: {
        flex: 5,
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",

    },
    block1: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "grey",
        borderBottomWidth: 0.5,
        height: 45

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
    }
});

export default SettingScreen;