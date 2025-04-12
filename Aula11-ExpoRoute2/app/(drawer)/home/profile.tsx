import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ProfileTab() {
    const{nome} = useLocalSearchParams()
    console.log(nome);
    
  return (
    <View>
        <Text>Tela de Perfil</Text>
        <Text>User: {nome}</Text>
    </View>
  )
}
