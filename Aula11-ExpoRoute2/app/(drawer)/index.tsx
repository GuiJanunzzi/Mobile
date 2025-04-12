import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function DrawerHome() {
    const{nome} = useLocalSearchParams()
  return (
    <View>
        <Text>Bem-vindo ao menu Drawer</Text>
        <Text>Nome: {nome}</Text>
    </View>
  )
}
