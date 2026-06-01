import { StyleSheet, FlatList, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealItem } from "../components/MealItem";

export const MealsOverviewScreen = () => {
    const route = useRoute();
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter(() => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    const renderMealItem = (itemData) => {
        return <MealItem title={itemData.item.title} />
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals} 
                keyExtractor={(item) => item.id} 
                renderItem={renderMealItem}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})