import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Tela Home</Text>
      <Button title='IR P/ LOGIN'onPress={()=>navigation.navigate('stackLogin', {nome: 'Guilherme'})}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});