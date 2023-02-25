import React from 'react';
import {View, Text, StyleSheet,Animated,StatusBar} from 'react-native';
import {PanGestureHandler, GestureHandlerRootView} from 'react-native-gesture-handler';

function PanGuestureComponent() {
  let transX = new Animated.Value(0);
  let transY = new Animated.Value(0);
  const onPanGestureEvent = Animated.event(
    [
        {
            nativeEvent: {
                translationX: transX,
                translationY: transY,
            }
        }
    ],
    {useNativeDriver: true}
  );  
  return (
    <GestureHandlerRootView>
     <View style={styles.view}>
        <Text style={styles.text}>Using the Pan Guesture</Text>
         <PanGestureHandler
          onGestureEvent={onPanGestureEvent}>
            <Animated.View
            style={[
                 styles.panEffect,
                 {
                    transform:[
                        {
                            translateX: transX,
                        },
                        {
                            translateY: transY
                        }
                    ]
                 }   
            ]}
            />
          </PanGestureHandler>
        <StatusBar style="auto" />
     </View>
     </GestureHandlerRootView>
  )
};

const styles = StyleSheet.create({
    view:{
        height:400,
        width:400,
        backgroundColor:'blue',
        justifyContent:'center',
        alignContent:'center'
    },
    text:{
        color:'yellow',
        fontSize:30
    },
    panEffect:{
        width: 150,
        height: 150,
        backgroundColor: 'red',
        marginTop: 32,
        marginLeft:40
    }
});
//npx expo install react-native-gesture-handler@~2.8.0
export default PanGuestureComponent;
