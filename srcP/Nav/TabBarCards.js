import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CardOpened from '../Telas/CardOpened';
import Cards from '../Telas/Cards';

const TabBarCards = () => {

  const Tabs = createBottomTabNavigator();
  
  return(
    <Tabs.Navigator initialRouteName='Cards' screenOptions={{headerShown: false}} tabBar={() => null} >
      <Tabs.Screen name='Cards' component={Cards} />
      <Tabs.Screen name='CardOpened' component={CardOpened} options={{headerShown: false, }} />
    </Tabs.Navigator>
  )
}

export default TabBarCards;