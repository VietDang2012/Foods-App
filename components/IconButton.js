import { Pressable, StyleSheet, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

function IconButton({ icon, color, onPress }) {
    return (
        <View style={styles.button}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <Ionicons name={icon} size={24} color={color} />
            </Pressable>
        </View>
    )
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    },
    button: {
        marginRight: 12
    }
})