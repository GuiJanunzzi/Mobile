import {View,Text,StyleSheet,FlatList,ActivityIndicator, Button, Image} from "react-native"
import { useQuery, useMutation, Mutation } from "@tanstack/react-query" //Hook para fazer queries
import { fetchUsers, createUsers } from "./api/api" // Função de requisição
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
    //QueryKey: Chave única de identificação da query
    //QueryFn: É a função de requisição
  const{data,isLoading,isError,error,isFetching,refetch} = useQuery({
    queryKey:['users'], 
    queryFn: fetchUsers 
  })

  //Criando mutation para enviar um novo usuario
  const mutation = useMutation({
    mutationFn: createUsers,
    onSuccess:()=>refetch
  })

  //Usuario a ser enviado
  const newUser = {
    name:"Guilherme Janunzzi",
    avatar:"https://avatars.githubusercontent.com/GuiJanunzzi"
  }

  //Exibe um spinner durante o carregamento dos dados 
  if(isLoading){
    return <ActivityIndicator size='large' style={StyleSheet.center}/>
  }

  //Mostrar msg no cenário de error
  if(isError){
    return(
        <View style={styles.center}>
            <Text> Erro ao buscar os dados </Text>
            <Text> Error: {error.message} </Text>
        </View>
    )
  }
  return(
    <SafeAreaView>
      <Button 
        title={mutation.isPending?"Criando usuário...":"Criar novo usuário"}
        onPress={()=>mutation.mutate(newUser)}// Enviando newUser para Api
        disabled={mutation.isPending}
      />
      <FlatList
          data={data}
          refreshing={isFetching}//Mostrar o spinner durante o refetch
          onRefresh={refetch}// Chamada automática do refatch
          renderItem={({item})=>(//com parentesis não precisa de return, com chave precisa do return
              <View style={styles.item}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Image source={{uri:item.avatar}} width={200} height={200}/> 
              </View>
          )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  center:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  item:{
    padding:16,
    borderBottomWidth:1,
    borderBottomColor:"#ccc"
  },
  title:{
    fontWeight:"bold",
    marginBottom:4
  }
})