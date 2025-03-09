import { FlatList,View,Text } from "react-native";
import Alunos from "./Alunos";

export default function ListarAlunos(){
    return(
        <View>
            <FlatList 
                data={Alunos}
                renderItem={({item})=>{
                    return(
                        <Text style={{fontSize:30}}>Nome:{item.nomeAluno} - NºFaltas:{item.nFaltas}</Text>
                    )
                }}
            />
        </View>
    )
}