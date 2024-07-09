import { Text,View, StyleSheet, StatusBar} from "react-native";

import Header from "@/components/Header";
import Navigation from "@/components/navigation/Navigation";


export default function Index() {
  return (
    // <NavigationContainer>
    <View style = {styles.container} >

      <StatusBar backgroundColor="#0e806a" barStyle='light-content' />
      <Header/>

      <View style = {{flex:1 , backgroundColor:'white'}} >
          <Navigation/>
      </View>

    
    </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
  },
})
