import { FlatList } from 'react-native';
import { CategoryGridTile } from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

export const CategoriesScreen = ({ navigation }) => {

    const pressHandler = (itemData) => {
        navigation.navigate('MealsOverview', {
            categoryId: itemData.item.id
        })
    }

    const renderCategoryItem = itemData => {
        return <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color} 
            onPress={() => pressHandler(itemData)}/>
    }

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={item => item.id} 
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}