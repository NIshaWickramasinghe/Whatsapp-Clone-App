import { StyleSheet, Text, View , Image, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import STATUSDATA from '../data/Statusdata'
import { FontAwesome5 } from '@expo/vector-icons'
import { getCustomTabsSupportingBrowsersAsync } from 'expo-web-browser'
import Index from '@/app'

export default function Status() {

  const [statusData,setStatusData] = useState(STATUSDATA);

  useEffect(() => {
    setStatusData(STATUSDATA);
  },[])

  const combinedStatusData = [
    {'title' : 'Recent updates ', data: statusData.filter(item => item.viewed === false)},
    {'title' : 'Viewed updates ', data: statusData.filter(item => item.viewed === true)},
  ]

  return (
    <View style={styles.container}>
      <View style = {styles.myStatusContainer}>
        <View>
          <Image source={require('../../assets/images/yellow.jpg')} style={styles.image}/>
        </View>
        <View>
          <Text style={styles.myStatusHeading}>My Status</Text>
          <Text style={styles.myStatusSubText}>Tap to add status updates</Text>
        </View>
      </View>

        <FlatList
          data = {combinedStatusData}
          keyExtractor={(item,Index) => Index.toString()}
          renderItem={({item}) => (
            <>
              <Text style = {styles.viewedStatus}>{item.title}</Text>
              <FlatList
                data={item.data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                  <View style={styles.viewedStatusContainer}>
                    <View>
                      <Image source={item.photos} style ={styles.image} />
                    </View>
                    <View>
                      <Text style={styles.myStatusHeading}>{item.name}</Text>
                      <Text style={styles.myStatusSubText}>{item.time}</Text>
                    </View>
                  </View>
                )}
              />
            </>
          )}
        />
        <TouchableOpacity
          style={styles.writeButton}
          onPress={() => ('#')}
        >
          <FontAwesome5 name='pen' size={18} color='grey'/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={() => ('#')}
        >
          <FontAwesome5 name='camera' size={20} color='white'/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  myStatusContainer: {
    flexDirection : 'row',
    alignItems: 'center',
    padding : 16,
  },
  image:{
    width : 50,
    height : 50,
    borderRadius : 25,
    marginRight : 16,
  },
  myStatusHeading: {
    fontSize : 16,
    fontWeight : '600',
  },
  myStatusSubText : {
    fontSize : 14,
    color : 'grey',
  },
  viewedStatus:{
    fontSize : 14,
    fontWeight: '600',
    color : 'grey',
    marginTop : 5,
    marginLeft : 16,
    marginBottom: 5,
  },
  viewedStatusContainer:{
    flexDirection : 'row',
    alignItems:'center',
    padding : 12,
  },
  writeButton : {
    position: 'absolute',
    bottom: 100,
    right:28,
    backgroundColor: '#e8e8e8',
    width:50,
    height:50,
    borderRadius:25,
    alignItems:'center',
    justifyContent : 'center'
  },
  cameraButton : {
    position: 'absolute',
    bottom: 30,
    right:20,
    backgroundColor: '#0e8e8a',
    width:60,
    height:60,
    borderRadius:30,
    alignItems:'center',
    justifyContent : 'center'
  }



});