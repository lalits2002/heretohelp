import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const PrivacyScreen = props => {
    return(
    <View style={styles.screen} >
        <Text>PrivacyScreen</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default PrivacyScreen;