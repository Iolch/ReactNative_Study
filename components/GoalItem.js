import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
const GoalItem = props => {
    return(
        // Touchable provides a better defined touchable than the onTouch events,
        // because we can access the time the user spent to press it without 
        // we have to doing it from scratch

        <TouchableOpacity onPress={props.onGoalDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text> 
            </View>
        </TouchableOpacity>
        
    );
};
const styles = StyleSheet.create({
    listItem:{
      padding: 10,
      marginVertical: 10,   //add margin to top and bottom
      backgroundColor:'#f3f3f3',
    },
});

export default GoalItem;