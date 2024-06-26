import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { MEALS } from '../data/dummy-data';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../components/IconButton';

const MealDescriptionScreen = ({route}) => {
    const navigation = useNavigation();

    const MealId = route.params.MealId;
     
    const selectedMeal = MEALS.find((meal)=> meal.id === MealId) 

    const headerButtonPressHandler = ()=>{
        console.log('pressed!');
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>{
                return <IconButton 
                        icon="star" 
                        color="white"
                         onPress={headerButtonPressHandler}/>
            }
        })
    })

  return (
    <ScrollView >
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
       <View>
        <MealDetails
       duration={selectedMeal.duration}
       complexity={selectedMeal.complexity}
       affordability={selectedMeal.affordability}
       textStyle={styles.detailText}
       />
      </View>
      <View style={styles.listOuterContainer}>
      <View style={styles.listContainer}>
      <Subtitle>Ingredients</Subtitle>
       <List data={selectedMeal.ingredients}/>
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps}/>
       </View>
      </View>
      </ScrollView>
  )
}

export default MealDescriptionScreen

const styles = StyleSheet.create({
    rootContainer:{
       marginBottom: 32,
    },
    image:{
        width: "100%",
        height: 350,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText:{
        color: 'white',
    },
    listOuterContainer:{
       alignItems: 'center',
    },
    listContainer:{
        width: '80%',
    },


})