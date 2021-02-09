import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from './styles';
import AppText from '../AppText/AppText';

const InputField = (props) => {

  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={ styles.container }>
      <AppText style={ styles.label }>{ props.label }</AppText>
      <TextInput
        style={[ styles.input, isFocused && styles.input_onFocus ]}
        secureTextEntry={ props.secureTextEntry }
        placeholder={ props.placeholder }
        placeholderTextColor={ props.placeholderTextColor || '#C7C7CD' }
        onChangeText={ text => { 
          setText(text);
          props.onChangeText(text);
        } }
        value={text}
        onFocus={ (e) => { setIsFocused(true) } }
        onBlur={ (e) => { setIsFocused(false) } }
        spellCheck={ props.spellCheck || false }
        keyboardType={ props.keyboardType || 'default'}
        autoCapitalize={ props.autoCapitalize || 'sentences' }
      />
    </View>
  )
}

export default InputField;