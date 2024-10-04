import { carouselImages } from '@/services/db';
import React from 'react';
import { View, Dimensions, Image, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const ImageSlider = () => {
    const width = Dimensions.get('window').width;
    return (
        <View style={{flex: 1}}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={carouselImages}
                scrollAnimationDuration={5000}
                renderItem={({ index }) => (
                    <View
                        style={styles.imageContainer}
                    >
                        <Image source={{ uri: carouselImages[index] }} style={styles.image} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
});

export default ImageSlider;