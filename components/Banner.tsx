import { View , StyleSheet, Image, ImageSourcePropType} from "react-native";

interface BannerProps {
    imageOne: ImageSourcePropType;
    imageTwo: ImageSourcePropType;
}

const Banner: React.FC<BannerProps> = ({imageOne, imageTwo}) => {
    return (
        <View style={styles.row}>
            <Image source={imageOne} style={styles.image} />
            <Image source={imageTwo} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    image:{
        width: '50%',
        height: 80,
        resizeMode: 'contain',
        borderRadius: 8
    }
});

export default Banner;