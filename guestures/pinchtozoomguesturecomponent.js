import React, { Component } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import { PinchGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';
const PinchToZoomGuestureComponent =()=> {
  let baseScale = new Animated.Value(1);
  let pinchScale = new Animated.Value(1);
  let scale = Animated.multiply(baseScale, pinchScale);
  let lastScale = 1;
  const onPinchGestureEvent = Animated.event(
    [{ nativeEvent: { scale: pinchScale } }],
    { useNativeDriver: true }
  );
  const onPinchHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
         lastScale *= event.nativeEvent.scale;
         baseScale.setValue(lastScale);
         pinchScale.setValue(1);
    }
  };
   
    return (
        <GestureHandlerRootView>
      <PinchGestureHandler
        onGestureEvent={onPinchGestureEvent}
        onHandlerStateChange={onPinchHandlerStateChange}
      >
        <Animated.View
          style={[
            styles.pinchableImage,
            {
              transform: [{ perspective: 1 }, { scale: scale }],
            },
          ]}
        ></Animated.View>
      </PinchGestureHandler>
      </GestureHandlerRootView>
    );
  };
 
const styles = StyleSheet.create({
  pinchableImage: {
    width: 250,
    height: 250,
    backgroundColor: 'blue',
    marginTop: 22,
    marginBottom: 22,
  },
});

export default PinchToZoomGuestureComponent;