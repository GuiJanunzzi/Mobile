import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context"
import { Button, Text, TextInput, StyleSheet,Alert, FlatList, ActivityIndicator } from "react-native"
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { auth,db,collection,addDoc,getDocs } from "../services/firebaseConfig"
import { deleteUser } from "firebase/auth";
import ItemLoja from "../components/ItemLoja";
import ThemeToggleButton from "../src/components/ThemeToggleButton";
import { useTheme } from "../src/context/ThemeContext";

export default function HomeScreen() {
  const {theme,colors} = useTheme()//Vai acessar os valores do tema
  const router = useRouter()
  const[nomeProduto,setNomeProduto]=useState('')
  interface Item{
    id:string,
    nomeProduto:string,
    isChecked:boolean
  }
  const[listaItems,setListaItems]=useState<Item[]>([])

  const realizarLogoff = async ()=>{
    await AsyncStorage.removeItem("@user")
    router.replace('/')
  }

  const excluirConta = () =>{
    Alert.alert(
      "Confirmar Exclusão",
      "Tem certeza que deseja excluir sua conta? Essa ação não poderá ser revertida!",
      [
        {text:"Cancelar",style:"cancel"},
        {text:"Deletar",style:"destructive",
          onPress: async ()=>{
            try{
              const user = auth.currentUser;
              if(user){
                  await deleteUser(user)
                  await AsyncStorage.removeItem('@user')
                  Alert.alert("Conta Excluída","Sua conta foi excluída com sucesso.")
                  router.replace("/")//Redireciona para login
              }else{
                  Alert.alert("Error","Nenhu usuário logado")
              }
            }catch(error){
              console.log("Erro ao excluir a conta");
              Alert.alert("Erro", "Não foi possível excluir a conta")              
            }
          }
        }
      ]
    )
  }

  const salvarItem = async ()=>{
    try{
      const docRef = await addDoc(collection(db,'items'),{
        nomeProduto:nomeProduto,
        isChecked:false
      })
      console.log("Produto criado com o ID: ",docRef.id);
      setNomeProduto('')//Limpa o Text Input
      Alert.alert("Sucesso","Produto salvo com sucesso!")
    }catch(e){
      console.log("Erro ao criar o produto: ",e);
      
    }
  }

  const buscarProdutos = async ()=>{
    try{
      const querySnapshot = await getDocs(collection(db, 'items'))
      const items:any = []

      querySnapshot.forEach((item)=>{
        items.push({
          ...item.data(),
          id: item.id
        })
      })
      setListaItems(items)
      // console.log("Itens carregados: ", items);
      
    }catch(e){
      console.log("Erro ao carregar os items: ",e);
      
    }
  }

  useEffect(()=>{
    buscarProdutos()
  },[listaItems])
  return (
    <SafeAreaView style={[styles.container,
      // {backgroundColor:theme ==='dark'?'#121212':'#fff'}
      {backgroundColor:colors.background}
    ]}>
        <Text style={[{color:colors.text}]}>Seja bem-vindo(a), você está logado(a)!</Text>
        <ThemeToggleButton/>
        <Button title="REALIZAR LOGOFF" onPress={realizarLogoff}/>
        <Button title="EXCLUIR CONTA" color="red" onPress={excluirConta}/>
        <Button title="TROCAR A SENHA" onPress={()=>(router.replace("/AlterarSenhaScreen"))}/>

        {listaItems.length<=0?<ActivityIndicator/>:(
          <FlatList
            data={listaItems}
            renderItem={({item})=>{
              return(
                <ItemLoja 
                  nomeProduto={item.nomeProduto}
                  isChecked={item.isChecked}
                  id={item.id}
                />
              )
            }}
          />
        )}

        <TextInput
          placeholder="Digite o nome do produto"
          style={styles.input}
          value={nomeProduto}
          onChangeText={(value)=>setNomeProduto(value)}
          onSubmitEditing={salvarItem}
        />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  input:{
    backgroundColor:'lightgray',
    width:'90%',
    alignSelf:'center',
    marginTop:'auto',
    borderRadius:10,
    paddingLeft:20
  }
})