import { StyleSheet } from 'react-native';
import Colors from '../../Items/Colors';

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  label: {
    fontSize: 16,
    fontWeight: '800', // ExtraBold
    color: Colors.secondary2,
    lineHeight: 24,
  },

  input: {
    fontSize: 18,
    fontWeight: 'normal',
    borderBottomColor: Colors.secondary2,
    borderBottomWidth: 1,
    color: Colors.secondary2,
    lineHeight: 28,
  },

  input_onFocus: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },

})

export default styles; 