import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function Login() {
    const[nome, setNome] = useState('')
  return (
    <View>
        <Text>Login</Text>
        <TextInput 
            placeholder="Insira seu nome" 
            value={nome} 
            onChangeText={(value) =>setNome(value)}
        /> 
        <Link href={{pathname:"/(drawer)", params:{nome}}}>Entrar</Link>
    </View>
  )
}
