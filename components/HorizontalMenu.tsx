import { Colors } from '@/constants/Colors';
import { sports } from '@/services/db';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { SvgUri } from 'react-native-svg';

const HorizontalMenu = () => {
  const [activeSport, setActiveSport] = useState('Cricket');
  const handlePress = (sport: string) => {
    setActiveSport(sport);
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {sports.map((sport, index) => (
          <TouchableOpacity key={index} onPress={() => handlePress(sport.name)}>
            <View style={[styles.button, activeSport === sport.name && styles.activeButton]}>
              <SvgUri
                width={18}
                height={18}
                uri={sport.icon}
              />
              <Text style={[styles.text, activeSport === sport.name && styles.activeText]}>
                {sport.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkGray, 
    paddingVertical: 2,
    borderWidth: .2,
    borderColor: Colors.lightRgba,
    marginTop: 5,
    marginLeft: 5
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2c2c', 
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: Colors.gold, 
  },
  text: {
    color: Colors.white, 
    marginLeft: 10,
    fontSize: 12,
    fontWeight: '500',
  },
  activeText: {
    color: Colors.primary,
  },
});

export default HorizontalMenu;
