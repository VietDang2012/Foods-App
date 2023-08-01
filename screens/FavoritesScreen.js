import { StyleSheet, Text } from "react-native";
import { useContext } from "react"

import { FavoritesContext } from "../store/context/favorites-context";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
import { View } from "react-native";

function FavoritesScreen() {
    const favoriteMealsCtx = useContext(FavoritesContext)

    const favoriteMeals = MEALS.filter(meal =>
        favoriteMealsCtx.ids.includes(meal.id))

    if (favoriteMeals.length > 0)
        return <MealList items={favoriteMeals} />
    else
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals</Text>
            </View>
        )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ba631e'
    }
})