import React from 'react'
import { Text,StyleSheet, View } from 'react-native';
import{ Feather, Fontisto, MaterialCommunityIcons } from 'react-native-vector-icons'

export default function Header() {
  return (

    <View style = {styles.headerContainer} >
      <Text style = {styles.headerText} >Whatsapp</Text>
      <View style = {styles.iconContainer} >
          <Feather name='camera' size={20} color='white' style={styles.icon} />
          <Fontisto name='search' size={20} color='white' style={styles.icon} />
          <MaterialCommunityIcons name= 'dots-vertical' size={21} color='white' style={styles.icon} />
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#0e806a',
      paddingTop: 80,
      paddingBottom : 8
  },

  headerContainer : {
      flexDirection : 'row',
      backgroundColor:'#0e806a',
      alignItems : 'center',
      justifyContent : 'space-between',
      marginHorizontal : 16
  },

  headerText : {
    fontSize : 20,
    color : 'white',
    fontWeight : '500'
  },

  iconContainer : {
     flexDirection : 'row',
     alignItems : 'center'
  },

  icon : {
    marginLeft : 20
  }

})
