import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';

interface GameItem {
    id: string;
    title: string;
    image: string;
    gradientColors: string[];
}

interface GameCategoriesProps {
    data: GameItem[];
}

const GameCard: React.FC<GameItem> = ({ title, image, gradientColors }) => (
    <LinearGradient colors={gradientColors} style={styles.card}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
    >
        <View style={styles.gameInnerContent}>
            <Text style={styles.title}>{title}</Text>
        </View>
        <Image source={{ uri: image }} style={styles.image} />
    </LinearGradient>
);

const GameCategories: React.FC<GameCategoriesProps> = ({ data }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <GameCard {...item} />
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    gameInnerContent: {
        flexDirection: 'column',
        marginLeft: 10
    },
    card: {
        flexDirection: 'row',
        backgroundColor: Colors.gold,
        borderRadius: 4,
        padding: 10,
        alignItems: 'center',
        height: 50,
        marginTop: 10,
        marginLeft: 4
    },
    image: {
        width: 31.32,
        height: 31.32,
        borderRadius: 6.96,
        marginLeft: 10
    },
    title: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: 'bold',
    }
});

export default GameCategories;