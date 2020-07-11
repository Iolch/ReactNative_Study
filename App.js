import React,{
  useState
} from 'react';
import {
  Button,
  StyleSheet,
  View,
  FlatList,   // basically flatlist is like the infinity list of angular
} from 'react-native';

// Costum Components Imports

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App(){
  
  const [courseGoals, setCourseGoals] = useState([]);

  const  [isAddMode, setIsAddMode] = useState(false);
  
  
  
  const addGoalHandler = (enteredGoal) => { 

    // This would also work
    // setCourseGoals([...courseGoals, {key:Math.random().toString(), value:enteredGoal}])  // Concatenation of the array course goals, with new one 
    setCourseGoals(currentGoals => [...currentGoals, {id:Math.random().toString(), value:enteredGoal}]) // Guarantee we have the most updated courseGoals 

    setIsAddMode(false);
  }; 

  const removeGoalHandler = (id) => {
    setCourseGoals(
      (currentGoals) => {
        return currentGoals.filter((goal) => goal.id !== id); // if it doesn't obbey the rule, the goal gets removed from currentGoals
      }
    );
  };

  return(
      <View style={styles.container}>
        <Button title='Add new goal' onPress={() => setIsAddMode(true)}/>

        {/* Input VIEW */}
        <GoalInput visible={isAddMode} onCancel={()=>setIsAddMode(false)} onAddGoal={addGoalHandler}/>      

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
