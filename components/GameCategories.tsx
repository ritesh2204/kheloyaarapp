import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

interface GameItem {
    id: string;
    title: string;
    games: number;
    image: string;
}

const data: GameItem[] = [
    { id: '1', title: 'Cricket', games: 1254, image: 'https://iriscdn.b-cdn.net/kheloyaar360.net/banners/3124.png'},
    { id: '2', title: 'Football', games: 124, image: 'https://iriscdn.b-cdn.net/kheloyaar360.net/banners/3125.png'},
    { id: '3', title: 'Tennis', games: 545, image: 'https://iriscdn.b-cdn.net/kheloyaar360.net/banners/3126.png'},
    { id: '4', title: 'Horse racing', games: 545, image: 'https://iriscdn.b-cdn.net/kheloyaar360.net/banners/3128.png'},
    { id: '5', title: 'Grey Houn', games: 545, image: 'https://iriscdn.b-cdn.net/kheloyaar360.net/banners/3129.png'},
];

const GameCard: React.FC<GameItem> = ({ title, games, image}) => (
    <View style={styles.card}>
        <View style={styles.gameInnerContent}>
        <Text style={styles.title}>{title}</Text>
        </View>
        <Image source={{ uri: image }} style={styles.image} />
    </View>
);

const GameCategories: React.FC = () => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <GameCard title={item.title} games={item.games} image={item.image} id={item.id} />
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    gameInnerContent:{
        flexDirection: 'column',
        marginLeft: 10
    },
    card: {
        flexDirection: 'row',
        backgroundColor: Colors.gold,
        borderRadius: 4,
        padding: 10,
        alignItems: 'center',
        width: 120,
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