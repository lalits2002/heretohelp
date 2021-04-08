import { State, PanGestureHandler } from 'react-native-gesture-handler';
import React, { useRef, useState } from "react";
import { View, Animated, Platform, Easing } from "react-native";
import AppText from '../AppText/AppText';
import Colors from '../../Items/Colors';
import styles from './WheelPickerStyles';
import PropTypes from 'prop-types';

const WheelPicker = (props) => {

  const generateWrapData = (data) => {
    let genData = [];
    for (let i = 0; i < 3; i++) {
      data.forEach(entry => {
        genData.push(entry);
      })
    }
    return genData;
  }

  const CONTAINER_HEIGHT = props.containerStyle.height;
  const ITEM_HEIGHT = props.itemStyle.height;
  const DATA_HEIGHT = props.data.length * ITEM_HEIGHT;

  const OFFSET = parseInt(CONTAINER_HEIGHT / ITEM_HEIGHT * 0.5);

  const INITIAL_INDEX = props.wrap
    ? props.data.length + (props.initialIndex || 0)
    : props.initialIndex || 0;

  const DATA = props.wrap
    ? generateWrapData(props.data)
    : props.data;

  const VELOCITY_MULTIPLIER = 0.1;
  
  const [snapY, setSnapY] = useState((-INITIAL_INDEX + OFFSET) * ITEM_HEIGHT);
  const [indexSelected, setIndexSelected] = useState(INITIAL_INDEX);

  const spinAnim = useRef(new Animated.Value((-INITIAL_INDEX + OFFSET) * ITEM_HEIGHT)).current;

  const wheelPerspective = [];
  const interpolatedWheelPerspective = [];
  DATA.forEach(() => {
    wheelPerspective.push( useRef(new Animated.Value((0))).current );
    interpolatedWheelPerspective.push(null);
  });

  const calculateFontSize = (fontSize, diff) => {
    return fontSize - (1 + Math.abs(diff)) * Math.abs(diff) > 0 
      ? fontSize - (1 + Math.abs(diff)) * Math.abs(diff) 
      : 0
  }

  const determineColor = (isSelected) => {
    if (isSelected)
      if (props.textStyle && props.textStyle.activeColor)
        return props.textStyle.activeColor

      else
        return Colors.primary1  

    else
      if (props.textStyle && props.textStyle.inactiveColor)
        return props.textStyle.inactiveColor

      else
        return Colors.inactive_picker
  }
  
  const setRotation = (currentIndex) => {
    let rotation;
    let min = currentIndex - OFFSET - 2 < 0
      ? 0
      : currentIndex - OFFSET - 2
    let max = currentIndex + OFFSET + 2 > DATA.length
      ? DATA.length
      : currentIndex + OFFSET + 2

    for (let i = min; i < max; i++) {
      rotation = Math.sqrt(Math.abs((currentIndex - i) % props.data.length)) * 90 / ( OFFSET + 1 );
      Animated.spring(wheelPerspective[i], {
        toValue: currentIndex - i + OFFSET < 0 ? -rotation : rotation,
        useNativeDriver: Platform.OS !== 'web' ? true : false,
      }).start();
      interpolatedWheelPerspective[i] = wheelPerspective[i].interpolate({
        inputRange: [-90, 90],
        outputRange: ['-90deg', '90deg'],
      })
    }
  } 
  setRotation(indexSelected);
 
  const adjustWrapPosition = (position) => {
    let adjustedPosition = position;
    while (adjustedPosition > -DATA_HEIGHT + OFFSET * ITEM_HEIGHT) {
      adjustedPosition -= DATA_HEIGHT;
    }

    while (adjustedPosition <= -2 * DATA_HEIGHT + OFFSET * ITEM_HEIGHT) {
      adjustedPosition += DATA_HEIGHT;
    }
    
    return adjustedPosition;
  }

  const snapToNearestItem = (evt) => {
    let dy = evt.nativeEvent.translationY + evt.nativeEvent.velocityY * VELOCITY_MULTIPLIER;
    let lowerIndex = parseInt((snapY + dy) / ITEM_HEIGHT);
    let upperIndex = snapY + dy < 0 ? lowerIndex-1 : lowerIndex+1;
    let newPosition;

    if (lowerIndex - OFFSET >= 0)
      newPosition = OFFSET * ITEM_HEIGHT;

    else if (lowerIndex - OFFSET <= -DATA.length+1) 
      newPosition = (-DATA.length+1 + OFFSET) * ITEM_HEIGHT;

    else if (Math.abs(snapY + dy - lowerIndex * ITEM_HEIGHT) < Math.abs(snapY + dy - upperIndex * ITEM_HEIGHT)) 
      newPosition = lowerIndex * ITEM_HEIGHT;

    else
      newPosition = upperIndex * ITEM_HEIGHT

    
    if (props.wrap) {
      let wrapPosition = adjustWrapPosition(newPosition);
      setSnapY(wrapPosition)

      let currentIndex = parseInt(wrapPosition / ITEM_HEIGHT) - OFFSET;
      setIndexSelected(-currentIndex);
  
      if (-currentIndex >= 0 && -currentIndex < DATA.length)
        props.setSelected(DATA[-currentIndex].value);

      Animated.parallel([
        Animated.spring(spinAnim, {
          toValue: (newPosition),
          useNativeDriver: Platform.OS !== 'web' ? true : false,
        }),
        Animated.timing(spinAnim, {
          duration: 0,
          toValue: (wrapPosition),
          useNativeDriver: Platform.OS !== 'web' ? true : false,
        }),
      ]).start();

    } else {
      setSnapY(newPosition)
      
      let currentIndex = parseInt(newPosition / ITEM_HEIGHT) - OFFSET;
      setIndexSelected(-currentIndex);
  
      if (-currentIndex >= 0 && -currentIndex < DATA.length)
        props.setSelected(DATA[-currentIndex].value);

      Animated.spring(spinAnim, {
        toValue: (newPosition),
        useNativeDriver: Platform.OS !== 'web' ? true : false,
      }).start();
    } 
    
  }

  const scrollAnimStateChange = (evt) => {
    if (evt.nativeEvent.state === State.END) {
      snapToNearestItem(evt);
    }
  }

  const setCurrentSelection = (evt) => {
    let dy = evt.nativeEvent.translationY;
    let lowerIndex = parseInt((snapY + dy) / ITEM_HEIGHT);
    let upperIndex = snapY + dy < 0 ? lowerIndex-1 : lowerIndex+1;
    let currentIndex;

    if (lowerIndex - OFFSET >= 0) 
      currentIndex = 0;
  
    else if (lowerIndex - OFFSET <= -DATA.length+1) 
      currentIndex = -DATA.length+1;

    else if (Math.abs(snapY + dy - lowerIndex * ITEM_HEIGHT) < Math.abs(snapY + dy - upperIndex * ITEM_HEIGHT))
      currentIndex = lowerIndex - OFFSET;

    else
      currentIndex = upperIndex - OFFSET;
    
    if (currentIndex !== indexSelected)
        setIndexSelected(-currentIndex);
  }

  const scrollAnim = (evt) => {
    if (evt.nativeEvent.state === State.ACTIVE) {
      Animated.spring(spinAnim, {
        toValue: (snapY + evt.nativeEvent.translationY),
        useNativeDriver: Platform.OS !== 'web' ? true : false,
      }).start();

      setCurrentSelection(evt);
    }
  }

  return (
    <PanGestureHandler 
      onGestureEvent={ scrollAnim } 
      onHandlerStateChange={ scrollAnimStateChange }
    >
      <View style={[
        props.containerStyle,
        {
          overflow: 'hidden',
        }
      ]}>
        <Animated.View style={{ 
          transform: [{ translateY: spinAnim }], 
        }}>
          {
            DATA.map((item, index) => {
              let isSelected = false;
              let diff = Math.abs(indexSelected - index);

              if (diff === 0)
                isSelected = true;

              if (index < indexSelected - OFFSET - 2 || index >= indexSelected + OFFSET + 2)
                return (
                  <Animated.View 
                    style={props.itemStyle}
                    key={index}
                  >
                  </Animated.View>
                )

              return (
                <Animated.View 
                  style={[ 
                    props.itemStyle, 
                    {
                      transform: [{ rotateX: interpolatedWheelPerspective[index] }],
                      opacity: isSelected ? 1 : 1 - 0.2 * Math.abs(diff),
                    },
                  ]}
                  key={index}
                >
                  <AppText
                    style={[
                      props.textStyle,
                      {
                        color: determineColor(isSelected),
                        fontSize: props.textStyle
                          ? props.textStyle.fontSize
                            ? calculateFontSize(props.textStyle.fontSize, diff)
                            : calculateFontSize(23, diff)
                          : calculateFontSize(23, diff),
                      }
                    ]}
                  >{ item.label }</AppText>
                </Animated.View>
              )
            }) 
          }
        </Animated.View>
        <View style={ styles.selectionFrame(OFFSET, ITEM_HEIGHT) } />
      </View>
    </PanGestureHandler>
  )

}

WheelPicker.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
      value: PropTypes.any
    })
  ),

  containerStyle: PropTypes.shape({
    height: PropTypes.number.isRequired
  }).isRequired,

  itemStyle: PropTypes.shape({
    height: PropTypes.number.isRequired
  }).isRequired,

  textStyle: PropTypes.shape({
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    fontSize: PropTypes.number
  }),

  setSelected: PropTypes.func,
  initialIndex: PropTypes.number,
  wrap: PropTypes.bool
}

export default WheelPicker;
