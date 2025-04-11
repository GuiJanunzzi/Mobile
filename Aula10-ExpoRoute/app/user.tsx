import { Text, View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

export default function TelaUsuario() {
  const{nome, sobrenome} = useLocalSearchParams()
  console.log(nome, sobrenome);
  
  return (
    <View>
      <Text>TELA USUARIO</Text>
    </View>
  )
}
