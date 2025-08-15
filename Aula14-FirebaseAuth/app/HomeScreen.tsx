import { SafeAreaView } from "react-native-safe-area-context"
import { Button, Text } from "react-native"
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage"
export default function HomeScreen() {
  const router = useRouter()

  const realizarLogoff = async ()=>{
    await AsyncStorage.removeItem("@user")
    router.replace('/')
  }


  return (
    <SafeAreaView>
        <Text>Seja bem-vindo(a), você está logado(a)!</Text>
        <Button title="REALIZAR LOGOFF" onPress={realizarLogoff}>teste</Button>
    </SafeAreaView>
  )
}
