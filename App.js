import React,{
  useState
} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,   // basically flatlist is like the infinity list of angular
} from 'react-native';

export default function App(){
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  // This would also work 
  // function goalInputHandler(inputText){setEnteredGoal(inputText);}
  const goalInputHandler = (inputText) => {setEnteredGoal(inputText)};

  // This would also work
  // const addGoalHandler = () => { setCourseGoals([...courseGoals, {key:Math.random().toString(), value:enteredGoal}])}; // Concatenation of the array course goals, with new one 
  const addGoalHandler = () => { setCourseGoals(currentGoals => [...currentGoals, {key:Math.random().toString(), value:enteredGoal}])}; // Guarantee we have the most updated courseGoals 

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

        

        {/* List VIEW */}
        

        {/* This woul also work, but inside a scrollview */}
        {/* {courseGoals.map( (goal) => <View style={styles.listItem}><Text key={goal}>{goal}</Text></View> )} */}
        <FlatList 
          data={courseGoals} 
          renderItem = {
              element => (<View style={styles.listItem}><Text>{element.item.value}</Text></View>)
          }
        />
        

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
  listItem:{
    padding: 10,
    marginVertical: 10,   //add margin to top and bottom
    backgroundColor:'#f3f3f3',
  },
});
