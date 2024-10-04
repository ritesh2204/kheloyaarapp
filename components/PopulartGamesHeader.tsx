import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

interface HeaderProps {
  title: string;
  actionText: string;
  onPress: () => void;
}

const PopularGamesHeader: React.FC<HeaderProps> = ({ title, actionText, onPress }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftContainer}>
        <MaterialCommunityIcons name="gamepad-variant" size={24} color="white" style={styles.icon} />
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.rightContainer} onPress={onPress}>
        <Text style={styles.actionText}>{actionText}</Text>
        <AntDesign name="arrowright" size={12} color={Colors.gold} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.lightDark, 
    padding: 5,
    borderRadius: 7,
    marginTop: 10,
    marginHorizontal: 4
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  titleText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    color: Colors.gold,
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default PopularGamesHeader;