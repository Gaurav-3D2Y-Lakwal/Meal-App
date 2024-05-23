import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { useNavigation } from "@react-navigation/native";

const CategoryScreen=()=>{
    const navigation = useNavigation();

    function renderCategoryItem(itemData){
        function PressHandler(){
            navigation.navigate('MealsOverview',{
                categoryId: itemData.item.id,
            });
        }

        return (
            <CategoryGridTile
             title={itemData.item.title}
              color={itemData.item.color}
              onPress={PressHandler}/>
        )
    }

    return(
        <FlatList 
        data={CATEGORIES}
        keyExtractor={(item)=>item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        />
    )
}

export default CategoryScreen;