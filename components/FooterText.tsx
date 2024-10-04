import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Colors } from '@/constants/Colors';

const CollapasbleText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Grab The Best Wins In Kheloyaar360: Best Online Sports Betting Sites In India, 2024 The Home Of Casino, Cricket, Horse Racing, Football And Many More.
      </Text>
      <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightDark,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  text: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 10, 
  },
});

export default CollapasbleText;
