import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { useContext, useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";

import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }) {
    const favoriteMealsCtx = useContext(FavoritesContext)

    const mealId = route.params.mealId

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)

    function headerButtonPressHandler() {
        if (mealIsFavorite) {
            favoriteMealsCtx.removeFavorite(mealId)
        } else {
            favoriteMealsCtx.addFavorite(mealId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon={mealIsFavorite ? "star" : "star-outline"}
                    color="white"
                    onPress={headerButtonPressHandler}
                />
            }
        })
    }, [headerButtonPressHandler, navigation])


    return (
        <ScrollView style={styles.rootContainer}>
            <View>
                <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
                <Text style={styles.title}>{selectedMeal.title}</Text>
                <MealDetails
                    textStyle={styles.detailText}
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}
                />
                <View style={styles.listOuterContainer}>
                    <View style={styles.listContainer}>
                        <Subtitle>Ingredients:</Subtitle>
                        <List data={selectedMeal.ingredients} />
                        <Subtitle>Steps:</Subtitle>
                        <List data={selectedMeal.steps} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    detailText: {
        color: '#ba631e'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
})