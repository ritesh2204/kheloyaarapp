import { Colors } from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState('Inplay');

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  const tabs = ['Inplay', 'Tomorrow', 'Upcoming'];

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {tabs.map((tab, index) => (
          <TouchableOpacity key={index} onPress={() => handleTabPress(tab)}>
            <View style={styles.tabContainer}>
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
              {activeTab === tab && <View style={styles.underline} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* View More */}
      <TouchableOpacity onPress={() => console.log('View More pressed')}>
        <Text style={styles.viewMore}>View More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 2,
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
  },
  menu: {
    flexDirection: 'row',
  },
  tabContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  tabText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '500',
  },
  activeTabText: {
    fontWeight: 'bold',
  },
  underline: {
    height: 3,
    backgroundColor: Colors.gold,
    width: '100%',
    marginTop: 4,
  },
  viewMore: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '500',
  },
});

export default TabMenu;
