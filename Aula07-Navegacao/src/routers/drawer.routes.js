import { createDrawerNavigator } from '@react-navigation/drawer';
import {Feather} from '@expo/vector-icons'
import Home from "../screens/Home";
import Login from "../screens/Login";
import TabRouters from './tab.routes';


const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{title:'Aplicativo'}}>
            <Drawer.Screen name='Home' component={TabRouters} 
                options={{drawerIcon:()=><Feather name='home' size={20}/>,
                drawerLabel:'Inicio', drawerActiveBackgroundColor:'blue'
            }}
            />
            <Drawer.Screen name='Login' component={TabRouters}
                options={{drawerIcon:()=><Feather name='log-in' size={20}/>,
                drawerLabel:'Login', drawerActiveBackgroundColor:'blue' 
            }}
            />
        </Drawer.Navigator>
    )
}