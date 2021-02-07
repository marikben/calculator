<<<<<<< HEAD
import React, {useState, useRef } from 'react';
import { StyleSheet, FlatList, Text, View, Button, TextInput} from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import History from './History';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Calculator" component={HomeScreen} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  </NavigationContainer>
=======
import React, {useState, useRef} from 'react';
import { StyleSheet, FlatList, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);
 
  const initialFocus = useRef(null);
  const calculation = operator => {
    const [number1, number2] = [Number(num1), Number(num2)];
    if (isNaN(number1) || isNaN(number2)){
      setResult(0);
    } else {
      let result = 0;
      switch (operator){
        case '+':
        result = number1 + number2;
        break;
        case '-':
          result = number1 - number2;
          break;
      }
      setResult(result);
      const text = `${number1} ${operator} ${number2} = ${result}`;
      setData([...data, { value: text }])
      
    }
    setNum1('');
    setNum2('');
    initialFocus.current.focus();
}

  return (
    <View>
      <Text>Result: {result}</Text>
      <TextInput 
      style={styles.input}
      keyboardType = {'numeric'}
      onChangeText={text => setNum1(text)} 
      value={num1}/>
      <TextInput 
      style={styles.input}
      keyboardType = 'numeric'
      onChangeText={text => setNum2(text)}
      value={num2}/>
      <View style={styles.buttons}>
      <Button buttonStyle={styles.button} onPress={() => calculation('+')} title="+"/>
      <Button buttonStyle={styles.button} onPress={() => calculation('-')} title="-"/>
      </View>
      <Text>History</Text>
      <FlatList 
      data={data}
      renderItem={({item}) =>
        <Text>{item.value}</ Text>}/>
    </View>
>>>>>>> c1273e07637336b9282f8b6766cb13e0303141af
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    margin: 5,
    width: '50%'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
<<<<<<< HEAD
})
=======
})
>>>>>>> c1273e07637336b9282f8b6766cb13e0303141af
