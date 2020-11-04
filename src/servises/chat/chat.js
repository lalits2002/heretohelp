import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const Chat_Screen = props => {
  return (
    <View style={styles.screen} >
      <Text>Chat_Screen</Text>
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

export default Chat_Screen;