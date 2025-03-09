import { View } from "react-native";
import Quadrado from "./src/Components/Quadrado";

export default()=>{
    return(
        <View style={{
            flex:1, 
            backgroundColor:"purple",
            justifyContent:"center",
            alignItems:"center"
            }}>
            <View style={{
                flex:1,
                width:"100%",
                flexDirection:"row",
                justifyContent:"space-between"}}>
                <Quadrado/>
                <Quadrado cor="#ff801a"/>
                <Quadrado cor="#dd22c1"/>
                <Quadrado cor="#8312ed"/>
            </View>
        </View>
    )
}