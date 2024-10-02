import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { SvgUri } from 'react-native-svg';
import { Images } from '@/constants/Images';
import { LinearGradient } from 'expo-linear-gradient';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <SvgUri
                    width="24"
                    height="24"
                    uri={Images.menuIcon}
                    fill={Colors.white}
                />
                <SvgUri
                    width="120"
                    height="120"
                    uri={Images.logo}
                    fill={Colors.white}
                    style={styles.logo}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['#f2d71a', '#ecb024']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.demoButton}
                    >
                        <Text style={styles.demoButtonText}>Demo</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={[styles.row, { backgroundColor: Colors.gold, padding: 1, borderRadius: 5 }]}>
                    <TouchableOpacity style={styles.loginButton}>
                        {/* <Icon name="sign-in" size={16} color="#fff" /> */}
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signupButton}>
                        {/* <Icon name="user-plus" size={16} color="#000" /> */}
                        <Text style={styles.signupButtonText}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        height: 50,
        marginTop: 30
    },
    logo: {
        height: 120,
        width: 120,
        resizeMode: 'contain',
        marginLeft: 15
    },
    menuIcon: {
        width: 100,
        height: 100,
        color: Colors.white,
        resizeMode: 'contain'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    demoButton: {
        backgroundColor: Colors.gold,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 5,
        marginRight: 10,
    },
    demoButtonText: {
        color: Colors.primary,
        fontWeight: 'bold',
    },
    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    loginButtonText: {
        color: Colors.white,
        fontSize: 13,
        // marginLeft: 5,
        fontWeight: 'bold',
    },
    signupButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.gold,
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    signupButtonText: {
        color: Colors.primary,
        fontSize: 13,
        fontWeight: 'bold',
    },
});

export default Header;