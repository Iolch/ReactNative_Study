import React,{
    useState
}  from 'react';
import {
    Button,
    Modal,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    // This would also work 
    // function goalInputHandler(inputText){setEnteredGoal(inputText);}
    const goalInputHandler = (inputText) => {setEnteredGoal(inputText)};

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };
    const cancelGoalHandler = () => {
        props.onCancel();
        setEnteredGoal('');

    };

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input} 
                onChangeText={goalInputHandler} 
                placeholder='Course Goal'
                value = {enteredGoal}
                ></TextInput>

            <View style={styles.buttonsContainer}>
                {/* buttons components cant be directly styled  */}
                <View style={styles.button}>   
                    {/* 
                    If we were to pass the param as 
                    <Button title='add' onPress={props.onAddGoal(enteredGoal)}/>, this would
                    automatically call the function, so we actually want to do something like
                    <Button title='add' onPress={() => props.onAddGoal(enteredGoal)}/>  or: */}
                    <Button title='ADD' onPress={addGoalHandler}/>
                </View>

                <View style={styles.button}>
                    <Button title='CANCEL' color='red' onPress={cancelGoalHandler} style={styles.button}></Button>
                </View>
            </View>
            
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    inputContainer:{
        flex:1, // this will make it take the whole space of its parent
        justifyContent: 'center', 
        alignItems: 'center', // align items on cross axis
    },
    buttonsContainer:{
        width:'80%',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems:'center'
    },
    input:{ 
        width: '80%', 
        marginBottom: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    button:{
        width:'40%'
    }

});

export default GoalInput;