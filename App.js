import React,{
  useState 
}from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App(){
  const[ outputText, setOutputText ] = useState('Original Text');
  return(
      <View style={styles.container}>
          <Text> {outputText} </Text>
          <Button title='Click me' onPress={() => setOutputText('change')} />
      </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
});
