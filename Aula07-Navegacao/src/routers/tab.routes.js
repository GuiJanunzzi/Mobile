import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from '@expo/vector-icons'
import Home from "../screens/Home";
import Login from "../screens/Login";


const Tab = createBottomTabNavigator()

export default function TabRouters(){
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name='Home' component={Home} 
                options={{tabBarIcon:()=><Feather name='home' size={20}/>,
                tabBarLabel:'Inicio', tabBarActiveBackgroundColor:'blue'
            }}
            />
            <Tab.Screen name='Login' component={Login}
                options={{tabBarIcon:()=><Feather name='log-in' size={20}/>,
                tabBarLabel:'Login', tabBarActiveBackgroundColor:'blue' 
            }}
            />
        </Tab.Navigator>
    )
}