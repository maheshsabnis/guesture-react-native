import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import PanGuestureComponent from './guestures/panguesturecomponent';
import TapGuestureHandlerComponent from './guestures/tapguesturecomponent';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Use PanHandler</Text>
       {/* <PanGuestureComponent/> */}
       <TapGuestureHandlerComponent/>
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
