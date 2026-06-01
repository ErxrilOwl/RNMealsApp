import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

export const MealsOverviewScreen = () => {
    const route = useRoute();
    const catId = route.params.categoryId;

    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen = {catId}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})