import { Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function TelaInicial() {
  return (
    <View>
      <Text>TELA INICIAL</Text>
      <Link href="/user">IR PARA A TELA DO USUARIO</Link>
    </View>
  )
}
