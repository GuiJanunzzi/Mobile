import { Text, View, Button, FlatList } from "react-native";
import React,{useState} from "react";
import { useFocusEffect,useRouter } from "expo-router";
import { getNotes,deleteNote } from "@/src/db/notes";

export default function Index() {
  const[notes,setNotes]=useState<any[]>([])//estado para armazenar as notas
  const router = useRouter()//Hook de navegação do Expo Router

  //useFocusEffect executa sempre que a tela volta a ser foco
  useFocusEffect(
    React.useCallback(()=>{
      setNotes(getNotes())//Carregar as notas do banco de dados local
    },[])
  )

  //Função para deletar a nota
  function handleDelete(id:number){
    deleteNote(id)//Remove do banco a nota pelo id passado no parametro
    setNotes(getNotes()) //Atualiza a lista de notas
  }

  return (
    <View style={{flex: 1,padding:20}}>
      <Button title="Adicionar nota"
        onPress={()=>router.push('/add')}
      />
      <FlatList
        data={notes}
        keyExtractor={item=>item.id.toString()}
        renderItem={({item})=>(
          <View style={{borderBottomWidth:1,padding:10,margin:5}}>
            <Text style={{fontWeight:'bold',fontSize:16}}>
              ID: {item.id} - Titulo: {item.title}
            </Text>

            <View style={{flexDirection:'row',marginTop:5}}>
              <Button title="Editar" onPress={()=>router.push(`/edit/${item.id}`)}/>
              <View style={{width:10}}/>
              <Button title="Deletar" 
                onPress={()=>handleDelete(item.id)}
              />
            </View>

          </View>
        )}    
      />
    </View>
  );
}
