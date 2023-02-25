import React from 'react'
import { View, StyleSheet } from 'react-native';
import { LongPressGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';

const LongPressGuestureComponent=()=> {
  const onLongPress = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert("I've been pressed for long time");
    }
  };
  return (
    <GestureHandlerRootView>
        <LongPressGestureHandler
        onHandlerStateChange={onLongPress}
        minDurationMs={800}>
         <View style={styles.box} />
       </LongPressGestureHandler>
  </GestureHandlerRootView>
  )
};

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
    marginTop: 22,
    marginBottom: 22,
  },
});
export default LongPressGuestureComponent;
