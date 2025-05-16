import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import RNPickerSelect from 'react-native-picker-select'
//Biblioteca de localização
import * as Location from 'expo-location'

//Importa a biblioteca do mapa
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const[alunoSelecionado, setAlunoSelecionado]=useState('')

  const listaAlunos = [
    {label:'Vinicius',value:'Vinicius'},
    {label:'João',value:'João Pedro'}
  ]

  //Estado para armazenar as coordenadas(latitude e longitude)
  const [location, setLocation] = useState(null)

  //Estado para armazensar o endereço obtido da localização
  const [address, setAddress] = useState(null)

  //Estado para guardar o status da permissao
  const [permission, setPermission] = useState(null)

  useEffect(() => {
    (async () => {
      //Solicitar permissão para acessar a localização em primeira inicio
      const { status } = await Location.requestForegroundPermissionsAsync()
      setPermission(status)

      if (status === 'granted') {
        const userLocation = await Location.getCurrentPositionAsync({})
        setLocation(userLocation.coords)

        const addressResult = await Location.reverseGeocodeAsync(userLocation.coords)
        setAddress(addressResult[0])//Ele armazena o endereço mais revelante
      }
    })() //Função assicrona auto executável
  }, [])

  if (permission !== 'granted') {
    return (
      <View>
        <Text>Permissão de localização não concedida.</Text>
        <Button title="Permitir" onPress={() => {
          (async () => {
            //Solicitar permissão para acessar a localização em primeira inicio
            const { status } = await Location.requestForegroundPermissionsAsync()
            setPermission(status)

            if (status === 'granted') {
              const userLocation = await Location.getCurrentPositionAsync({})
              setLocation(userLocation.coords)
            }
          })()
        }} />
      </View>
    )
  }

  const renderAddress = () => {
    if (!address) return <Text>Carregando endereço...</Text>

    const street = address?.street || 'Rua não encontrada'
    const city = address?.city || 'Cidade não encontrada'
    const region = address?.region || 'Estado não encontrado'
    const country = address?.country || 'País não encontrado'
    const postalCode = address?.postalCode || 'CEP não encontrado'

    return (
      <View>
        <Text>Endereço Completo:</Text>
        <Text>Rua:{street}</Text>
        <Text>Cidade:{city}</Text>
        <Text>Estado:{region}</Text>
        <Text>País:{country}</Text>
        <Text>CEP:{postalCode}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sua Localização</Text>
      {location ? (
        <>
          <Text>Latitude:{location.latitude} </Text>
          <Text>Longitude:{location.longitude} </Text>

          <MapView 
            style={styles.map}
            initialRegion={{
              latitude:location.latitude,
              longitude:location.longitude,
              latitudeDelta:0.01,//Zoom vertical
              longitudeDelta:0.01//Zoom horizontal
            }}          
          >
            <Marker 
              coordinate={{
              latitude:location.latitude,
              longitude:location.longitude,
              }}
            />

            <Marker 
              coordinate={{
              latitude:-23.564351,
              longitude:-46.652725
              }}
              title='Vc está aqui'
            />
          </MapView>
          {renderAddress()}

          <RNPickerSelect 
            items={listaAlunos}
            onValueChange={(value)=>setAlunoSelecionado(value)}
            placeholder={{label:'Selecione um aluno(a)'}}
          />
          {console.log(alunoSelecionado)}
        </>
      ) : (
        <Text>Carregando localização...</Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: 500,
    fontSize: 24
  },
  map:{
    width:'100%',
    height:400
  }
});
