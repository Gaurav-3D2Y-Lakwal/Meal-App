import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CategoriesScreen from './screens/CategoriesSceen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDescriptionScreen from './screens/MealDescriptionScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style='light'/>
       <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          contentStyle: {backgroundColor: '#3f3f25'},
          headerStyle: {backgroundColor: '#352401'},
          headerTintColor: 'white',
          
        }}>
          <Stack.Screen 
          name="Meals Categories" 
          component={CategoriesScreen}
          options={{
            title: 'All Categories'
          }}
            />
          <Stack.Screen 
          name="MealsOverview" 
          component={MealsOverviewScreen}/>
          <Stack.Screen 
          name="Meal Description"
          component = {MealDescriptionScreen}
          />
        </Stack.Navigator>
       </NavigationContainer>
       </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
