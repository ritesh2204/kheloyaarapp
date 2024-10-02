import React from 'react';
import { View, Dimensions, Text, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const Slider = () => {
    const width = Dimensions.get('window').width;
    const images = [
        'https://iriscdn.b-cdn.net/kheloyaar360.net/banners/9600.png',
        'https://iriscdn.b-cdn.net/kheloyaar360.net/banners/12774.png',
    ];
    return (
        <View style={{flex: 1}}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={images}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
        
                        }}
                    >
                        <Image source={{ uri: images[index] }} style={{ width: '100%', height: '100%' }} />
                    </View>
                )}
            />
        </View>
    );
}

export default Slider;