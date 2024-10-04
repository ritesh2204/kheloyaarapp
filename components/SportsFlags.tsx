import { Colors } from '@/constants/Colors';
import { Images } from '@/constants/Images';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SportsFlags = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.gif}>
          <Image source={{ uri: 'https://iriscdn.b-cdn.net/kheloyar/new_icons/horse-racing.gif' }} style={styles.animal} />
        </View>
        <View style={styles.flagsRow}>
          <View style={styles.flagContainer}>
            <Image source={{ uri: Images.gb }} style={styles.flag} />
            <Text style={styles.label}>GB</Text>
          </View>
          <View style={styles.flagContainer}>
            <Image source={{ uri: Images.us }} style={styles.flag} />
            <Text style={styles.label}>US</Text>
          </View>
          <View style={styles.flagContainer}>
            <Image source={{ uri: Images.nz }} style={styles.flag} />
            <Text style={styles.label}>NZ</Text>
          </View> 
          <View style={styles.flagContainer}>
            <Image source={{ uri: Images.au }} style={styles.flag} />
            <Text style={styles.label}>AU</Text>
          </View>
          <View style={styles.flagContainer}>
            <Image source={{ uri: Images.ie }} style={styles.flag} />
            <Text style={styles.label}>IE</Text>
          </View>
        </View>
      </View>
      {/* <View style={styles.row}>
        <View style={styles.gif}>
          <Image source={{ uri: Images.horse }} style={styles.animal} />
        </View>
        <View style={[styles.flagContainer, { width: '100%', }]}>
          <Image source={{ uri: Images.gb }} style={styles.flag} />
          <Text style={styles.label}>GB</Text>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  animal: {
    width: 50,
    height: 49,
    marginHorizontal: 22,
    resizeMode: 'contain'
  },
  flagsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 30,
    backgroundColor: Colors.darkGray,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  flagContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  flag: {
    width: 20,
    height: 20,
  },
  gif:{
    backgroundColor: Colors.darkGray,
  },
  label: {
    color: Colors.white,
    marginTop: 5,
    fontSize: 12,
  },
});

export default SportsFlags;
