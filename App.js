import React from 'react';
import {View } from 'react-native';
import Form from './components/Form';
import HistoryScreen from './components/HistoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <View >
      <NavigationContainer >
        <Stack.Navigator >

          <Stack.Screen name="Form" component={Form} />
          <Stack.Screen name="History" component={HistoryScreen} />
        </Stack.Navigator>


      </NavigationContainer>


      {/* <Form /> */}
      

    </View>
  );
}
