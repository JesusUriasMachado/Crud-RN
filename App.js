import { ScrollView, StyleSheet, Text, View } from "react-native";
import Get from "../urias/src/get";
import Post from "../urias/src/Post";
import Put from "../urias/src/Put";
import Delete from "../urias/src/Delete";
import { ImageBackground } from "react-native-web";

export default function App() {
  return (
   
    <View> <ImageBackground source={require('../urias/images/ywgwyw.jpg')} />
      <ScrollView>
      <Text>
        GET
      </Text>
      <Get />
      <Text>
        POST
      </Text>
      <Post />
      <Text>
        PUT
      </Text>
      <Put />
      <Text>
        DELETE
      </Text>
      <Delete />
      </ScrollView>    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
