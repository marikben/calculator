import React from 'react';
import{ FlatList, View, Text, StatusBar, StyleSheet} from 'react-native';

export default function History({ route, navigation }) {
    const{data} = route.params;
    return(
    <View style={styles.container}>
        <StatusBar hidden={true}/>
        <Text>History</Text>
      <FlatList 
      data={data}
      renderItem={({item}) =>
        <Text>{item.value}</ Text>}/>
        </View >
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30
    }
})