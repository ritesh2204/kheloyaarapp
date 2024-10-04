import React from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

interface Game {
  id: string;
  title: string;
  image: string;
}

interface GameListProps {
  games: Game[];
  onPress: (id: string) => void;  
}

const GameCard: React.FC<{ game: Game; onPress: (id: string) => void }> = ({ game, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(game.id)} style={styles.cardContainer}>
      <Image source={{ uri: game.image }} style={styles.image} />
    </TouchableOpacity>
  );
};

const HorizontalGameList: React.FC<GameListProps> = ({ games, onPress }) => {
  return (
    <FlatList
      data={games}
      renderItem={({ item }) => <GameCard game={item} onPress={onPress} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  cardContainer: {
    width: Dimensions.get('window').width * 0.3,  
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 5,
  },
  gameTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HorizontalGameList;
