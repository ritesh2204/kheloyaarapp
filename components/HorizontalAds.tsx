import { Colors } from '@/constants/Colors';
import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';

interface HorizontalScrollViewProps {
    images: string[];
}

const HorizontalAds: React.FC<HorizontalScrollViewProps> = ({ images }) => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {images.map((image, index) => (
                <View key={index} style={styles.card}>
                    <Image
                        source={{ uri: image }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 120,
        height: 80,
        backgroundColor: Colors.lightDark,
        borderRadius: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    }
});

export default HorizontalAds;