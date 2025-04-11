import { Button, Text, TouchableOpacity, View } from 'react-native'
import { Link } from 'expo-router'

export default function TelaInicial() {
  return (
    <View>
      <Text>TELA INICIAL</Text>
      <Link href={{pathname:"/user",params:{nome:"Guilherme", sobrenome:"Janunzzi"}}} asChild>
        {/* <Button title="Ir para a tela do usuário"/> */}
        <TouchableOpacity>
          <Text>Ir para a tela de usuário</Text>    
        </TouchableOpacity>
      </Link>
      <Link href="/produtos/20?segundoNumero=10" asChild>
        <Button title="Enviar o ID 20 e ID 10
        "/>
      </Link>
    </View>
  )
}
