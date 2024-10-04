import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { Images } from '@/constants/Images';
import { SvgUri } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

const Footer = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.downloadButtonWrapper}>
                <LinearGradient
                    colors={[Colors.yellow, Colors.gold]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.downloadButton}
                >
                    <FontAwesome name="download" size={24} color="black" />
                    <Text style={styles.downloadText}>Download App</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.whatsappButton}>
                <FontAwesome name="whatsapp" size={24} color="white" />
                <Text style={styles.whatsappText}>Get Instant ID on WhatsApp</Text>
            </TouchableOpacity>
            <View style={styles.tutorialsContainer}>
                <Text style={styles.tutorialsTitle}>TUTORIALS</Text>
                <View style={styles.tutorialsRow}>
                    <TutorialButton text="How to Signup ?" />
                    <TutorialButton text="How to Login ?" />
                </View>
                <View style={styles.tutorialsRow}>
                    <TutorialButton text="How to Deposit ?" />
                    <TutorialButton text="How to Withdraw ?" />
                </View>
                <View style={styles.tutorialsRow}>
                    <TutorialButton text="How to Play ?" />
                </View>
            </View>
            <View style={styles.footer}>
                <SvgUri
                    width="250"
                    height="40"
                    uri={Images.logo}
                    fill={Colors.white}
                />
                <Text style={styles.copyright}>
                    © 2022 Kheloyaar360.net. All rights reserved.
                </Text>
            </View>
        </View>
    );
};

const TutorialButton = ({ text }: { text: string }) => {
    return (
        <TouchableOpacity style={styles.tutorialButtonContainer}>
            <LinearGradient
                colors={[Colors.yellow, Colors.gold]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.tutorialButton}
            >
                <FontAwesome name="video-camera" size={12} color={Colors.primary} style={{ marginRight: 8 }} />
                <Text style={styles.tutorialText}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.darkGray,
        padding: 20,
        alignItems: 'center',
        marginTop: 20
    },
    downloadButtonWrapper: {
        width: '100%',
        maxWidth: 280,
    },
    downloadButton: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 70,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
    },
    downloadText: {
        color: Colors.primary,
        fontWeight: 'medium',
        fontSize: 16,
        marginLeft: 10,
    },
    whatsappButton: {
        backgroundColor: Colors.lightDark,
        borderWidth: 1,
        borderColor: Colors.gold,
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 30,
    },
    tutorialButtonContainer: {
        borderWidth: 1, 
        borderColor: Colors.gold, 
        borderRadius: 5, 
        padding: 1, 
        width: '50%', 
        marginBottom: 15
    },
    whatsappText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    tutorialsContainer: {
        marginBottom: 20,
    },
    tutorialsTitle: {
        textAlign: 'center',
        color: Colors.white,
        fontSize: 22,
        fontWeight: 'medium',
        marginBottom: 15,
    },
    tutorialsRow: {
        flexDirection: 'row',
        marginBottom: 10,
        gap: 10,
        marginRight: 10,
    },
    tutorialButton: {
        flex: 1,
        backgroundColor: Colors.gold,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        paddingVertical: 5,
        width: '100%'
    },
    tutorialText: {
        color: Colors.primary,
        fontSize: 10,
        fontWeight: 'medium',
    },
    footer: {
        alignItems: 'center',
        marginTop: 0,
    },
    logo: {
        width: 150,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    copyright: {
        color: Colors.grey,
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 40
    },
});

export default Footer;
