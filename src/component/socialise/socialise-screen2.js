import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Social_Screen2 = props => {
    


    return (
    <View style={{ ...styles.screen, ...props.style}}>
      <Text>Social_Screen</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        height:'100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.6%',
        paddingTop: '7%',
        backgroundColor: '#ffffff',
        
    },
    

});

export default Social_Screen2;