import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const PetScreen = props => {
    <View style={styles.petscreen} >
        <Text>PetScreen</Text>
    </View>
}

const styles = StyleSheet.create({
    petscreen: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default PetScreen;