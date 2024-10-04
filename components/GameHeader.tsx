import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";

const VirtualGameHeader = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/virtualCricket.png')} style={styles.icon}/>
            <Text style={styles.text}>View All</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.lightDark,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: 130,
        height: 30,
        resizeMode: 'contain'
    },
    text: {
        color: Colors.white,
        fontSize: 12,
        fontWeight: 'bold',
        marginRight: 10
    }
})

export default VirtualGameHeader;      