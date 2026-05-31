import { FlatList } from 'react-native';
import { CategoryGridTile } from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

export const CategoriesScreen = () => {
    const renderCategoryItem = itemData => {
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
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