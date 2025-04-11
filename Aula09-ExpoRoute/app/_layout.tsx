import { Stack, Tabs } from "expo-router";
import Drawer from "expo-router/drawer";

export default function _layout() {
  return (
    <Drawer>
        <Drawer.Screen name="index" options={{title:"Tela inicial"}}/>
        <Drawer.Screen name="user" options={{title:"Tela usuário"}}/>
    </Drawer>
  )
}
