import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login({navigation, route}) {
  console.log(route.params.nome);
  return (
    <View style={styles.container}>
      <Text>Tela de Login</Text>
      <Button title='IR P/ HOME'onPress={()=>navigation.goBack()}/>
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