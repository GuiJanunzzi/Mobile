import { createDrawerNavigator } from '@react-navigation/drawer';
import {Feather} from '@expo/vector-icons'
import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';


const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{title:'Aplicativo'}}>
            <Drawer.Screen name='home' component={TabRoutes} 
                options={{drawerIcon:()=><Feather name='home' size={20}/>,
                drawerLabel:'Inicio', drawerActiveBackgroundColor:'blue'
            }}
            />
            <Drawer.Screen name='login' component={TabRoutes}
                initialParams={{initialRouteName:'tabLogin'}}
                options={{
                    drawerIcon:()=><Feather name='log-in' size={20}/>,
                    drawerLabel:'Login', drawerActiveBackgroundColor:'blue' 
            }}
            />
            <Drawer.Screen name='perfil' component={StackRoutes}
                options={{
                    drawerIcon:()=><Feather name='user' size={20}/>,
                    drawerLabel:'Perfil', drawerActiveBackgroundColor:'blue' 
            }}
            />
        </Drawer.Navigator>
    )
}