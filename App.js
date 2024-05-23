import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons'

import CategoriesScreen from './screens/CategoriesSceen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDescriptionScreen from './screens/MealDescriptionScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator =()=>{
  return(
    <Drawer.Navigator
    screenOptions={{
      contentStyle: {backgroundColor: '#3f3f25'},
            headerStyle: {backgroundColor: '#352401'},
            headerTintColor: 'white',
            drawerContentStyle: {backgroundColor: '#352401'},
            drawerInactiveTintColor: 'white',
            drawerActiveTintColor: '#351401',
            drawerActiveBackgroundColor: '#e4baa1'
    }}>
      <Drawer.Screen 
      name='Categories'
       component={CategoriesScreen}
       options={{
        title: 'All Categories',
        drawerIcon: ({color,size})=>(
          <Ionicons name='list' color={color} size={size}/>
        ),
       }}/>
      <Drawer.Screen
       name='Faviorites' 
       component={FavoritesScreen}
       options={{
       drawerIcon: ({color,size})=>(
        <Ionicons name='list' color={color} size={size}/>
      ),
       }}/>
       
    </Drawer.Navigator>
  )

}
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
          name="Drawer" 
          component={DrawerNavigator}
          options={{
            headerShown: false,
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
