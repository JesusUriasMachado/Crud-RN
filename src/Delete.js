import React, {useEffect, useState} from 'react';
import { Button, TextInput, View} from 'react-native';

const Put = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [Id, setId] = useState('');

  const deleteData = async () => {
    try {
      const response = await fetch('https://restaurante-system-api.us-e2.cloudhub.io/api/menu/' + Id, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'client_id': '9bb5c19a77264ef097712e54b6b15a61',
          'client_secret': '36242a2AEbA04717839427DE3dFC67fe'
        }
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
        value={Id}
        placeholderTextColor="gray"
        placeholder="ID"
      />
      <Button
        title="Eliminar"
        color="#000000"
        onPress={deleteData}
      />
    </View>
  );
};

export default Put;