import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import PanGuestureComponent from './guestures/panguesturecomponent';
import TapGuestureHandlerComponent from './guestures/tapguesturecomponent';
import SwipableGuestureComponent from './guestures/swipableguesturecomponent';
import LongPressGuestureComponent from './guestures/longpressguesturecomponent';
import PinchToZoomGuestureComponent from './guestures/pinchtozoomguesturecomponent';
import PullToRefreshComponent from './guestures/pulltorefreshguesturecomponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Long Press Guesture</Text>
       {/* <PanGuestureComponent/> */}
       <PullToRefreshComponent/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
