import { Colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

interface MatchCardProps {
    time: string;
    team1: string;
    team2: string;
    odds: Array<{ value: string, color: string, stake: string }>;
}   

const MatchCard: React.FC<MatchCardProps> = ({ time, team1, team2, odds }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.icons}>
                    {/* <Image source={require("../assets/images/signal.png")} style={styles.icon} /> */}
                    <Text style={styles.timeText}>{time}</Text>
                </View>
                <View style={styles.icons}>
                    <View style={styles.dot} />
                    <View style={styles.iconWrapper}><Text style={styles.iconText}>XTRA</Text></View>
                    <View style={styles.iconWrapper}><Text style={styles.iconText}>FM</Text></View>
                    <View style={styles.iconWrapper}><Text style={styles.iconText}>BM</Text></View>
                    <View style={styles.iconWrapper}><Text style={styles.iconText}>BF</Text></View>
                </View>
            </View>
            <View style={styles.icons}>
                {/* <Image source={require('../assets/images/cricketColorful.png')} style={styles.icon}/> */}
            <Text style={styles.matchText}>{team1} <Text style={styles.vsText}>vs</Text> {team2}</Text>

            </View>
            <View style={styles.oddsContainer}>
                {odds?.map((odd, index) => (
                    <View key={index} style={[styles.oddBox, { backgroundColor: odd.color }]}>
                        <Text style={styles.oddText}>{odd.value}</Text>
                        {/* <Text style={styles.stakeText}>{odd.stake}</Text> */}
                    </View>
                ))}
            </View>
        </View>
    );  
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    timeText: {
        color: Colors.white,
        fontSize: 6,
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#77D353',
        marginRight: 5,
    },
    iconWrapper: {
        backgroundColor: '#2F3243',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 3,
        marginLeft: 3,
    },
    iconText: {
        color: Colors.white,
        fontSize: 7,
    },
    matchText: {
        color: Colors.white,
        fontSize: 10,
        marginVertical: 5,
    },
    vsText: {
        color: '#888',
    },
    oddsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    icon:{
        resizeMode: 'contain',
        height: 10,
        width: 10,
        marginRight: 10
    },
    oddBox: {
        width: 59,
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    oddText: {
        color: Colors.white,
        fontSize: 12,
        fontWeight: 'bold',
    },
    stakeText: {
        color: '#BEBEBE',
        fontSize: 8,
    },
});

export default MatchCard;