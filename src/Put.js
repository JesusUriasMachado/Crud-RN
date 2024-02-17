import React, {useEffect, useState} from 'react';
import { Button, TextInput, View} from 'react-native';

const Put = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [Id, setId] = useState('');
  const [Nombre, setNombre] = useState('');
  const [Precio, setPrecio] = useState('');
  const [Tiempo, setTiempo] = useState('');
  const [Porciones, setPorciones] = useState('');

  const putData = async () => {
    try {
      const response = await fetch('https://restaurante-system-api.us-e2.cloudhub.io/api/menu/' + Id, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'client_id': '9bb5c19a77264ef097712e54b6b15a61',
          'client_secret': '36242a2AEbA04717839427DE3dFC67fe'
        },
        body: JSON.stringify({
          Nombre: Nombre,
          Precio: parseInt(Precio),
          Tiempo: Tiempo,
          Porciones: parseInt(Porciones)
        })
      });
      const json = await response.json();
      console.log(json.data);
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
        onChangeText={setId}
        placeholderTextColor="gray"
        value={Id}
        placeholder="ID"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
        onChangeText={setNombre}
        value={Nombre}
        placeholderTextColor="gray"
        placeholder="Nombre"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
        onChangeText={setPrecio}
        placeholderTextColor="gray"
        value={Precio}
        keyboardType="numeric"
        placeholder="Precio"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
        onChangeText={setTiempo}
        placeholderTextColor="gray"
        value={Tiempo}
        placeholder="Tiempo"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
        onChangeText={setPorciones}
        placeholderTextColor="gray"
        value={Porciones}
        placeholder="Porciones"
      />
      <Button
        title="Actualizar"
        onPress={putData}
        color="#000000"
      />
    </View>
  );
};

export default Put;