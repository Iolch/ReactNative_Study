import React,{
    useState
}  from 'react';
import {
    Button,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    // This would also work 
    // function goalInputHandler(inputText){setEnteredGoal(inputText);}
    const goalInputHandler = (inputText) => {setEnteredGoal(inputText)};

    return(
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input} 
            onChangeText={goalInputHandler} 
            placeholder='Course Goal'
            value = {enteredGoal}
            ></TextInput>

          {/* 
            If we were to pass the param as 
            <Button title='add' onPress={props.onAddGoal(enteredGoal)}/>, this would
            automatically call the function, so we actually want to do something like
            <Button title='add' onPress={() => props.onAddGoal(enteredGoal)}/>  or: */}
          <Button title='ADD' onPress={props.onAddGoal.bind(this, enteredGoal)}/>
        </View>
    );
};
const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row', // default as coloumn
        justifyContent: 'space-between', // justify content horizontally
        alignItems: 'center', // align items vertically
    },
    input:{ 
        width: '80%', 
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    }
});

export default GoalInput;