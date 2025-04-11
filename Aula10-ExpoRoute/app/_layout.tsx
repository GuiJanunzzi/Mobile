import { Stack, Tabs } from "expo-router";
import Drawer from "expo-router/drawer";

export default function _layout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{title:"Tela inicial"}}/>
        <Stack.Screen name="user" options={{title:"Tela usuário"}}/>
    </Stack>
  )
}
