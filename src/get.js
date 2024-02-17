import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

const Get = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('https://restaurante-system-api.us-e2.cloudhub.io/api/menu', {
        method: 'GET',
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.Id}, {item.Nombre__c}, {item.Precio__c}
            </Text>
          )}
        />
      )}
    </View>
  );
};

export default Get;