import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from '@expo/vector-icons'
import Home from "../screens/Home";
import Login from "../screens/Login";


const Tab = createBottomTabNavigator()

export default function TabRouter({route}){
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}
            initialRouteName={route?.param?.initialRouteName || "tabHome"}
        >
            <Tab.Screen name='tabHome' component={Home} 
                options={{tabBarIcon:()=><Feather name='home' size={20}/>,
                tabBarLabel:'Inicio', tabBarActiveBackgroundColor:'blue'
            }}
            />
            <Tab.Screen name='tabLogin' component={Login}
                options={{tabBarIcon:()=><Feather name='log-in' size={20}/>,
                tabBarLabel:'Login', tabBarActiveBackgroundColor:'blue' 
            }}
            />
        </Tab.Navigator>
    )
}