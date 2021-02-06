import React from 'react';
import AppText from '../AppText/AppText';
import styles from './styles';

const ErrMsg = (props) => {
  return (
    <AppText style={[ styles.color, props.style ]}>
      { props.children }
    </AppText>
  )
}

export default ErrMsg;