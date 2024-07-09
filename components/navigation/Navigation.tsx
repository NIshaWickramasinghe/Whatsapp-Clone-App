import React from 'react'
import { Text , StyleSheet, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


import {MaterialCommunityIcons} from 'react-native-vector-icons';
import Chats from '../screen/Chats';
import Calls from '../screen/Calls';
import Status from '../screen/Status';
import Community from '../screen/Community';

const Tab = createMaterialTopTabNavigator();


export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName='Chat'
      screenOptions={{
        tabBarActiveTintColor : 'white',
        tabBarIndicatorStyle : {
          backgroundColor : 'white'
        },
        tabBarLabelStyle : {
          fontWeight: 'bold'
        },
        tabBarStyle : {
          backgroundColor : '#0e806a'
        }
      }}
    >

      <Tab.Screen 
          name= 'Community'
          component= {Community} 
          options={{
            tabBarIcon : ({color}) => {
              <MaterialCommunityIcons name='account-group' size={24} color={color} />
            },
            tabBarLabelStyle : styles.tabBarLabel
          }}
      />
      <Tab.Screen 
          name= 'Chats'
          component= {Chats} 
      />
      <Tab.Screen 
          name= 'Status'
          component= {Status} 
      />
      <Tab.Screen 
          name= 'Calls'
          component= {Calls} 
      />
         
    </Tab.Navigator>
    
  )
}

const styles = StyleSheet.create({
  tabBarLabel : {
    display : 'none'
  }

});