import { State, PanGestureHandler } from 'react-native-gesture-handler';
import React, { useRef, useState } from "react";
import { View, Animated, Platform, Easing } from "react-native";
import AppText from '../AppText/AppText';
import Colors from '../../Items/Colors';

const WheelPicker = (props) => {

  // ----- WheelPicker Props -----
  // data: [ { label: __, }, ... ]
  // containerStyle: {
  //   width: 
  //   height: 
  // }
  // itemStyle: {
  //   height: 
  // }
  // setSelected: function
  // initialIndex: number
  // ------------------------------

  const OFFSET = parseInt(props.containerStyle.height / props.itemStyle.height * 0.5);
  const VELOCITY_MULTIPLIER = 0.1;
  const INITIAL_INDEX = props.initialIndex || 0;

  const [snapY, setSnapY] = useState((-INITIAL_INDEX + OFFSET) * props.itemStyle.height);
  const [indexSelected, setIndexSelected] = useState(INITIAL_INDEX);

  const spinAnim = useRef(new Animated.Value((-INITIAL_INDEX + OFFSET) * props.itemStyle.height)).current;

  const wheelPerspective = [];
  const interpolatedWheelPerspective = [];
  props.data.forEach(() => {
    wheelPerspective.push( useRef(new Animated.Value((0))).current );
    interpolatedWheelPerspective.push(null);
  });
  
  const setRotation = (currentIndex) => {
    let rotation;
    for (let i = 0; i < wheelPerspective.length; i++) {
      rotation = Math.sqrt(Math.abs(currentIndex - i)) * 90 / ( OFFSET + 1 );
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

  const snapToNearestItem = (evt) => {
    let dy = evt.nativeEvent.translationY + evt.nativeEvent.velocityY * VELOCITY_MULTIPLIER;
    let lowerIndex = parseInt((snapY + dy) / props.itemStyle.height);
    let upperIndex = snapY + dy < 0 ? lowerIndex-1 : lowerIndex+1;
    let newPosition;

    if (lowerIndex - OFFSET >= 0)
      newPosition = OFFSET * props.itemStyle.height;

    else if (lowerIndex - OFFSET <= -props.data.length+1) 
      newPosition = (-props.data.length+1 + OFFSET) * props.itemStyle.height;

    else if (Math.abs(snapY + dy - lowerIndex * props.itemStyle.height) < Math.abs(snapY + dy - upperIndex * props.itemStyle.height)) 
      newPosition = lowerIndex * props.itemStyle.height;

    else
      newPosition = upperIndex * props.itemStyle.height

    setSnapY(newPosition);

    if (Math.abs(evt.nativeEvent.velocityY) > 300) 
      Animated.timing(spinAnim, {
        duration: parseInt(Math.abs(evt.nativeEvent.velocityY)),
        easing: Easing.out(Easing.ease),
        toValue: (newPosition),
        useNativeDriver: Platform.OS !== 'web' ? true : false,
      }).start();
    else 
      Animated.spring(spinAnim, {
        toValue: (newPosition),
        useNativeDriver: Platform.OS !== 'web' ? true : false,
      }).start();
    
  }

  const snapCurrentSelection = (evt) => {
    let dy = evt.nativeEvent.translationY + evt.nativeEvent.velocityY * VELOCITY_MULTIPLIER;
    let lowerIndex = parseInt((snapY + dy) / props.itemStyle.height);
    let upperIndex = snapY + dy < 0 ? lowerIndex-1 : lowerIndex+1;
    let currentIndex;

    if (lowerIndex - OFFSET >= 0) 
      currentIndex = 0;
  
    else if (lowerIndex - OFFSET <= -props.data.length+1) 
      currentIndex = -props.data.length+1;

    else if (Math.abs(snapY + dy - lowerIndex * props.itemStyle.height) < Math.abs(snapY + dy - upperIndex * props.itemStyle.height))
      currentIndex = lowerIndex - OFFSET;

    else
      currentIndex = upperIndex - OFFSET;

    if (currentIndex !== indexSelected)
      setIndexSelected(-currentIndex);
  
    if (-currentIndex >= 0 && -currentIndex < props.data.length)
      props.setSelected(props.data[-currentIndex].label);

  }

  const scrollAnimStateChange = (evt) => {
    if (evt.nativeEvent.state === State.END) {
      snapToNearestItem(evt);
      snapCurrentSelection(evt);
    }
  }

  const setCurrentSelection = (evt) => {
    let dy = evt.nativeEvent.translationY;
    let lowerIndex = parseInt((snapY + dy) / props.itemStyle.height);
    let upperIndex = snapY + dy < 0 ? lowerIndex-1 : lowerIndex+1;
    let currentIndex;

    if (lowerIndex - OFFSET >= 0) 
      currentIndex = 0;
  
    else if (lowerIndex - OFFSET <= -props.data.length+1) 
      currentIndex = -props.data.length+1;

    else if (Math.abs(snapY + dy - lowerIndex * props.itemStyle.height) < Math.abs(snapY + dy - upperIndex * props.itemStyle.height))
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
          { props.data.map((item, index) => {
              let isSelected = false;
              let diff = Math.abs(indexSelected - index);
              item.key = index;

              if (diff === 0)
                isSelected = true;

              return (
                <Animated.View 
                  style={[ props.itemStyle, 
                  {
                    transform: [{ rotateX: interpolatedWheelPerspective[index] }],
                    opacity: isSelected ? 1 : 1 - 0.2 * Math.abs(diff),
                  } 
                ]}>
                  <AppText
                    style={{
                      color: isSelected? Colors.primary1 : Colors.inactive_picker,
                      fontSize: 23 - (1 + Math.abs(diff)) * Math.abs(diff) > 0 ? 23 - (1 + Math.abs(diff)) * Math.abs(diff) : 0,
                      textAlign: 'center',
                    }}
                  >{ item.label }</AppText>
                </Animated.View>
              )
          }) }
        
        </Animated.View>
        <View
          style={{
            position: 'absolute',
            top: OFFSET * props.itemStyle.height,
            width: '100%',
            height: props.itemStyle.height,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: Colors.picker_border,
          }}
        >
        </View>
      </View>
    </PanGestureHandler>
  )

}

export default WheelPicker;