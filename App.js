import React,{
  useState
} from 'react';
import {
  StyleSheet,
  View,
  FlatList,   // basically flatlist is like the infinity list of angular
} from 'react-native';

// Costum Components Imports

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App(){
  
  const [courseGoals, setCourseGoals] = useState([]);

  
  // This would also work
  // const addGoalHandler = () => { setCourseGoals([...courseGoals, {key:Math.random().toString(), value:enteredGoal}])}; // Concatenation of the array course goals, with new one 
  const addGoalHandler = (enteredGoal) => { setCourseGoals(currentGoals => [...currentGoals, {id:Math.random().toString(), value:enteredGoal}])}; // Guarantee we have the most updated courseGoals 

  const removeGoalHandler = (id) => {
    setCourseGoals(
      (currentGoals) => {
        return currentGoals.filter((goal) => goal.id !== id); // if it doesn't obbey the rule, the goal gets removed from currentGoals
      }
    );
  };
  return(
      <View style={styles.container}>

        {/* Input VIEW */}
        <GoalInput onAddGoal={addGoalHandler}/>      

        {/* List VIEW */}
        

        {/* This woul also work, but inside a scrollview */}
        {/* {courseGoals.map( (goal) => <View style={styles.listItem}><Text key={goal}>{goal}</Text></View> )} */}
        <FlatList 
          keyExtractor={(item, index) => item.id}
          data={courseGoals} 
          renderItem = {
              element => (<GoalItem title={element.item.value} id={element.item.id} onGoalDelete={removeGoalHandler}/>)
          }
        />
        

      </View>
  );
}
const styles = StyleSheet.create({
  container:{
    padding: 30
  }
  
});
