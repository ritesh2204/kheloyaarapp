import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';

const MatchHeader = () => {
    return (
        <View style={styles.border}>
            <LinearGradient
                colors={[Colors.evenpink, Colors.evenblue]} 
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.headerContainer}
            >
            </LinearGradient>
            <View style={styles.contentContainer}>
                <MaterialCommunityIcons name="gamepad-variant" size={24} color="white" style={styles.icon} />
                <Text style={styles.text}>
                    Test Team 1 <Text style={styles.vsText}>vs</Text> Test Team 2
                </Text>
                <View style={styles.statusContainer}>
                    <View style={styles.statusDot} />
                    <MaterialCommunityIcons name="monitor" size={12} color="white" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        padding: 10,
    },
    border:{
        borderWidth: 1,
        borderColor: Colors.lightDark
        ,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 6,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
        flex: 1,
    },
    vsText: {
        color: Colors.darkGrey,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Colors.whatsappGreen, 
        marginRight: 5,
    },
});

export default MatchHeader;
