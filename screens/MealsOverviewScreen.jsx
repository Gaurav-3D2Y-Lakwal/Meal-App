import { FlatList, StyleSheet, Image, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useNavigation } from '@react-navigation/native';

const MealsOverviewScreen = ({route}) => {
   const navigation = useNavigation();

   const catId = route.params.categoryId;

   const displayMeals = MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId) >=0; 
   })

   useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find((category)=> category.id === catId).title;

    navigation.setOptions({
        title: categoryTitle
    })
   },[catId, navigation])

   const renderMealItem=(itemData)=>{
       const item = itemData.item;

       const mealItemProps = {
        id: item.id,
        title: item.title,
        imageUrl: item.imageUrl,
        affordability: item.affordability,
        complexity: item.complexity,
        duration: item.duration
       }
    return (
        <MealItem {...mealItemProps} /> 
    )
   }

  return (
    <View>
      <FlatList 
      data={displayMeals}
      keyExtractor={(item)=>item.id}
      renderItem={renderMealItem}/>
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
    },
})