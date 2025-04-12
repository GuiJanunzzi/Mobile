import {Drawer} from "expo-router/drawer";

export default function DrawerLayout() {
  return <Drawer screenOptions={{drawerStyle:{backgroundColor:'red'},
    headerStyle:{backgroundColor: 'blue'}, headerTintColor:'white',
    drawerActiveBackgroundColor:"green", drawerActiveTintColor:"white"
}}/>
}
