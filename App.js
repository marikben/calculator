import React, {useState} from 'react';
import { FlatList, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);
 
  const buttonPressed = () =>{
    //for some reason buttonPressed2 didn't need the parseInt but this one did (to do the math.function)
    setResult(parseInt(num1)+parseInt(num2))
    setData([...data, {key:num1+'+'+num2+'='+(parseInt(num1)+parseInt(num2))}]);
  }
  const buttonPressed2 = () =>{
  setResult(num1-num2)
  setData([...data, {key:num1+'-'+num2+'='+(num1-num2)}]);
}

  return (
    <View>
      <Text>Result: {result}</Text>
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
      <Text>History</Text>
      <FlatList 
      data={data}
      renderItem={({item}) =><Text>{item.key}</ Text>}/>
    </View>
  );
}
