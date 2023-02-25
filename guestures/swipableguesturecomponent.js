import React from 'react';
import {View, Text, StyleSheet,StatusBar,
SafeAreaView, FlatList, Alert
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const taskList=[
    {TaskId:1001, TaskName: 'Create Use Cases'},
    {TaskId:1002, TaskName: 'Validate Use Cases'},
    {TaskId:1003, TaskName: 'Define Class Structures'},
    {TaskId:1004, TaskName: 'Create Database'},
    {TaskId:1005, TaskName: 'Write the Code'}
];

const ItemSeperator=()=><View style={styles.itemSeparator}></View>

const LeftSwipeActionsComponent=()=>{
    return(
        <View style={styles.leftswipeview}>
            <Text style={styles.leftswipetext}>
                Pin Task
            </Text>
        </View>
    );
};

const RightSwipeActionsComponent=()=>{
    return(
        <View style={styles.rightswipeview}>
            <Text style={styles.rightswipttext}>
                Unpin Task
            </Text>
        </View>
    );
};

const SwipeFromLeftOpen=()=>{
    Alert.alert('Swipe from Left');
};

const SwipeFromRightOpen=()=>{
    Alert.alert('Swipe from Right');
};

const SwipeableListItem=({task})=>{
    return(
    <Swipeable
        renderLeftActions={LeftSwipeActionsComponent}
        renderRightActions={RightSwipeActionsComponent}
        onSwipeableRightOpen={SwipeFromRightOpen}
        onSwipeableLeftOpen={SwipeFromLeftOpen}
    >
        <View style={styles.swipablelistitemview}>
            <Text style={{ fontSize: 24 }}>
                {task.TaskName}
            </Text>
        </View>
    </Swipeable>);
};
const SwipableGuestureComponent=()=> {
    
  return (
    <GestureHandlerRootView>
     <StatusBar />
      <SafeAreaView style={styles.container}>
        <Text style={{ textAlign: 'center', marginVertical: 20 }}>
          Swipe right or left
        </Text>
        <FlatList
          data={taskList}
          keyExtractor={(item) => item.TaskId}
          renderItem={({ item }) => <SwipeableListItem task={item} />}
          ItemSeparatorComponent={() => <ItemSeperator />}
        />
      </SafeAreaView>
     </GestureHandlerRootView>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    leftswipeview: {
        flex: 1, 
        backgroundColor: '#ccffbd', 
        justifyContent: 'center' 
      },
      rightswipeview:{
        backgroundColor: '#ff8303',
        justifyContent: 'center',
        alignItems: 'flex-end',
      },
      swipablelistitemview:{
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: 'white',
      },
      itemSeparator: {
        flex: 1,
        height: 1,
        backgroundColor: '#444',
      },
    view:{
        height:400,
        width:400,
        backgroundColor:'blue',
        justifyContent:'center',
        alignContent:'center'
    },
    leftswipetext:{
        color: '#40394a',
        paddingHorizontal: 10,
        fontWeight: '600',
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    rightswipttext:{
        color: '#1b1a17',
          paddingHorizontal: 10,
          fontWeight: '600',
          paddingHorizontal: 30,
          paddingVertical: 20,
    },
    
    
});
//npx expo install react-native-gesture-handler@~2.8.0
export default SwipableGuestureComponent;
