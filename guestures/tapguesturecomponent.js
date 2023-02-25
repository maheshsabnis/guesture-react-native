 
import React,{useState, useRef} from 'react';
import {View, Text, StyleSheet,Animated,StatusBar, Alert} from 'react-native';
import {TapGestureHandler,State, GestureHandlerRootView} from 'react-native-gesture-handler';

function TapGuestureHandlerComponent() {
const [likeColor, setLikeColor] = useState('red');
const doubleTapRef = useRef(null);

const onSingleTapReceived =(event)=>{
    if(event.nativeEvent.state === State.ACTIVE){
        Alert.alert('Single Tap is received');
    }
};
const onDobleTapReceived=(event)=>{
    if(event.nativeEvent.state === State.ACTIVE){
         likeColor === 'red'
         ?setLikeColor('magenta')
         :setLikeColor('red'); 
    }
};
const styles = StyleSheet.create({
    box: {
      width: 150,
      height: 150,
      backgroundColor: likeColor,
      marginTop: 22,
      marginBottom: 22,
    },
  });


  return (
    <GestureHandlerRootView>
     <View style={styles.view}>
        <Text style={styles.text}>Using the Tap Guesture(Single and Double Tap)</Text>
          <TapGestureHandler
            onHandlerStateChange={onSingleTapReceived}
            waitFor={doubleTapRef}>
             <TapGestureHandler
               ref={doubleTapRef}
               onHandlerStateChange={onDobleTapReceived}
               numberOfTaps={2}
             >
               <View style={styles.box}/>
             </TapGestureHandler>   

          </TapGestureHandler>
        <StatusBar style="auto" />
     </View>
     </GestureHandlerRootView>
  )
}


export default TapGuestureHandlerComponent;
