import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5,MaterialIcons , FontAwesome6} from '@expo/vector-icons'; // for social icons
import { Colors } from '@/constants/Colors';

const FooterBottom = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.linksContainer}>
        <View style={styles.column}>
          <Text style={styles.header}>PRIMARY</Text>
          <TouchableOpacity><Text style={styles.linkText}>All Sports</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.linkText}>In-Play</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.linkText}>All Casinos</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.linkText}>Blogs</Text></TouchableOpacity>
        </View>
        <View style={styles.column}>
          <Text style={styles.header}>SETTINGS</Text>
          <TouchableOpacity><Text style={styles.linkText}>Contact Us</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.linkText}>Cookie Policy</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.linkText}>Responsible Gambling</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.linkText}>Terms & Conditions</Text></TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity>
          <FontAwesome5 name="facebook" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome6 name="x-twitter" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="youtube" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="instagram" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="telegram" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: Colors.darkGray,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  column: {
    flexDirection: 'column',
  },
  header: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  linkText: {
    color: Colors.menuLink,
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'center'
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: '#2C2C2E',
  },
});

export default FooterBottom;
