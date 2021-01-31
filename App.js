import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image} from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const buttonPressed = () =>{
    //for some reason buttonPressed2 didn't need the parseInt but this one did (to do the math.function)
    setResult(parseInt(num1)+parseInt(num2))
  }
  const buttonPressed2 = () =>{
  setResult(num1-num2)
}
  const styles = StyleSheet.create({
    alerttext:{
      fontSize:18,
      color:'red'
    },
    
  });
  return (
    <View style={styles.container}>
      <Text>Result {result}</Text>
      <TextInput 
      style={{width:200, borderColor:'gray', borderWidth:1}}
      keyboardType = 'numeric'
      onChangeText={num1 => setNum1(num1)} value={num1}/>
      <TextInput 
      style={{width:200, borderColor:'gray', borderWidth:1}}
      keyboardType = 'numeric'
      onChangeText={num2 => setNum2(num2)}value={num2}/>
      <Button onPress={buttonPressed} title="+"/>
      <Button onPress={buttonPressed2} title="-"/>
    </View>
  );
}

