import React,{
  useState
} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App(){
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  // This would also work 
  // function goalInputHandler(inputText){setEnteredGoal(inputText);}
  const goalInputHandler = (inputText) => {setEnteredGoal(inputText)};

  // This would also work
  // const addGoalHandler = () => { setCourseGoals([...courseGoals, enteredGoal])}; // Concatenation of the array course goals, with new one 
  const addGoalHandler = () => { setCourseGoals(currentGoals => [...currentGoals, enteredGoal])}; // Guarantee we have the most updated courseGoals 
  
  return(
      <View style={styles.container}>

        <View style={styles.inputContainer}>
          {/* Input VIEW */}

          <TextInput 
            style={styles.input} 
            onChangeText={goalInputHandler} 
            placeholder='Course Goal'
            value = {enteredGoal}
            ></TextInput>

          <Button title='add' onPress={addGoalHandler}/>
        </View>

        <View>
          {/* List VIEW */}
          {courseGoals.map( (goal) => <Text key={goal} >{goal}</Text> )}
        </View>

      </View>
  );
}
const styles = StyleSheet.create({
  container:{
    padding: 30
  },
  inputContainer:{
    flexDirection:'row', // default as coloumn
    justifyContent: 'space-between', // justify content horizontally
    alignItems: 'center', // align items vertically
  },
  input:{ 
    width: '80%', 
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
});
