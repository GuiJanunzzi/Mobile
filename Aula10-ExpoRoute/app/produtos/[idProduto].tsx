import { Text, View } from "react-native"; 
import { useLocalSearchParams } from 'expo-router'

export default function IdProduto() {
    const{idProduto, segundoNumero} = useLocalSearchParams()
  return (
    <View>
        <Text>ID Produto: {idProduto}</Text>
        <Text>Segundo Numero: {segundoNumero}</Text>
    </View>
  )
}
