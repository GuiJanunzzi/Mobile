import { NavigationContainer } from "@react-navigation/native";
import TabRouters from "./tab.routes";
import DrawerRoutes from "./drawer.routes";

export default function Routes(){
    return(
        <NavigationContainer>
            <DrawerRoutes/>
        </NavigationContainer>
    )
}