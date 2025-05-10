import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Vie, Button } from 'react-native';
import { useState, useEffect } from 'react';

//Biblioteca de localização
import * as Location from 'expo-location'

//Importa a biblioteca do mapa
import { MapView, Marker } from 'react-native-maps'

export default function App() {

  //Estado para armazenar as coordenadas(Latitude e Longitude)
  const [location, setLocation] = useState(null)

  //Estado para armazenar o endereço obtido da localização
  const [address, setAddress] = useState(null)

  //Estado para guardar o status da permissao
  const [permission, setPermission] = useState(null)

  useEffect(()=>{
    (async()=>{
      const{status} = await Location.requestBackgroundPermissionsAsync()
      setPermission(status)

      if(status === 'garanted'){
        const userLocation = await Location.getCurrentPositionAsync({})
        setLocation(userLocation.coords)
      }
    })
  })

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
