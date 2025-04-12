import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function HomeTab() {
    const{nome} = useLocalSearchParams()
  return (
    <View>
        <Text>Tela Home</Text>
        <Text>Nome: {nome}</Text>
    </View>
  )
}
